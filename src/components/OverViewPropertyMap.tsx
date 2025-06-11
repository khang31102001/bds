import { useState } from 'react';
import { LandGatePlan } from '../constants/images';
import { FaTimes } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';


const images = [

  { src: LandGatePlan.landgatePlan3, alt: 'Vegetation Overlay' },
  { src: LandGatePlan.landgatePlan5, alt: 'Powerlines Infrastructure' },
];

const PropertyOverviewMap = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="property-map" className="w-full bg-white">
      <div className=" flex flex-col max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-emerald-900 mb-6">Property Overview Map</h2>   
        <div className='w-auto h-full p-2 mb-8' >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full rounded-2xl overflow-hidden shadow-xl h-[600px] relative group"
                >
                    <iframe
                    title="Boyup Brook Location"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3311.1241957041457!2d116.38427!3d-33.912203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDU0JzQzLjkiUyAxMTbCsDIzJzAzLjQiRQ!5e0!3m2!1sen!2s!4v1749030033985!5m2!1sen!2s&hl=en"

                    
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="transition-opacity duration-300"
                    />
                    
                    <div className="absolute top-2 left-2 bg-white backdrop-blur-sm p-4 rounded-xl shadow-lg max-w-sm">
                    <h4 className="text-lg font-semibold text-emerald-800 mb-2">Boyup Brook</h4>
                    <p className="text-sm text-emerald-800">
                        Located in the heart of Western Australia, Boyup Brook is a charming rural town known for its natural beauty and community spirit.
                    </p>
                    </div>
                </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="w-64 h-64 overflow-hidden rounded-xl shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <img
                style={{ filter: 'brightness(1.25)' }}
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
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
            centeredSlides={true}
            initialSlide={selectedImage}
            onSlideChange={(swiper: SwiperType) => setSelectedImage(swiper.activeIndex)}
            className='w-full h-full'
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx} className=' flex justify-center items-center'>

                <div className='flex items-center justify-center w-full h-full'>
                  <div className="relative max-w-3xl w-full mx-4">
                    <button
                      className="absolute top-3 right-3 md:top-4 md:right-4 bg-white text-green-900 p-2 rounded-full hover:bg-white/40 transition-colors z-[102]"
                      onClick={() => setSelectedImage(null)}
                    >
                      <FaTimes size={20} className="md:w-6 md:h-6" />
                    </button>
                    <img src={img.src} alt={img.alt} className="w-full max-h-[80vh] object-contain rounded-lg" />
                    <p className="mt-4 text-white text-center">{img.alt}</p>
                  </div>
                </div>

              </SwiperSlide>
            ))}
            <div>
              <button
                className={`custom-button-prev absolute left-2 top-1/2 -translate-y-1/2   
                              ${selectedImage === 0 ? 'bg-gray-200 opacity-30 cursor-not-allowed' : 'bg-slate-200 opacity-100'} 
                              hover:bg-gray-400 text-emerald-700 hover:text-white rounded-full p-2`}
                onClick={() => { }}
              >
                <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button
                className={`custom-button-next absolute right-2 top-1/2 -translate-y-1/2 
                              ${selectedImage === images.length - 1 ? 'bg-gray-200 opacity-30 ' : 'bg-gray-200 opacity-100'} 
                              hover:bg-gray-400 text-emerald-700 hover:text-white rounded-full p-2`}
                onClick={() => { }}
              >
                <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
            <div className="swiper-pagination">
              <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
              <span className="swiper-pagination-bullet hover:swiper-pagination-bullet"></span>
              ...
            </div>
          </Swiper>

        </div>
      )}
    </section>
  );
};

export default PropertyOverviewMap;
