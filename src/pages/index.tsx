import { lazy  } from 'react';

// Lazy load components
const Home = lazy(() => import('../components/Home'));
const Description = lazy(() => import('../components/Description'));
const GalleryAndVideo = lazy(() => import('../components/GalleryAndVideo'));
const ContactSection = lazy(() => import('../components/ContactSection'));
const Summary = lazy(() => import('../components/Summary'));

// Gộp toàn bộ các component theo đúng thứ tự trên 1 page OnePage
export const IndexPage = () => {
  return (
    <>
      <Home />
      <Description />
      <GalleryAndVideo />
      <ContactSection />
      <Summary />
    </>
  );
};
