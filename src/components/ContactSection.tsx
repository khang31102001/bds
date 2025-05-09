export default function ContactSection() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-900 mb-4">
              Get More Information About This Property
            </h2>
            <p className="text-gray-700 mb-8">
              Leave your email and we'll send you detailed information about the Boyup Brook acreage, including pricing, features, and upcoming viewings.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full flex-1 px-6 py-4 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-cyan-600 text-white font-semibold rounded-lg transition-colors hover:bg-cyan-500 focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
              >
                Request Info
              </button>
            </form>
          </div>
          
          <div className="w-full lg:w-1/2 h-[400px] rounded-lg overflow-hidden shadow-xl">
            <iframe
              title="Boyup Brook Location"
              src="https://www.google.com/maps?q=Boyup+Brook+WA,+Australia&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 