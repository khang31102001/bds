import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const images = [
  "https://static.wixstatic.com/media/3938b5_4730a5bca8f242349c04b07175f49226~mv2.jpg/v1/fill/w_2500,h_1666,al_c/3938b5_4730a5bca8f242349c04b07175f49226~mv2.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMoCXhXJ9pecQ33YP5EIFtCOPmm2a7cEIBg&s",
  "https://upload.wikimedia.org/wikipedia/commons/1/1e/Boyup_Brook_Visitor_Centre%2C_April_2022_02.jpg",

  "https://static.wixstatic.com/media/3938b5_4730a5bca8f242349c04b07175f49226~mv2.jpg/v1/fill/w_2500,h_1666,al_c/3938b5_4730a5bca8f242349c04b07175f49226~mv2.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMMoCXhXJ9pecQ33YP5EIFtCOPmm2a7cEIBg&s",
  "https://upload.wikimedia.org/wikipedia/commons/1/1e/Boyup_Brook_Visitor_Centre%2C_April_2022_02.jpg",
];

const About = () => {
  return (
    <section
      className="relative py-16 px-4 md:px-12 bg-gray-50"
      id="about"
      aria-label="Boyup Brook acreage for sale"
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-cyan-900 mb-6 text-center md:text-left">
          About Boyup Brook
        </h1>
        {/* Description */}
        <p className="text-lg text-gray-700 mb-6">
          Discover your dream lifestyle on this stunning acreage in Boyup Brook, nestled in the heart of Riverlane. This property offers expansive views, fertile land, and the tranquility of country living, while being just minutes from the vibrant Boyup Brook community. Riverlane is renowned for its beautiful riverbanks, friendly neighbors, and a strong sense of community. Whether you're looking to build your forever home, start a hobby farm, or simply enjoy the peace and quiet, this acreage is the perfect opportunity.
        </p>
        <p className="text-lg text-gray-700 mb-8">
          Features include: <br />
          - Generous land size with established trees<br />
          - Close proximity to schools, shops, and local amenities<br />
          - Power and water available<br />
          - Easy access to Riverlane's scenic walking trails and the Boyup Brook river<br />
          Don't miss your chance to secure a slice of paradise in one of the region's most sought-after locations.
        </p>
        {/* Image Gallery - Swiper Carousel */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Gallery</h2>
          <Swiper
            modules={[Autoplay]}
            autoplay={true}
            loop={true}
            speed={3000}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="w-full cursor-grab"
          >
            {images.map((src, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={src}
                  alt={`Boyup Brook property view ${idx + 1}`}
                  className="w-full h-56 object-cover rounded-lg shadow"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default About; 