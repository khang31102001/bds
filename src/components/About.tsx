import React from 'react';
import { motion } from 'framer-motion';
import BounceCards from './BounceCards';
const About = () => {
  const landInfo = [
    { value: 2000, label: 'Area (m²)', desc: 'Total area' },
    { value: 50, label: 'Length (m)', desc: 'Land length' },
    { value: 40, label: 'Width (m)', desc: 'Land width' },
    { value: 2, label: 'Bedrooms', desc: 'Bedrooms' },
  ];
  function useCountUp(end, duration = 1.5) {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
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
      // eslint-disable-next-line
    }, [end]);
    return count;
  }
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  ];
  
  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];
  return (
    <section
      className="relative py-16 px-4 md:px-12"
      id="about"
      aria-label="Boyup Brook acreage for sale"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-4">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-cyan-900 text-center">
          About Boyup Brook
        </h1>

        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            Nestled in the heart of Western Australia's Southwest, Boyup Brook is a charming rural community known for its pristine natural beauty and rich agricultural heritage.
        </p>

        <div className="flex flex-wrap md:flex-row items-center justify-center gap-4 md:gap-8">
          {landInfo.map((item, idx) => {
            const count = useCountUp(item.value);
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                // whileHover={{ scale: 1.07, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
                className="text-center bg-white rounded-xl shadow-md p-6 transition-all duration-300 cursor-pointer hover:bg-cyan-50"
              >
                <div className="text-2xl md:text-4xl font-bold text-cyan-900 mb-1">{count.toLocaleString()}</div>
                <div className="text-gray-700 text-normal font-medium">{item.label}</div>
                <div className="text-gray-400 text-small">{item.desc}</div>
              </motion.div>
            );
          })}
        </div>
        {/* Gallery layout */}
        <div className="flex justify-center">
        <BounceCards
            className="custom-bounceCards"
            images={images}
            containerWidth={window.innerWidth < 768 ? 300 : 500}
            containerHeight={window.innerWidth < 768 ? 250 : 350}
            animationDelay={1}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={transformStyles}
            enableHover={false}
            />
        </div>
      </div>
    </section>
  );
};

export default About; 