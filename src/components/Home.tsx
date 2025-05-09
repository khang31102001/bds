import { motion } from 'framer-motion';

const bgImg = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80'; // Placeholder ocean/boat image

const socialLinks = [
  { name: 'facebook', icon: 'fab fa-facebook-f' },
  { name: 'instagram', icon: 'fab fa-instagram' },
  { name: 'twitter', icon: 'fab fa-twitter' }
];

export default function Home() {
  

  return (
    <section
      className="relative flex flex-col min-h-screen justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
      aria-label="Explore the best beautiful beaches"
      id="home"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black bg-opacity-35 transform hover:scale-105 transition-transform duration-700"
      />
      <div className="relative text-center sm:text-left sm:px-8 md:px-12 py-16 sm:py-24 md:py-32 max-w-3xl z-10">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white text-base sm:text-lg font-medium"
        >
          Boyup Brook Acreage
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          Explore <br />
          <span className="text-cyan-200">Boyup Brook Acreage</span> <br />
          For Sale
        </motion.h1>
        <motion.button 
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="mt-6 sm:mt-8 px-12 sm:px-8 py-3 sm:py-3 bg-cyan-900 text-white font-semibold rounded shadow hover:bg-cyan-800 transition-all duration-300 hover:shadow-xl"
        >
          Explore
        </motion.button>
        <div className="flex items-center justify-center sm:items-start sm:justify-start gap-6 mt-8 sm:mt-12 text-lg sm:text-xl text-cyan-200">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              aria-label={social.name}
              className="hover:text-white"
            >
              <i className={social.icon}></i>
            </motion.a>
          ))}
        </div>
      </div>
      {/* Card */}
      <motion.aside 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden lg:block absolute right-8 xl:right-40 bottom-12 sm:bottom-24 z-10"
      >
        <div className="flex bg-cyan-900 bg-opacity-90 rounded-lg shadow-lg overflow-hidden w-[300px] sm:w-[400px] hover:shadow-xl transition-shadow duration-300">
          <img src={bgImg} alt="Best places to visit" className="w-32 sm:w-40 object-cover" />
          <div className="p-4 sm:p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-white text-base sm:text-lg font-semibold">5 Reasons to Live in Boyup Brook</h2>
            </div>
            <a 
              href="#discover"
              onClick={(e) => {
                e.preventDefault();
                const discoverSection = document.getElementById('discover');
                if (discoverSection) {
                  discoverSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-cyan-200 mt-2 sm:mt-4 flex items-center gap-1 font-medium hover:underline"
            >
              More too <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </motion.aside>
    </section>
  );
}