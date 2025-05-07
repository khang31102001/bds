import React from 'react';

const bgImg = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80'; // Placeholder ocean/boat image

export default function Home() {
  return (
    <section
      className="relative flex flex-col min-h-screen justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
      aria-label="Explore the best beautiful beaches"
      id="home"
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      <div className="relative z-10 px-12 py-32 max-w-3xl">
        <span className="text-white text-lg font-medium">Boyup Brook Acreage</span>
        <h1 className="mt-4 text-5xl md:text-6xl font-bold text-white leading-tight">
          Explore <br />
          <span className="text-cyan-200">Boyup Brook Acreage</span> <br />
          For Sale
        </h1>
        <button className="mt-8 px-8 py-3 bg-cyan-900 text-white font-semibold rounded shadow hover:bg-cyan-800 transition">
          Explore
        </button>
        <div className="flex gap-6 mt-12 text-xl text-cyan-200">
          <a href="#" aria-label="Facebook" className="hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      {/* Card */}
      <aside className="absolute right-40 bottom-24 z-10">
        <div className="flex bg-cyan-900 bg-opacity-90 rounded-lg shadow-lg overflow-hidden w-[400px]">
          <img src={bgImg} alt="Best places to visit" className="w-40 h-32 object-cover" />
          <div className="p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-white text-lg font-semibold">5 Reasons to Live in Boyup Brook</h2>
            </div>
            <a href="#Reasons" className="text-cyan-200 mt-4 flex items-center gap-1 font-medium hover:underline">
              More <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </aside>
    </section>
  );
} 