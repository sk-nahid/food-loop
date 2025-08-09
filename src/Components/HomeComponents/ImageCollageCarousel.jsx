
import { Swiper, SwiperSlide } from "swiper/react";
// import { Grid, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/autoplay";
import { Autoplay, Grid } from "swiper/modules";
import { usePexelsPhotos } from "../../Hooks/usePexelsPhotos";
import Loading from "../Loading";



const ImageCollageCarousel = () => {
    const { photos, loading, error } = usePexelsPhotos('food donation', 15);
console.log(photos)
    if (loading) {
        return Loading
    }
    if (error) {
        return <p>something wrong, photos not found</p>
    }
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
                                    src={photo.src.medium}
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
