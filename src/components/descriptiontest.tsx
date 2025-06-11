import { motion } from 'framer-motion';
import Title from '../components/Common/Title';
import { useEffect } from 'react';
import { useState } from 'react';
import BounceCards from '../components/BounceCards';
import { heroImages } from '../constants/images';
import { FaMapMarker, FaRuler, FaHome, FaDollarSign } from 'react-icons/fa';
import { propertyData } from '../data/propertyData';
import PropertyOverviewMap from './OverViewPropertyMap';
import PropertyDetail from './PropertyDetail';

export default function DescriptionTest() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 768);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    heroImages.hero1,
    heroImages.hero2,
    heroImages.hero3,
    heroImages.hero4,
    heroImages.hero5,
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];

  const landInfo = [
    { 
      value: 121, 
      label: 'Hectares', 
      desc: 'Total land area',
      icon: <FaRuler className="text-emerald-600 text-xl" />
    },
    { 
      value: 2, 
      label: 'Kilometers', 
      desc: 'River frontage',
      icon: <FaMapMarker className="text-blue-600 text-xl" />
    },
    { 
      value: 5, 
      label: 'Distinct Areas', 
      desc: 'Diverse landscapes',
      icon: <FaHome className="text-green-600 text-xl" />
    },
    { 
      value: 840, 
      label: 'K Price Range', 
      desc: 'Starting from',
      icon: <FaDollarSign className="text-yellow-600 text-xl" />
    },
  ];

  function useCountUp(end: number, duration = 1.5): number {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const increment = end / (duration * 60);
      let frame = 0;
      function update() {
        frame++;
        const next = Math.min(Math.round(start + increment * frame), end);
        setCount(next);
        if (next < end) requestAnimationFrame(update);
      }
      update();
    }, [end]);
    return count;
  }

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-slate-50 to-emerald-50" id="description">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-8">
        
        {/* SECTION 1: Hero Header với Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-4">
            <span>Home</span> → <span>Properties</span> → <span className="text-emerald-600 font-medium">301 Acres Rural Property</span>
          </div>
          
          {/* Title Section */}
          <div className="text-center mb-8">
            <Title 
              mainTitle="Premium Rural Property" 
              subtitle="301 Acres of Prime Land - Your Gateway to Rural Excellence in Western Australia"
              className='text-emerald-900'
            />
          </div>
        </motion.div>

        {/* SECTION 2: Key Property Info Cards - Horizontal Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-12"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {landInfo.map((item, idx) => {
              const count = useCountUp(item.value);
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  }}
                  className="text-center p-4 rounded-xl border-2 border-transparent hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex justify-center mb-3">
                    {item.icon}
                  </div>
                  <motion.div 
                    className="text-2xl md:text-3xl font-bold text-gray-800 mb-1"
                  >
                    {count.toLocaleString()}
                  </motion.div>
                  <div className="text-gray-700 text-sm md:text-base font-medium mb-1">
                    {item.label}
                  </div>
                  <div className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors">
                    {item.desc}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* SECTION 3: Main Content Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          
          {/* Left Column - Property Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-emerald-900 mb-6">Property Overview</h3>
              
              {/* Location Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium">
                  <FaRuler className="mr-2 text-xs" />
                  {propertyData.landSize}
                </div>
                <div className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  <FaMapMarker className="mr-2 text-xs" />
                  {propertyData.location}
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p>
                  Discover an exceptional opportunity to own a magnificent 301-acre property strategically located between Boyup Brook and Bridgetown, in the heart of Western Australia's pristine Southwest region.
                </p>
                <p className="mt-4">
                  This remarkable estate showcases diverse landscapes including extensive private frontage along the scenic Blackwood River, gentle rolling hills, expansive open pastures, native bushland, and productive farming areas. The property presents endless possibilities for peaceful rural living, family recreation, agricultural development, or eco-tourism ventures.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Quick Actions & Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Price Card */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 text-white rounded-2xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold mb-2">Price Range</h4>
              <div className="text-3xl font-bold mb-4">$780K - $840K</div>
              <button className="w-full bg-white text-emerald-600 font-semibold py-3 rounded-lg hover:bg-gray-50 transition-colors">
                Request Details
              </button>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Features</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  River Flats & Escarpment
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Rolling Pastures
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Native Bushland
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                  Modern Shed Facilities
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* SECTION 4: Property Detail Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <PropertyDetail />
        </motion.div>

        {/* SECTION 5: Image Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-12"
          id='bridgetown'
        >
          <h3 className="text-2xl font-bold text-center text-emerald-900 mb-8">Property Gallery</h3>
          <div className="flex justify-center">
            <BounceCards
              className="custom-bounceCards"
              images={images}
              containerWidth={windowWidth < 768 ? Math.min(windowWidth - 80, 320) : 500}
              containerHeight={windowWidth < 768 ? 220 : 350}
              animationDelay={0}
              animationStagger={0.08}
              easeType="elastic.out(1, 0.5)"
              transformStyles={transformStyles}
              enableHover={windowWidth >= 768}
            />
          </div>
        </motion.div>

        {/* SECTION 6: Property Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-emerald-900">Property Location & Overview</h3>
            <p className="text-gray-600 mt-2">Explore the property layout and surrounding area</p>
          </div>
          <PropertyOverviewMap/>
        </motion.div>

      </div>
    </section>
  );
}