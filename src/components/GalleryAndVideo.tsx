import { motion, AnimatePresence } from "framer-motion";
import { heroImages } from "../constants/images";
import { ScrollToTop } from "../components";

import { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { FaTimes, FaPause, FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Title from "../components/Common/Title";
import { ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import { videoData } from "../constants/video";

// Media type definitions
interface VideoMedia {
  type: 'video';
  src: string;
  id: string;
  title: string;
  description: string;
}

interface ImageMedia {
  type: 'image';
  src: string;
}

type Media = VideoMedia | ImageMedia;

const GalleryAndVideo = () => {
  // Move memoized values inside component
  const allMedia = useMemo<Media[]>(() => [
    // Videos first
    ...videoData.map(video => ({
      type: 'video' as const,
      src: video.src,
      id: video.id,
      title: video.title,
      description: video.description
    })),
    // Then images
    ...Object.values(heroImages).map(src => ({ 
      type: 'image' as const, 
      src 
    }))
  ], []);

  // Get first 3 images for thumbnails (excluding videos)
  const thumbnailImages = useMemo(() => 
    allMedia
      .filter((media): media is ImageMedia => media.type === 'image')
      .slice(0, 3)
  , [allMedia]);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [_isVideoFullscreen, setIsVideoFullscreen] = useState(false);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null);

  // Reset video states when component unmounts
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      if (fullscreenVideoRef.current) {
        fullscreenVideoRef.current.pause();
        fullscreenVideoRef.current.currentTime = 0;
      }
    };
  }, []);

  // Handle video time updates
  useEffect(() => {
    const video = isFullscreen ? fullscreenVideoRef.current : videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setCurrentTime(0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
      if (isFullscreen) {
        video.currentTime = 0;
      }
    };
    
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, [isFullscreen, activeIndex]);

  // Format time for video progress
  const formatTime = useCallback((time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }, []);

  // Handle mouse enter/leave for video container
  const handleMouseEnter = useCallback(() => {
    setShowControls(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!isPlaying) return;
    setShowControls(false);
  }, [isPlaying]);

  const handleImageClick = useCallback((index: number) => {
    setIsFullscreen(true);
    setActiveIndex(index);
  }, []);

  const handleFullscreenVideo = useCallback(() => {
    setIsVideoFullscreen(true);
    setIsFullscreen(true);
    setActiveIndex(0);

    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const wasPlaying = !videoRef.current.paused;
      videoRef.current.pause();

      requestAnimationFrame(() => {
        if (fullscreenVideoRef.current) {
          fullscreenVideoRef.current.currentTime = currentTime;
          if (wasPlaying) {
            fullscreenVideoRef.current.play().catch(() => {
              setIsPlaying(false);
            });
          }
        }
      });
    }
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    const newIndex = swiper.realIndex;
    setActiveIndex(newIndex);
    
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);

    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.pause();
      fullscreenVideoRef.current.currentTime = 0;
    }
  }, []);

  const handleCloseFullscreen = useCallback(() => {
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.pause();
      fullscreenVideoRef.current.currentTime = 0;
    }

    setIsFullscreen(false);
    setIsVideoFullscreen(false);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, []);

  const togglePlay = useCallback(() => {
    const video = isFullscreen ? fullscreenVideoRef.current : videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(() => {
        setIsPlaying(false);
      });
    }
    setIsPlaying(!isPlaying);
  }, [isFullscreen, isPlaying]);

  const handleVideoProgress = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    
    const video = isFullscreen ? fullscreenVideoRef.current : videoRef.current;
    if (!video) return;
    
    const newTime = parseFloat(e.target.value);
    if (isNaN(newTime)) return;

    try {
      video.currentTime = newTime;
      setCurrentTime(newTime);
    } catch (error) {
      console.error('Error setting video time:', error);
    }
  }, [isFullscreen]);

  // Render video controls
  const renderVideoControls = useCallback(() => (
    <div 
      className={`absolute inset-0 flex flex-col justify-between bg-transparent transition-opacity duration-300 ${
        showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="p-4">
        <h3 className="text-white text-xl font-semibold">
          {allMedia[0].type === 'video' ? allMedia[0].title : ''}
        </h3>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <button
          onClick={togglePlay}
          className={`bg-white/80 p-4 rounded-full hover:bg-white transition-all transform hover:scale-110 pointer-events-auto ${
            showControls || !isPlaying ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          {isPlaying ? (
            <FaPause className="w-8 h-8 text-emerald-600" />
          ) : (
            <FaPlay className="w-8 h-8 text-emerald-600" />
          )}
        </button>
      </div>

      <div className={`p-4 space-y-2 transition-transform duration-300 ${
        showControls ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="w-full flex items-center gap-2">
          <span className="text-white text-sm min-w-[40px]">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min="0"
            max={duration || 100}
            step="0.1"
            value={currentTime || 0}
            onChange={handleVideoProgress}
            onClick={(e) => e.stopPropagation()}
            className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-emerald-500 hover:h-2 transition-all"
            style={{
              background: `linear-gradient(to right, #10b981 ${(currentTime / duration) * 100}%, rgba(255,255,255,0.3) ${(currentTime / duration) * 100}%)`
            }}
          />
          <span className="text-white text-sm min-w-[40px]">
            {formatTime(duration)}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleFullscreenVideo();
            }}
            className="hover:text-emerald-400 transition-colors ml-2"
          >
            <ArrowsPointingOutIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  ), [showControls, isPlaying, currentTime, duration, formatTime, handleVideoProgress, handleFullscreenVideo, togglePlay]);

  return (
    <section className='bg-white' id="gallery">
      <div className='max-w-7xl mx-auto py-0 px-4 md:px-8'>
        <div className="flex flex-col gap-16">
            <Title 
                mainTitle="Gallery & Video" 
                subtitle="Discover our property through comprehensive video tours showcasing the stunning river frontage and complete property overview"
                className="text-emerald-900"
            />
            {/* Main Gallery Container - Responsive */}
            <div className="mb-8 md:mb-12">
            {/* Mobile Layout */}
            <div className="block lg:hidden">
                <div className="space-y-4">
                {/* Main Image/Video */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-xl overflow-hidden aspect-video bg-gray-100 cursor-pointer"
                    onClick={() => handleImageClick(0)}
                >
                    {allMedia[0].type === 'video' ? (
                    <div className="relative w-full h-full">
                        <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        muted
                        playsInline
                        onClick={(e) => {
                            e.stopPropagation();
                            togglePlay();
                        }}
                        >
                        <source src={allMedia[0].src} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                        
                        {/* Video Overlay */}
                        <div className="absolute inset-0 bg-transparent flex flex-col justify-between">
                        <div className="p-4">
                            <h3 className="text-white text-lg font-semibold">
                            {allMedia[0].title}
                            </h3>
                        </div>

                        <div className="p-4">
                            <div className="text-white text-sm bg-black/50 px-3 py-1 rounded-full w-fit">
                            {isPlaying ? 'Tap to pause' : 'Tap to play'}
                            </div>
                        </div>
                        </div>
                    </div>
                    ) : (
                    <div className="relative w-full h-full">
                        <img
                        src={allMedia[0].src}
                        className="w-full h-full object-cover"
                        alt="Featured gallery image"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="bg-white/90 p-3 rounded-full">
                            <ArrowsPointingOutIcon className="w-6 h-6 text-emerald-600" />
                        </div>
                        </div>
                    </div>
                    )}
                </motion.div>

                {/* Mobile Thumbnails Grid */}
                <div className="grid grid-cols-4 gap-2">
                    {allMedia.slice(1, 9).map((media, index) => (
                    <motion.div
                        key={index + 1}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        onClick={() => handleImageClick(index + 1)}
                        className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
                    >
                        {media.type === 'video' ? (
                        <div className="relative w-full h-full">
                            <video 
                            className="w-full h-full object-cover"
                            muted
                            playsInline
                            >
                            <source src={media.src} type="video/mp4" />
                            </video>
                            <div className="absolute inset-0  flex items-center justify-center">
                            <div className="bg-white/90 p-2 rounded-full">
                                <FaPlay className="w-3 h-3 text-emerald-600" />
                            </div>
                            </div>
                        </div>
                        ) : (
                        <img
                            src={media.src}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            alt={`Thumbnail ${index + 2}`}
                        />
                        )}
                        
                        {/* Show more indicator */}
                        {index === 7 && allMedia.length > 9 && (
                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                            <div className="text-center text-white">
                            <div className="text-lg font-bold">+{allMedia.length - 8}</div>
                            <div className="text-xs">more</div>
                            </div>
                        </div>
                        )}
                    </motion.div>
                    ))}
                </div>

                {/* Mobile Gallery Stats */}
                <div className="bg-emerald-50 rounded-lg p-4 text-center">
                    <p className="text-emerald-700 text-sm">
                    <span className="font-semibold">{allMedia.length} items</span> in gallery
                    • Tap any image to explore
                    </p>
                </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex gap-4 h-[550px] xl:h-[650px]">
                {/* Main large image/video */}
                <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-[3] relative rounded-xl overflow-hidden cursor-pointer h-full"
                >
                {allMedia[0].type === 'video' ? (
                    <div 
                      ref={videoContainerRef}
                      className="relative w-full h-full"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        onClick={togglePlay}
                    >
                        <source src={allMedia[0].src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {renderVideoControls()}
                    </div>
                ) : (
                    <img
                    src={allMedia[0].src}
                    className="w-full h-full object-cover"
                    alt="Featured gallery image"
                    onClick={() => handleImageClick(0)}
                    />
                )}
                </motion.div>

                {/* Right side thumbnails */}
                <div className="flex-1 flex flex-col gap-3 h-full">
                {thumbnailImages.map((image, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => handleImageClick(index + 2)}
                    className="relative cursor-pointer rounded-xl overflow-hidden flex-1 group"
                    >
                    <img
                        src={image.src}
                        className={`w-full h-full object-cover transition-transform duration-500 hover:scale-110 ${
                        index === 2 ? 'brightness-50' : ''
                        }`}
                        alt={`Thumbnail ${index + 1}`}
                    />
                    {index === 2 ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-2xl md:text-4xl font-bold">+{allMedia.length - 4}</span>
                        </div>
                    ) : (
                        <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-0.5 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        {index + 3} / {allMedia.length}
                        </div>
                    )}
                    </motion.div>
                ))}
                </div>
            </div>
            </div>
        </div>

       
      </div>

      {/* Fullscreen Gallery */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[101]"
          >
            <button
              className="absolute top-3 right-3 md:top-4 md:right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors z-[102]"
              onClick={handleCloseFullscreen}
            >
              <FaTimes size={20} className="md:w-6 md:h-6" />
            </button>
            <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium z-[102]">
              {activeIndex + 1} / {allMedia.length}
            </div>

            <Swiper
              modules={[Pagination, Navigation]}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
                dynamicBullets: true,
              }}
              navigation={{
                nextEl: '.custom-button-next',
                prevEl: '.custom-button-prev',
              }}
              initialSlide={activeIndex}
              loop={true}
              className="w-full h-full"
              centeredSlides={true}
              onSlideChange={handleSlideChange}
            >
              {allMedia.map((media, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center p-4">
                    {media.type === 'video' ? (
                      <div 
                        className="relative w-full h-full flex items-center justify-center"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <video
                          ref={index === activeIndex ? fullscreenVideoRef : null}
                          className="max-w-[95%] max-h-[90vh] object-contain mx-auto"
                          onClick={togglePlay}
                        >
                          <source src={media.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>

                        {/* Fullscreen Video Controls */}
                        {index === activeIndex && (
                          <div 
                            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                              showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
                            }`}
                          >
                            <button
                              onClick={togglePlay}
                              className={`bg-white/80 p-4 md:p-6 rounded-full hover:bg-white transition-all transform hover:scale-110 ${
                                showControls || !isPlaying ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                              }`}
                            >
                              {isPlaying ? (
                                <FaPause className="w-8 h-8 md:w-10 md:h-10 text-emerald-600" />
                              ) : (
                                <FaPlay className="w-8 h-8 md:w-10 md:h-10 text-emerald-600" />
                              )}
                            </button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <img
                        style={{ filter: 'brightness(1.25)' }}
                        src={media.src}
                        className="max-w-[95%] max-h-[90vh] object-contain mx-auto"
                        alt={`Gallery item ${index + 1}`}
                      />
                    )}
                  </div>
                </SwiperSlide>
              ))}
              <div>
                    <button
                    className="custom-button-prev absolute left-2 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-400 text-emerald-700 hover:text-white rounded-full p-2"
                    onClick={() => {}}
                    >
                    <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
                    </button>
                    <button
                    className="custom-button-next absolute right-2 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-400 text-emerald-700 hover:text-white rounded-full p-2"
                    onClick={() => {}}
                    >
                    <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                    </button>
                </div>
              <div className="swiper-pagination">
                  <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
                  <span className="swiper-pagination-bullet"></span>
                  ...
              </div>
            </Swiper>
          </motion.div>
        )}
      </AnimatePresence>

      <ScrollToTop />
    </section>
  );
};

export default GalleryAndVideo;