
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MainLayout } from './Layout/MainLayout';
import { AnimatePresence, motion } from 'framer-motion';
import Loading from './components/Common/Loading';
import { IndexPage } from './pages';
import NotFound from './pages/NotFound';



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

            <div className="min-h-screen w-full max-w-[2050px] mx-auto">

              <div className="mx-auto">
                <Routes>
                  <Route index element={
                    <MainLayout>
                      <IndexPage />
                    </MainLayout>

                  } />
                  <Route path="*" element={<NotFound/>} />

                </Routes>
              </div>
            </div>
          </motion.div>
        </BrowserRouter>
      )}
    </AnimatePresence>
  );
}

export default App;