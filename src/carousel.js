import React from "react";
import InfiniteCarousel from "react-leaf-carousel";

// carousel data object
const ImgData = [
  { alt: "Image1", src: "../images/1.jpeg", classId:"testImg1"},
  { alt: "Image2", src: "../images/2.jpeg", classId:"testImg2" },
  { alt: "Image3", src: "../images/3.jpeg", classId:"testImg3" },
  { alt: "Image4", src: "../images/4.jpeg", classId:"testImg4" },
  { alt: "Image5", src: "../images/5.jpg" , classId:"testImg5"},
  { alt: "Image6", src: "../images/6.jpg" , classId:"testImg6"},
  { alt: "Image7", src: "../images/7.jpg" , classId:"testImg7" }
];

// carusel data component

function ImgComponent({ src, alt, classId }) {
  return (
    <div className={classId}>
      <img src={src} alt={alt} />
      <p>{alt}</p>
    </div>
  );
}

// carousel data iterator
const ImgDataIterator = ImgData.map((element) => (
  <ImgComponent src={element.src} alt={element.alt} />
));

export default function RLCarousel() {
  return (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        }
      ]}
      lazyLoad={false}
      dots={true}
      showSides={true}
      sidesOpacity={0.5}
      sideSize={0.1}
      slidesToScroll={4}
      slidesToShow={4}
      scrollOnDevice={true}
    >
      {ImgDataIterator }
    </InfiniteCarousel>
  );
}
