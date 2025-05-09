import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const places = [
  {
    name: 'Natural Bushland',
    country: 'Western Australia',
    price: '$2499',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'River Views',
    country: 'Western Australia', 
    price: '$1599',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Rolling Hills',
    country: 'Western Australia',
    price: '$3499',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Building Site',
    country: 'Western Australia',
    price: '$2499',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Valley Views',
    country: 'Western Australia',
    price: '$1999',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80',
  },
];

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2
    }
  }
};

export default function Places() {
  const [selectedPlace, setSelectedPlace] = useState<typeof places[0] | null>(null);

  return (
    <section className='relative py-16 px-4 md:px-12' id="places">
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center gap-8">
        <h2 className="text-3xl md:text-5xl font-bold text-cyan-900 text-center">Places</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
          Discover this exceptional Boyup Brook acreage for sale, featuring pristine natural bushland, stunning river views, and gently rolling hills. This rare opportunity offers 2000m² of prime Western Australian land, perfect for building your dream country home. 
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {places.map((place) => (
            <div
              key={place.name}
              className="relative w-full max-w-xs rounded-xl overflow-hidden shadow-lg group bg-white cursor-pointer"
              onClick={() => setSelectedPlace(place)}
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-0 right-0 m-3 bg-cyan-900 bg-opacity-80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                <span className="text-yellow-300">★</span>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-cyan-900/80 to-transparent p-4">
                <h3 className="text-h3 font-bold text-white mb-1">{place.name}</h3>
                <div className="text-cyan-100 text-small mb-2">{place.country}</div>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">{place.price}</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cyan-800/80 text-white ml-2">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

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
                <img
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  className="w-full h-[60vh] object-cover"
                />
                <div className="p-6 bg-white">
                  <h2 className="text-3xl font-bold text-cyan-900 mb-2">Boyup Brook For Sale</h2>
                  <p className="text-gray-600 mb-4">
                    Experience the beauty of Boyup Brook with this exceptional property. Featuring pristine natural bushland, stunning river views, and gently rolling hills. Perfect for your dream country home with 2000m² of prime Western Australian land.
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full">
                      {selectedPlace.price}
                    </span>
                    <button 
                      className="px-6 py-2 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors"
                      onClick={() => setSelectedPlace(null)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
} 