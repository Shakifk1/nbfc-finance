import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';

const BannerCarousel = () => {
  const slides = [
    {
      text: "Unlock opportunities and build your future with the right financial support by your side.",
      image: banner1,
    },
    {
      text: "Your journey to financial freedom starts here—empowering dreams, one loan at a time.",
      image: banner2,
    },
    {
      text: "Turning aspirations into achievements with personalized financial solutions.",
      image: banner1,
    },
  ];

  return (
    <section className="relative max-w-full overflow-x-hidden" >
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={true}
        interval={5000}
        className="text-center"
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="h-[500px] md:h-auto w-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center px-8">
              <h2 className="text-2xl md:text-4xl font-bold text-white text-center">
                {slide.text}
              </h2>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default BannerCarousel;
