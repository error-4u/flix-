import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slider2() {
  const imgdetails = [
    {
      link: "../../aave5.png",
      user: {
        protocol: "Aave",
        tvl: "74.99",
        hr: "87.12",
        reward: "112.34",
        fullName: "John Doe",
        userName: "john_doe123",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    },
    {
      link: "../../unilogo.png",
      user: {
        protocol: "Uniswap",
        tvl: "97.2",
        hr: "65.1",
        reward: "83.9",
        fullName: "chetan",
        userName: "chetan_doe123",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    },
    // Add more image objects as needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    // beforeChange: (oldIndex, newIndex) => setCurrentSlideIndex(newIndex),
  };
  return (
    <div className="slider-container bg-indigo-600 mt-20 p-40 max-w-6xl">
      <Slider {...settings}>
        <div className="bg-black p-5 ">
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Slider2;
