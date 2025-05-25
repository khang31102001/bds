import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from '../public/img/img1.jpg'
import img2 from '../public/img/img2.jpg'
import img3 from '../public/img/img3.jpg'
import img_river from '../public/img/img_river.jpg'
import img_river1 from '../public/img/img_river-1.jpg'
import img_river2 from '../public/img/img_river-2.jpg'
import img_hill1 from '../public/img/img_hill-1.jpg'
import img_hill2 from '../public/img/img_hill-2.jpg'
import img_hill3 from '../public/img/img_hill-3.jpg'
import img_asp from '../public/img/img_asp.jpg'
import img_asp1 from '../public/img/img_asp-1.jpg'
import img_asp2 from '../public/img/img_asp-2.jpg'

const places = [
  {
    name: "Blackwood River & Natural Beauty",
    img: img_river,
    gallery: [img_river, img_river1, img_river2, img1],
    icon: (
      <svg className="w-7 h-7 text-cyan-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 18s3-4 9-4 9 4 9 4M4 14s1.5-2 8-2 8 2 8 2" /></svg>
    ),
    short: "Private Blackwood River frontage, deep pools, granite outcrops, wildflowers, kangaroos, and ancient trees.",
    detail: (
      <>
        <p className="mb-2">301 acres (121 hectares) of beautiful rural land with exclusive, private frontage to the Blackwood River. Enjoy deep pools, sandy river-beds, rock outcrops, lichen-covered granite, fields of heath plants, and mature Redgum & Jarrah trees. Kangaroos, wildflowers, and orchids abound in spring. Private walking trails along the river offer rare solitude and natural beauty.</p>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Long, private, exclusive Blackwood River frontage</li>
          <li>Deep pools, sandy river-bed, rock pools & outcrops</li>
          <li>Mature Redgum & Jarrah trees, wildflowers, orchids</li>
          <li>Kangaroos, birds, and abundant wildlife</li>
        </ul>
      </>
    )
  },
  {
    name: "Family Memories & Outdoor Fun",
    img: img_hill1,
    gallery: [img_hill1, img_hill2, img_hill3, img3],
    icon: (
      <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2-2 4 4m0 0l2-2-6-6" /></svg>
    ),
    short: "Unforgettable family activities: canoeing, camping, sports, bonfires, fishing, and more.",
    detail: (
      <>
        <p className="mb-2">Over 14 years, our family has enjoyed countless activities on this land:</p>
        <ul className="list-disc pl-5 text-gray-700 mb-2">
          <li>Canoeing, swimming, fishing, wildflower hunting, mushrooming</li>
          <li>Camping, bonfires, campfire meals, moonlit walks, astronomy</li>
          <li>Trail motorbikes, 4WD, learning to drive, trailblazing</li>
          <li>Golf, hockey (Sheepoo stadium!), lamb saving, bee hives</li>
          <li>Bird watching, satellite spotting, entertaining friends & neighbours</li>
          <li>Annual Blackwood Marathon, family parades, and more</li>
        </ul>
        <p>Privacy and solitude are rare to find. This property is a true retreat for family and friends, with endless room to play and explore.</p>
      </>
    )
  },
  {
    name: "Development & Rural Potential",
    img: img_asp,
    gallery: [img_asp, img_asp1, img_asp2, img2],
    icon: (
      <svg className="w-7 h-7 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16h8M8 12h8M8 8h8" /></svg>
    ),
    short: "Prime for further development: farming, cabins, golf, infrastructure, and more.",
    detail: (
      <>
        <p className="mb-2">This property is ready for your vision:</p>
        <ul className="list-disc pl-5 text-gray-700 mb-2">
          <li>Fertile land, sheep farming, annual rental income</li>
          <li>Power runs through property (not yet connected)</li>
          <li>Small dam, potential for more, contour banks for water catchment</li>
          <li>Tested construction sand (approved by Structerre)</li>
          <li>Potential for cabins, parkland, golf course, helipad, landscaping supplies</li>
          <li>Excellent maintenance by tenant: fertilising, fire breaks, fencing</li>
        </ul>
        <p>Whether you want to develop, farm, or simply retreat, this land offers endless possibilities.</p>
      </>
    )
  }
];

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const modalVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
  },
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
    scale: 0.95,
    transition: {
      duration: 0.2
    }
  }
};

const Discover = () => {
  const [selectedPlace, setSelectedPlace] = React.useState<null | typeof places[0]>(null);

  return (
    <section className="relative py-16 xl:pt-32 xl:pb-64 px-4 md:px-12 bg-white" id="discover" aria-label="Discover The Most Attractive Places">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold text-cyan-900 text-center"
        >
          Discover
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-gray-700 max-w-3xl mx-auto text-center"
        > 
          Comprising 301 acres (121 hectares), this beautiful rural property is located between Boyup Brook and Bridgetown. It boasts long, private, exclusive frontage to the Blackwood River, wide open fields or treed river flats offering an exceptional opportunity to develop a range of rural activities or simply to retain as your own very private retreat, far from the masses.
        </motion.p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {places.map((place, idx) => (
            <motion.div
              key={idx}
              className="relative w-full md:w-80 h-96 rounded-2xl overflow-hidden shadow-lg group cursor-pointer bg-white"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedPlace(place)}
            >
              <img
                src={place.img}
                alt={place.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 w-full flex flex-col items-start p-6 z-10">
                <h3 className="text-2xl font-extrabold text-white mb-6 drop-shadow-lg">{place.name}</h3>
                <button
                  className="px-6 py-2 bg-emerald-500 text-white rounded-full font-bold text-base shadow hover:bg-emerald-600 transition-colors duration-300"
                >
                  Discover More
                </button>
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
              className="relative bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-400 text-gray-700 hover:text-white rounded-full p-2 z-10"
                onClick={() => setSelectedPlace(null)}
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}

                loop={true}
                className="w-full h-64"
              >
                {selectedPlace.gallery.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${selectedPlace.name} ${idx + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="p-6 bg-white">
                <div className="flex items-center gap-3 mb-3">
                
                  <h2 className="text-2xl font-bold text-cyan-900 mb-0">{selectedPlace.name}</h2>
                </div>
                <div className="text-gray-700 text-base mb-4">{selectedPlace.detail}</div>
                <button 
                  className="w-full mt-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-colors"
                  onClick={() => setSelectedPlace(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Discover;