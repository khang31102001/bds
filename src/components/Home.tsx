import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import '../styles/swiper.css';

import img1 from '../public/img/img1.jpg' 
import img2 from '../public/img/img2.jpg'
import img3 from '../public/img/img3.jpg'
import img5 from '../public/img/img5.jpg'

const images = [img1, img2, img3, img5];

const socialLinks = [
  { name: 'facebook', icon: 'fab fa-facebook-f', link: 'https://www.facebook.com/profile.php?id=100088916504867' },
  { name: 'instagram', icon: 'fab fa-instagram', link: 'https://www.instagram.com/boyupbrook/' },
  { name: 'twitter', icon: 'fab fa-twitter', link: 'https://twitter.com/boyupbrook' },
  { name: 'phone', icon: 'fas fa-phone', link: 'tel:+61412345678' }
];

export default function Home() {
  return (
    <section
      className="relative flex flex-col min-h-screen justify-center"
      aria-label="Explore Boyup Brook Acreage"
      id="home"
    >
      <div className="absolute inset-0 -z-1">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          grabCursor={true}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          loop={true}
          className="h-full w-full cursor-grab active:cursor-grabbing"
          allowTouchMove={true}
          touchRatio={1}
          touchAngle={45}
          resistance={true}
          resistanceRatio={0.85}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="h-full w-full overflow-hidden">
              <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-black bg-opacity-25 transform transition-transform duration-700"
            />
                  <img src={image} alt={`Boyup Brook property image ${index + 1}`} className="w-full h-full object-cover select-none" />
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination !bottom-8"></div>
        </Swiper>
      </div>

      
      <div className="relative text-center sm:text-left sm:px-8 md:px-12 py-16 sm:py-24 md:py-32 max-w-3xl z-10 select-none">
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
          <span className="text-emerald-200">Boyup Brook Acreage</span> <br />
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
          className="mt-6 sm:mt-8 px-12 sm:px-8 py-3 sm:py-3 bg-emerald-900 text-white font-semibold rounded shadow hover:bg-emerald-800 transition-all duration-300 hover:shadow-xl"
        >
          Explore
        </motion.button>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-white text-lg sm:text-xl font-medium"
        >
          <a href="tel:+61412345678" className="flex items-center justify-center sm:justify-start gap-2 hover:text-emerald-200 transition-colors">
            <i className="fas fa-phone"></i>
            <span>0412 345 678</span>
          </a>
        </motion.div>

        {/* Social Links */}
        <div className="flex items-center justify-center sm:items-start sm:justify-start gap-6 mt-8 sm:mt-12 text-lg sm:text-xl text-emerald-200">
          {socialLinks.map((social) => (
            <motion.a
              key={social.name}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit our ${social.name} page`}
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
        <div className="flex bg-emerald-900 bg-opacity-90 rounded-lg shadow-lg overflow-hidden w-[300px] sm:w-[400px] hover:shadow-xl transition-shadow duration-300">
          <img src={img1} alt="Boyup Brook lifestyle" className="w-32 sm:w-40 object-cover" />
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
              className="text-emerald-200 mt-2 sm:mt-4 flex items-center gap-1 font-medium hover:underline"
            >
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </motion.aside>
    </section>
  );
}