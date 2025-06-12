import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const HeroSlider = () => {
  const slides = [
    {
      img: "https://i.ibb.co/yFCjZDW4/pexels-rdne-6646953.jpg",
      text: "Donate Food, Feed Hope"
    },
    {
      img: "https://i.ibb.co/wr3CbBfH/hero2.jpg",
      text: "Your Extra Meal Can Be Someone’s Lifeline"
    },
    {
      img: "https://i.ibb.co/wZFQSr1g/hero1.jpg",
      text: "Join FoodLoop – Reduce Waste, Share Kindness"
    }
  ];

  return (
    <div className="w-full h-[80vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="w-full h-full bg-black/60 flex items-center justify-center px-4 text-center">
                <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg leading-snug">
                  {slide.text}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
