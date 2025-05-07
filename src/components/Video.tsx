import React, { useRef, useState } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

const VIDEO_SRC = "https://www.w3schools.com/html/mov_bbb.mp4"; // Replace with your own video if needed
const THUMBNAIL = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80"; // Replace with your own thumbnail if needed

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <section className="py-20 px-4 bg-gray-50" id="video-tour" aria-label="Video Tour">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-900 mb-4">Video Tour</h2>
        <p className="text-lg text-gray-700 mb-10">
          Find out more with our video of the most beautiful and pleasant places for you and your family.
        </p>
        <div className="relative w-full mx-auto">
          <video
            ref={videoRef}
            className="w-full rounded-lg"
            poster={THUMBNAIL}
            onPause={handlePause}
            onEnded={handlePause}
            controls={isPlaying}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {!isPlaying && (
            <button
              onClick={handlePlay}
              aria-label="Play video"
              className="absolute bottom-4 right-4 bg-cyan-900 p-4 rounded-md shadow-lg hover:bg-cyan-800 transition-colors"
            >
              <PlayIcon className="w-6 h-6 text-white" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Video; 