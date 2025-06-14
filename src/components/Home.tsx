import { motion, AnimatePresence } from 'framer-motion';
import { heroImages } from '../constants/images';
import { useState, useEffect } from 'react';


const detailsGroups = [
  [
    "301 acres freehold",
    "Part cleared",
    "Modern, 3 bay shed",
    "Large water tank",
    "One dam, one soak",
    "Power through block"
  ],
  [
    "2km Blackwood River frontage",
    "Contour banks for runoff",
    "Fully fenced property",
    "Two large paddocks",
    "Sheep lease covers outgoings",
    "Prime agricultural location"
  ],
  [
    "Eco-tourism opportunities",
    "Perfect for cabins & lifestyle",
    "Ideal for equestrian & canoeing",
    "Suitable for cattle & sheep",
    "Potential for avocados & crops",
    "Space for golf course"
  ]
];

export default function Home() {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [visibleDetails, setVisibleDetails] = useState<string[]>([]);
  const [currentDetailIndex, setCurrentDetailIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Effect for changing groups
  useEffect(() => {
    const groupInterval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveGroupIndex(prev => (prev + 1) % detailsGroups.length);
        setVisibleDetails([]);
        setCurrentDetailIndex(0);
        setIsTransitioning(false);
      }, 300); // Wait for fade out before changing group
    }, 5000);

    return () => clearInterval(groupInterval);
  }, []);

  // Effect for showing details
  useEffect(() => {
    if (currentDetailIndex < detailsGroups[activeGroupIndex].length && !isTransitioning) {
      const detailInterval = setInterval(() => {
        setVisibleDetails(prev => [...prev, detailsGroups[activeGroupIndex][currentDetailIndex]]);
        setCurrentDetailIndex(prev => prev + 1);
      }, 350);

      return () => clearInterval(detailInterval);
    }
  }, [activeGroupIndex, currentDetailIndex, isTransitioning]);

  return (
    <section
      className="relative flex min-h-screen justify-center items-center overflow-hidden"
      aria-label="Explore Boyup Brook Acreage"
      id="home"
    >
       {/* Content Overlay */}
      <div className="absolute inset-0 -z-1">
        <img 
          style={{ filter: 'brightness(1.25)' }}
          src={heroImages.img_asp3} 
          alt="Boyup Brook lifestyle"
          className="w-full h-full object-cover select-none hidden md:block"
        />
        
     
        
        <img 
          src={heroImages.img_hill}
          alt="Boyup Brook lifestyle"
          className="w-full h-full object-cover select-none block md:hidden"
        />
      </div>
      <div className='hidden md:flex absolute md:top-[20%] lg:top-[14%] right-2 max-w-[64%] w-full z-1'>
          <div className="flex flex-col justify-between items-center backdrop-blur-sm rounded-2xl shadow-2xl w-full h-full p-6">
              <span className="text-white text-sm sm:text-[0.8] md:text-base xl:text-lg tracking-wide text-center md:text-left w-full">
                    301 acres 121 ha freehold with 2km approx Blackwood River frontage. 
                    Perfect for eco-tourism, lifestyle, development and agricultural opportunities
              </span>
                <div className="relative min-h-[180px] sm:min-h-[200px] md:min-h-[220px] w-full ">
                  {/* Fixed grid layout */}
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0'>
                    {detailsGroups.map((group, groupIndex)=>(
                      <ul
                        key={`placeholder-${groupIndex}`}
                        className="text-white tex-xs space-y-2 sm:text-[0.7rem] md:text-sm xl:text-base list-disc w-full p-6"
                      >
                       {group.map((detail, idx)=>(
                        <li key={`${groupIndex}-${idx}`}>
                          {detail}
                        </li>
                       ))}
                      </ul>
                    ))}
                  </div>
                  
                </div>
          </div>
     </div>

      {/* Main Content */}
      <div className="flex w-full justify-center md:justify-start items-center md:items-start z-10 select-none mb-20 md:mb-0 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`
            
            w-full md:w-auto
            max-w-full md:max-w-2xl lg:max-w-3xl
            bg-transparent
            rounded-2xl
            shadow-none md:shadow-2xl
            border-none md:border border-white/10
            backdrop-blur-0
            px-4 sm:px-6 md:px-8
            py-6 sm:py-8 md:py-10
            flex flex-col
            gap-3 md:gap-4 lg:gap-6
            mx-2 ms:mx-4 md:mx-8 xl:mx-0
          `}
        >
       
          <div className="md:hidden flex flex-col items-center">
            <span className="text-white text-sm sm:text-base md:text-lg tracking-wide text-left md:text-left w-full">
                301 acres freehold with approx 2km Blackwood River frontage. 
                Perfect for eco-tourism, lifestyle development and agricultural opportunities
          </span>
            <div className="relative min-h-[180px] sm:min-h-[200px] md:min-h-[220px] w-full">
              {/* Fixed grid layout */}
              <div className="grid grid-cols-1 gap-1.5 sm:gap-2 absolute inset-0">
                {detailsGroups[activeGroupIndex].map((_, index) => (
                  <div 
                    key={`placeholder-${index}`}
                    className="h-6 sm:h-7"
                  />
                ))}
              </div>

              {/* Animated content */}
              <AnimatePresence mode="sync">
                {visibleDetails.map((detail, index) => (
                  <motion.div 
                    key={`${activeGroupIndex}-${index}`}
                    className="flex items-center absolute w-full"
                    style={{
                      top: `${index * 2}rem`
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.08,
                      ease: "easeOut"
                    }}
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 bg-white/90 rounded-full mr-2 sm:mr-3 hidden md:block"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.2,
                        ease: "easeOut"
                      }}
                    />
                    <span className="text-white text-sm sm:text-base md:text-lg tracking-wide text-left md:text-left w-full" style={{ 
                      textShadow: '0 1px 2px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)'
                    }}>
                      {detail}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
        
          </div>
        </motion.div>
      </div>
      <div className='absolute  right-4 w-[12.5rem] h-[20rem]  lg:block bottom-[5rem] lg:w-[10rem] lg:h-[20rem] overflow-hidden rounded-lg shadow-lg z-0 '>
            {/* River image - positioned in bottom right corner, smaller size */}
        <img 
          style={{ filter: 'brightness(1.25)' }}
          src={heroImages.img_river2}
          alt="River view"
          className=' w-full h-full object-cover'
        />
     
      </div>
    {/* // contact for desktop */}
      <div className=' absolute bottom-4 right-4 backdrop-blur-sm rounded-2xl p-2 md:p-4 shadow-2xl'>
        <div className=" flex flex-col md:flex-row gap-3 items-center">
                <a href="tel:0457230191" className="flex items-center gap-2 text-black font-medium hover:text-emerald-200 transition-colors text-sm sm:text-base md:text-lg justify-center md:justify-start">
                  <i className="fas fa-phone text-emerald-300"></i>
                  0457 230 191
                </a>
              
                <a href="mailto:eaglescreensjr@gmail.com" className="flex items-center gap-2 text-black font-medium hover:text-emerald-200 transition-colors text-sm sm:text-base md:text-lg justify-center md:justify-start">
                  <i className="fas fa-envelope text-emerald-300"></i>
                  eaglescreensjr@gmail.com
                </a>
          </div>
      </div>
     
    </section>
  );
}