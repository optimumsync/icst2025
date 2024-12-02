// CardCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 3 },
      },
    ],
  };

  const cards = [
    { id: 1, title: "Card 1", description: "This is the first card" },
    { id: 2, title: "Card 2", description: "This is the second card" },
    { id: 3, title: "Card 3", description: "This is the third card" },
    { id: 4, title: "Card 4", description: "This is the fourth card" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Slideable Cards</h2>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="p-4 bg-red-300 ">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
