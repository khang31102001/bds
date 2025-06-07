import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, useEffect, useState } from 'react';
import { MainLayout } from './Layout/MainLayout';
import { AnimatePresence, motion } from 'framer-motion';
import Loading from './components/Common/Loading';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const Description = lazy(() => import('./components/Description'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Summary = lazy(() => import('./components/Summary'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsLoading(false);
        // Scroll to top smoothly after loading
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 500);
    }
  }, [progress]);

  return (
    <AnimatePresence mode="sync">
      {isLoading ? (
        <Loading progress={progress} key="loading" />
      ) : (
        <BrowserRouter>
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HelmetProvider>
            <div className="min-h-screen w-full max-w-[2050px] mx-auto">
              <Helmet>
                <title>Boyup Brook Acreage for sale</title>
                <meta name="description" content="Acreage for sale in Boyup Brook. Riverlane property, full details, gallery, and contact." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#047857" />
              </Helmet>
              <div className="mx-auto">
                <Routes>
                  <Route path="/" element={
                    <MainLayout>
                      <Home />
                      <Description />
                      <ContactSection />
                      <Summary />
                    </MainLayout>
                  } />
                  <Route path="/gallery" element={<Gallery />} />
                </Routes>
              </div>
            </div>
          </HelmetProvider>
          </motion.div>
        </BrowserRouter>
      )}
    </AnimatePresence>
  );
}

export default App;