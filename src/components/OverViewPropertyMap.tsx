import { useState } from 'react';
import { LandGatePlan } from '../constants/images';
import { FaTimes } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const images = [
  { src: LandGatePlan.landgatePlan1, alt: 'Aerial View' },
  { src: LandGatePlan.landgatePlan2, alt: 'Cadastral Boundary' },
  { src: LandGatePlan.landgatePlan3, alt: 'Vegetation Overlay' },
  { src: LandGatePlan.landgatePlan4, alt: 'Powerlines Infrastructure' },
  { src: LandGatePlan.landgatePlan5, alt: 'Powerlines Infrastructure' },
  { src: LandGatePlan.landgatePlan6, alt: 'Powerlines Infrastructure' },
];

const PropertyOverviewMap = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="property-map" className="w-full py-20 bg-white">
      <div className=" flex flex-col max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-emerald-900 mb-6">Property Overview Map</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore the full layout of the property including boundaries, river frontage, infrastructure, and land features.
        </p>

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
