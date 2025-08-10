
import { Swiper, SwiperSlide } from "swiper/react";
// import { Grid, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
import { Autoplay, Grid } from "swiper/modules";




const ImageCollageCarousel = () => {
    
const photos = [
  "https://images.pexels.com/photos/6590920/pexels-photo-6590920.jpeg",
  "https://images.pexels.com/photos/6994963/pexels-photo-6994963.jpeg",
  "https://images.pexels.com/photos/6994982/pexels-photo-6994982.jpeg",
  "https://images.pexels.com/photos/6994962/pexels-photo-6994962.jpeg",
  "https://images.pexels.com/photos/6994944/pexels-photo-6994944.jpeg",
  "https://images.pexels.com/photos/6590914/pexels-photo-6590914.jpeg",
  "https://images.pexels.com/photos/6995247/pexels-photo-6995247.jpeg",
  "https://images.pexels.com/photos/7345448/pexels-photo-7345448.jpeg",
  "https://images.pexels.com/photos/9532273/pexels-photo-9532273.jpeg",
  "https://images.pexels.com/photos/6994946/pexels-photo-6994946.jpeg",
  "https://images.pexels.com/photos/6590930/pexels-photo-6590930.jpeg",
  "https://images.pexels.com/photos/6994925/pexels-photo-6994925.jpeg",
  "https://images.pexels.com/photos/6646992/pexels-photo-6646992.jpeg",
  "https://images.pexels.com/photos/6590926/pexels-photo-6590926.jpeg",
  "https://images.pexels.com/photos/6646915/pexels-photo-6646915.jpeg"
];


    return (
        <section className="bg-background py-12 px-6">
            <div className="max-w-6xl mx-auto">
              

                {photos.length > 0 && (
                    <Swiper
                        modules={[Grid, Autoplay]}
                        spaceBetween={15}
                        slidesPerView={3}
                        grid={{ rows: 3, fill: "row" }}
                        loop={true}
                        autoplay={{ delay: 1000, disableOnInteraction: false }}
                        breakpoints={{
                            640: { slidesPerView: 1, grid: { rows: 3 } },
                            768: { slidesPerView: 2, grid: { rows: 3 } },
                            1024: { slidesPerView: 3, grid: { rows: 3 } },
                        }}
                    >
                        {photos.map((photo, idx) => (
                            <SwiperSlide key={idx}>
                                <img
                                    src={photo}
                                    alt={photo.alt || `Food collage ${idx + 1}`}
                                    className="rounded-lg object-cover w-full h-40 shadow-md hover:scale-105 transition-transform duration-300"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}

            </div>
        </section>
    );
};

export default ImageCollageCarousel;
