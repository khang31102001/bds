import { useState } from 'react';
import { LandGatePlan } from '../constants/images';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';




const PropertyOverviewMap = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    {
      src: LandGatePlan.landgatePlan3,
      alt: 'Aerial 1'
    },
    {
      src: LandGatePlan.landgatePlan5,
      alt: 'Aerial 2'
    }
  ];

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
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d26826.04026900555!2d116.38279013264207!3d-33.92858806266544!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDU0JzQzLjkiUyAxMTbCsDIzJzAzLjQiRQ!5e0!3m2!1sen!2sus!4v1749808404570!5m2!1sen!2sus"
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

        <div className="relative w-full max-w-3xl mx-auto h-[320px] sm:h-[420px] md:h-[520px] lg:h-[600px]">
          {/* Ảnh bên trái */}
          <div className="
            absolute left-0 top-12
            w-[80vw] max-w-[350px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[600px]
            h-[200px] sm:h-[280px] md:h-[360px] lg:h-[440px]
            rounded-xl overflow-hidden shadow-lg z-10
            cursor-pointer
          "
            onClick={() => setSelectedIndex(0)}
          >
            <img
              style={{ filter: 'brightness(1.25)' }}
              src={LandGatePlan.landgatePlan3}
              alt="Aerial 1"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Ảnh bên phải, chồng lên và có viền trắng, nghiêng nhẹ, viền dày hơn */}
          <div className="
            absolute left-[35vw] sm:left-[180px] md:left-[220px] lg:left-[260px] top-[180px]
            w-[80vw] max-w-[350px] sm:max-w-[420px] md:max-w-[500px] lg:max-w-[600px]
            h-[200px] sm:h-[280px] md:h-[360px] lg:h-[440px]
            rounded-xl overflow-hidden shadow-2xl border-8 border-white z-10
            cursor-pointer
          "
            onClick={() => setSelectedIndex(1)}
          >
            <img
              style={{ filter: 'brightness(1.25)' }}
              src={LandGatePlan.landgatePlan5}
              alt="Aerial 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Modal toàn màn hình với Swiper */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
          <button
            className="absolute top-4 right-4 bg-white/80 hover:bg-white text-black rounded-full p-2 z-[101]"
            onClick={() => setSelectedIndex(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            initialSlide={selectedIndex}
            className="w-full h-full "
            
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx} className="flex items-center justify-center h-full">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="max-h-[80vh] max-w-full w-auto h-auto rounded-xl object-contain m-auto block"
                  style={{ filter: 'brightness(1.25)' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default PropertyOverviewMap;
