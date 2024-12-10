import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardArray from "../CommonComponents/cardArray";
import CommonCard from "../CommonComponents/card";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="carousel-button-left" onClick={onClick}>
      <IoMdArrowBack style={{ color: "white", fontSize: "1.5rem" }} />
    </div>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="carousel-button-right" onClick={onClick}>
      <IoMdArrowForward style={{ color: "white", fontSize: "1.5rem" }} />
    </div>
  );
}

export default function Carousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {CardArray?.map((value, index) => (
        <CommonCard cardData={value} index={index} type="carousel" />
      ))}
    </Slider>
  );
}
