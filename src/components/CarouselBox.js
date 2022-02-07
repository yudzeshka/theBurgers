import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselBox() {
  const images = [
    {
      id: 1,
      src: "../../img/slider/slide4.jpg",
      alt: "Burger 4",
    },
    {
      id: 2,
      src: "../../img/slider/slide5.jpg",
      alt: "Burger 5",
    },
    {
      id: 3,
      src: "../../img/slider/slide7.jpg",
      alt: "Burger 7",
    },
    {
      id: 4,
      src: "../../img/slider/slide8.jpg",
      alt: "Burger 8",
    },
    {
      id: 5,
      src: "../../img/slider/slide10.jpg",
      alt: "Burger 10",
    },
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true,
  };

  return (
    <div>
      <Slider className="carousel" {...settings}>
        {images.map((item) => (
          <div className="carousel" key={item.id}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
