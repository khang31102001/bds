import { useState } from 'react';
import { LandGatePlan } from '../constants/images';
import { FaTimes } from 'react-icons/fa';


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
          <div className="relative max-w-3xl w-full mx-4">
             <button
                className="absolute top-3 right-3 md:top-4 md:right-4 text-green-900 p-2 rounded-full hover:bg-white/10 transition-colors z-[102]"
                onClick={() => setSelectedImage(null)}
            >
                <FaTimes size={20} className="md:w-6 md:h-6" />
            </button>
            <img src={images[selectedImage].src} alt={images[selectedImage].alt} className="w-full max-h-[90vh]  object-contain rounded-lg" />
            <p className="mt-4 text-white text-center">{images[selectedImage].alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PropertyOverviewMap;
