import React from 'react';
import { motion } from 'framer-motion';

const places = [
  {
    name: "Whitehaven",
    tours: 32,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Bali",
    tours: 24,
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Hawaii",
    tours: 15,
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80"
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

const Discover = () => {
  return (
    <section className="py-20 px-4 bg-gray-50" id="discover" aria-label="Discover The Most Attractive Places">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-900 text-center mb-12">
          Discover The Most <br /> Attractive Places
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {places.map((place, idx) => (
            <motion.div
              key={idx}
              className="relative w-full md:w-80 h-96 rounded-lg overflow-hidden shadow-lg group"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-1">{place.name}</h3>
                <p className="text-white text-sm">{place.tours} tours available</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discover; 