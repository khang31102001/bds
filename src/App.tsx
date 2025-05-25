import { HelmetProvider, Helmet } from 'react-helmet-async';
import { Header,Places, Home, About, Discover, Video, Footer, ScrollToTop, ContactSection, ImgGallery } from './components';


const App = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen w-full max-w-[2050px] mx-auto">
        <Helmet>
          <title>Boyup Brook Acreage for sale</title>
          <meta name="description" content="Acreage for sale in Boyup Brook. Riverlane property, full details, gallery, and contact." />
        </Helmet>
        <div className="mx-auto">
          <Header />
          <main className="main">
            <Home />
            <About />
            <ImgGallery />
            <Discover />
            <Places />
            <Video />
            <ContactSection />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;