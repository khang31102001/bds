// Hero section images
import hero1 from '../public/img/img1.jpg';
import hero2 from '../public/img/img2.jpg';
import hero3 from '../public/img/img3.jpg';
import hero4 from '../public/img/img4.jpg';
import hero5 from '../public/img/img5.jpg';

import img_hill from '../public/img/img_hill.jpg'
import img_hill1 from '../public/img/img_hill-1.jpg'
import img_hill2 from '../public/img/img_hill-2.jpg'
import img_hill3 from '../public/img/img_hill-3.jpg'

import img_river from '../public/img/img_river.jpg'
import img_river1 from '../public/img/img_river-1.jpg'
import img_river2 from '../public/img/img_river-2.jpg'
import img_river3 from '../public/img/img_river-3.jpg'
import img_river4 from '../public/img/img_river-4.jpg'
import img_river5 from '../public/img/img_river-5.jpg'

import img_asp from '../public/img/img_asp.jpg'
import img_asp1 from '../public/img/img_asp-1.jpg'
import img_asp2 from '../public/img/img_asp-2.jpg'
import img_asp3 from '../public/img/img_asp-3.jpg'

import img_family from '../public/img/img_family.jpg'
import img_family2 from '../public/img/img_family-2.jpg'
import img_family3 from '../public/img/img_family-3.jpg'
import img_family4 from '../public/img/img_family-4.jpg'

import john from '../public/img/john.jpg'
// import planView from '../public/img/PlanView.jpg'
// import landgateAerial from '../public/img/LandgateAerial.jpg'

// Import images LandGatePlan
import landgatePlan1 from '../public/img/landgateplan-1.jpg';
import landgatePlan2 from '../public/img/landgateplan-2.jpg';
import landgatePlan3 from '../public/img/landgateplan-3.jpg';
import landgatePlan4 from '../public/img/landgateplan-4.jpg';
import landgatePlan5 from '../public/img/landgateplan-5.jpg';
import landgatePlan6 from '../public/img/landgateplan-6.jpg';


export const Avatar = {
  john
}
export const LandGatePlan = {
  landgatePlan1,
  landgatePlan2,
  landgatePlan3,
  landgatePlan4,
  landgatePlan5,
  landgatePlan6,
}

// Export individual images
export const heroImages = {
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  img_hill,
  img_hill1,
  img_hill2,
  img_hill3,
  img_river,
  img_river1,
  img_river2,
  img_river3,
  img_river4,
  img_river5,
  img_asp,
  img_asp1,
  img_asp2,
  img_asp3,
  img_family,
  img_family2,
  img_family3,
  img_family4,
 
};

// Export as array for slider
export const heroSliderImages = [hero1, hero2, hero3, hero4, hero5, img_hill, img_hill1, img_hill2, img_hill3, img_river, img_river1, img_river2, img_river3, img_river4, img_asp, img_asp1, img_asp2, img_asp3, img_family, img_family2, img_family3,];

// Export all images as a single object
const images = {
  hero: heroImages,
  sliders: {
    hero: heroSliderImages
  }
};

export default images;

export const propertyImages = {
  river: "/images/property/river-front.jpg",
  hill: "/images/property/hill-views.jpg",
  farm: "/images/property/farm-area.jpg",
  aerial: "/images/property/aerial-view.jpg",
  entrance: "/images/property/entrance.jpg",
  landscape: "/images/property/landscape.jpg"
}; 