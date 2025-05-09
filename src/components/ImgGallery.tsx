import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const ImgGallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      price: "$850,000",
      location: "23 Smith Road",
      size: "5 acres"
    },
    {
      src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      price: "$920,000", 
      location: "45 River View",
      size: "4.5 acres"
    },
    {
      src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
      price: "$780,000",
      location: "12 Valley Road",
      size: "3.8 acres"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      price: "$895,000",
      location: "67 Hill Street",
      size: "4.2 acres"
    },
    {
      src: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      price: "$950,000",
      location: "89 Brook Avenue",
      size: "5.5 acres"
    }
  ]

  return (
    <section className="w-full px-4 py-8 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-semibold text-cyan-800 mb-4 md:mb-6">
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
                    <p className="text-xl font-bold">{property.price}</p>
                    <p className="text-sm">{property.location}</p>
                    <p className="text-sm">{property.size}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm">
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