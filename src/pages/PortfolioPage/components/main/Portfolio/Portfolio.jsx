import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import images from "../../../../../images/Portfolio images/Hair Webpage/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio container">
      <div className="portfolio-text">
        <p>Portfolio</p>
        <h2>browse my stunning selections</h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView={2}
        slidesPerGroup={2}
        breakpoints={{
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1064: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image} alt={`image${index}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="slider-controller">
        <div className="swiper-button-prev">
          <FontAwesomeIcon icon={faCircleArrowLeft} />
        </div>
        <div className="swiper-button-next">
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
}

export default Portfolio;
