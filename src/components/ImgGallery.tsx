import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

import img1 from '../public/img/img1.jpg'
import img2 from '../public/img/img2.jpg'
import img3 from '../public/img/img3.jpg'
import img4 from '../public/img/img4.jpg'
import img5 from '../public/img/img5.jpg'

const ImgGallery = () => {
  const images = [
    {
      src: img1,
      info: "Natural Bushland"
    },
    {
      src: img3,
      info: "River Views"
    },
    {
      src: img2,
      info: "Rolling Hills"
    },
    {
      src: img4,
      info: "Natural Bushland"
    },
    {
      src: img5,
      info: "Natural Bushland"
    }
  ]

  return (
    <section className="w-full px-4 py-8 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-5xl text-center font-semibold text-cyan-900">
          Boyup Brook Acreage Gallery
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto text-center mb-8 md:mb-12 px-4">
          Explore our stunning gallery showcasing the natural beauty of Boyup Brook. From scenic river views to lush landscapes, these images capture the essence of this pristine Western Australian property.
        </p>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          loop={true}
          speed={1000}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 }
          }}
          className="w-full cursor-grab px-2 md:px-4"
        >
          {images.map((property, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg group">
                <img
                  src={property.src}
                  alt={`Boyup Brook property view ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white">

                    <p className="text-sm">{property.info}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">
                  For Sale
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default ImgGallery