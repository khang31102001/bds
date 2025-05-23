// Hero section images
import hero1 from '../public/img/img1.jpg';
import hero2 from '../public/img/img2.jpg';
import hero3 from '../public/img/img3.jpg';
import hero4 from '../public/img/img4.jpg';
import hero5 from '../public/img/img5.jpg';

// Export individual images
export const heroImages = {
  hero1,
  hero2,
  hero3,
  hero4,
  hero5
};

// Export as array for slider
export const heroSliderImages = [hero1, hero2, hero3, hero4, hero5];

// Export all images as a single object
const images = {
  hero: heroImages,
  sliders: {
    hero: heroSliderImages
  }
};

export default images; 