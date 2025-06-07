import { HelmetProvider, Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { Header, Footer, ScrollToTop } from './components';

// Lazy load components
const Home = lazy(() => import('./components/Home'));
const Description = lazy(() => import('./components/Description'));
const Gallery = lazy(() => import('./pages/Gallery'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Summary = lazy(() => import('./components/Summary'));

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
  </div>
);

// Main layout with header and footer
const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className="main bg-white flex flex-col gap-16">
      {children}
    </main>
    <Footer />
    <ScrollToTop />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <div className="min-h-screen w-full max-w-[2050px] mx-auto">
          <Helmet>
            <title>Boyup Brook Acreage for sale</title>
            <meta name="description" content="Acreage for sale in Boyup Brook. Riverlane property, full details, gallery, and contact." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="theme-color" content="#047857" />
          </Helmet>
          <div className="mx-auto">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={
                  <MainLayout>
                    <Home />
                    <Description />
                    <Summary />
                    <ContactSection />
                  </MainLayout>
                } />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;