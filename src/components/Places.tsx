import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../public/img/img1.jpg'
import img2 from '../public/img/img2.jpg'
import img3 from '../public/img/img3.jpg'
import img4 from '../public/img/img4.jpg'
import img5 from '../public/img/img5.jpg'

import img_hill from '../public/img/img_hill.jpg'
import img_hill1 from '../public/img/img_hill-1.jpg'
import img_hill2 from '../public/img/img_hill-2.jpg'
import img_hill3 from '../public/img/img_hill-3.jpg'

const places = [
  {
    name: 'Natural Bushland',
    country: 'Western Australia',
    image: img1,
    gallery: [img1]
  },
  {
    name: 'River Views',
    country: 'Western Australia', 
    image: img3,
    gallery: [img3]
  },
  {
    name: 'Rolling Hills',
    country: 'Western Australia',
    image: img2,
    gallery: [img2, img_hill, img_hill1, img_hill2, img_hill3]
  },
  {
    name: 'Building Site',
    country: 'Western Australia',
    image: img4,
    gallery: [img4]
  },
  {
    name: 'Valley Views',
    country: 'Western Australia',
    image: img5,
    gallery: [img5]
  },
];

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 25
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.3
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  }
};

export default function Places() {
  const [selectedPlace, setSelectedPlace] = useState<typeof places[0] | null>(null);

  return (
    <section className='relative py-16 px-4 md:px-12' id="places">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center gap-8">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-cyan-900 text-center"
        >
          Places
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-700 max-w-3xl mx-auto text-center"
        >
          Discover this exceptional Boyup Brook acreage for sale, featuring pristine natural bushland, stunning river views, and gently rolling hills. This rare opportunity offers 2000m² of prime Western Australian land, perfect for building your dream country home. 
        </motion.p>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center"
        >
          {places.map((place) => (
            <motion.div
              key={place.name}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-full max-w-xs rounded-xl overflow-hidden shadow-lg group bg-white cursor-pointer"
              onClick={() => setSelectedPlace(place)}
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="absolute top-0 right-0 m-3 bg-emerald-800 bg-opacity-80 text-white text-xs px-2 py-1 rounded flex items-center gap-1"
              >
                <motion.span 
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-yellow-300"
                >
                  ★
                </motion.span>
              </motion.div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-cyan-900/80 to-transparent p-4">
                <h3 className="text-h3 font-bold text-white mb-1">{place.name}</h3>
                <div className="text-emerald-100 text-small mb-2">{place.country}</div>
                <div className="flex items-center justify-between">
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="#contact" 
                    className="text-white font-semibold"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.querySelector('#contact');
                      element?.scrollIntoView({
                        behavior: 'smooth'
                      });
                    }}
                  >Contact Us</motion.a>
                  <motion.span 
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-800/80 text-white ml-2"
                  >
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedPlace && (
            <motion.div 
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlace(null)}
            >
              <motion.div
                className="relative bg-white rounded-xl overflow-hidden max-w-4xl w-full"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={e => e.stopPropagation()}
              >
                <Swiper
                  modules={[Navigation, Pagination]}
                  // navigation
                  pagination={{ clickable: true }}
                  loop={true}
                  className="w-full h-[60vh]"
                >
                  {selectedPlace.gallery.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`${selectedPlace.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-6 bg-white"
                >
                  <h2 className="text-3xl font-bold text-cyan-900 mb-2">Boyup Brook For Sale</h2>
                  <p className="text-gray-600 mb-4">
                    Experience the beauty of Boyup Brook with this exceptional property. Featuring pristine natural bushland, stunning river views, and gently rolling hills. Perfect for your dream country home with 2000m² of prime Western Australian land.
                  </p>
                  <div className="flex items-center gap-4">
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#contact" 
                      className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full"
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector('#contact');
                        element?.scrollIntoView({
                          behavior: 'smooth'
                        });
                      }}
                    >
                      Contact Us
                    </motion.a>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
                      onClick={() => setSelectedPlace(null)}
                    >
                      Close
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}