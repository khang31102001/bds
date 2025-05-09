import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const places = [
  {
    name: "Natural Bushland",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", 
    description: "Explore the pristine natural bushland on this stunning acreage. Native flora and fauna abound in this untouched corner of Boyup Brook, perfect for nature lovers."
  },
  {
    name: "River Views",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    description: "Take in the spectacular views of the Blackwood River from elevated vantage points on the property. The perfect backdrop for your dream country home."
  },
  {
    name: "Rolling Hills",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80", 
    description: "Gently undulating terrain offers multiple building sites with sweeping views across the valley. Ideal for a hobby farm or rural retreat."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      type: 'spring',
      stiffness: 60
    }
  })
};

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

const Discover = () => {
  const [selectedPlace, setSelectedPlace] = React.useState<null | typeof places[0]>(null);

  return (
    <section className="relative py-16 px-4 md:px-12" id="discover" aria-label="Discover The Most Attractive Places">
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center gap-8">
        <h1 className="text-3xl md:text-5xl font-bold text-cyan-900 text-center">
          Discover The Most <br /> Attractive Places
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center"> 
          Explore the most attractive places in Boyup Brook. From scenic river views to lush landscapes, these images capture the essence of this pristine Western Australian property. Experience the tranquil surroundings and imagine the possibilities of your future home in this picturesque location.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {places.map((place, idx) => (
            <motion.div
              key={idx}
              className="relative w-full md:w-80 h-96 rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              onClick={() => setSelectedPlace(place)}
            >
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{place.name}</h3>
                <p className="text-white text-sm">Information</p>
              </div>
            </motion.div>
          ))}
        </div>
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
                src={selectedPlace.img}
                alt={selectedPlace.name}
                className="w-full h-[60vh] object-cover"
              />
              <div className="p-6 bg-white">
                <h2 className="text-3xl font-bold text-cyan-900 mb-2">{selectedPlace.name}</h2>
                <p className="text-gray-600 mb-4">{selectedPlace.description}</p>
                <div className="flex items-center gap-4">
                  <span className="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full">
                   Information
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
    </section>
  );
};

export default Discover;