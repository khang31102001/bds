import { useRef, useState } from 'react';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

const VIDEO_SRC = "https://cdn.pixabay.com/video/2022/12/07/141964-778907198_large.mp4"; // Replace with your own video if needed
const THUMBNAIL = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"; // Replace with your own thumbnail if needed

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className='relative py-16 px-4 md:px-12' id="video-tour" aria-label="Video Tour">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-8">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-cyan-900"
        >
          Video Boyup Brook Acreage
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-700 max-w-3xl mx-auto text-center"
        >
          Take a virtual tour of this stunning Boyup Brook acreage for sale, showcasing the natural beauty and potential of this prime Western Australian property.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="relative w-full mx-auto"
        >
          <div className='w-full h-full md:h-[500px] overflow-hidden rounded-lg'>
            <video
              ref={videoRef}
              className="w-full rounded-lg"
              poster={THUMBNAIL}
            >
              <source src={VIDEO_SRC} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <AnimatePresence>
            <motion.button
              onClick={togglePlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className="absolute bottom-4 right-4 bg-cyan-900 p-4 rounded-md shadow-lg hover:bg-cyan-800 transition-colors"
            >
              {isPlaying ? (
                <PauseIcon className="w-6 h-6 text-white" />
              ) : (
                <PlayIcon className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Video;