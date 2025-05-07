import React from 'react';
import { Header, Home, About, Discover, Places, Video, Subscribe, Footer, ScrollToTop } from './components';

const App = () => {
  return (
    <div className="min-h-screen w-full">
     
      <div className="max-w-screen-2xl mx-auto">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Discover />
        <Places />
        <Video />
        <Subscribe />
      </main>
      <Footer />
      <ScrollToTop />
      </div>
    </div>
  );
}

export default App; 