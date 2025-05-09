# Boyup Brook Real Estate Showcase

A modern, responsive React application showcasing real estate properties in Boyup Brook, Western Australia. Built with React, TypeScript, Vite, and Tailwind CSS.

![Boyup Brook Showcase](https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80)

## Features

- 🏠 Interactive property showcase
- 🎨 Modern, responsive design
- 🖼️ Dynamic image gallery with Swiper
- 🎥 Video property tours
- 📱 Mobile-friendly interface
- ✨ Smooth animations with Framer Motion
- 🗺️ Google Maps integration
- 📊 Real-time property statistics
- 📬 Contact form for inquiries
- ⬆️ Smooth scroll-to-top functionality

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- GSAP
- Swiper
- Hero Icons
- React Helmet Async

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd travel-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Project Structure

```
travel-react/
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── BounceCards.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Home.tsx
│   │   ├── ImgGallery.tsx
│   │   ├── Places.tsx
│   │   ├── ScrollToTop.tsx
│   │   └── Video.tsx
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Components

- **Home**: Landing page with hero section and social links
- **About**: Property statistics and information
- **ImgGallery**: Interactive image gallery with property details
- **Places**: Grid layout of available properties with modal views
- **Video**: Video tour section
- **ContactSection**: Contact form and Google Maps integration
- **Footer**: Site navigation and newsletter subscription
- **ScrollToTop**: Floating button for easy navigation
- **BounceCards**: Animated card component for visual appeal

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme by modifying the `tailwind.config.js` file.

### Content

Update the content by modifying the data in the respective components:

- Property listings in `Places.tsx`
- Gallery images in `ImgGallery.tsx`
- Contact information in `Footer.tsx`
- Property statistics in `About.tsx`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Images from Unsplash
- Icons from Hero Icons
- Animation libraries: Framer Motion and GSAP
