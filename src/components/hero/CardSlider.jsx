import React, { useRef, useEffect } from "react";
import profile_icon from "../../assets/profile_icon.png";

const CardSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const scrollStep = 2; // Number of pixels to scroll per interval
    const scrollInterval = 30; // Interval time in milliseconds

    const scroll = () => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        // Reset to the start when halfway through duplicated content
        slider.scrollLeft = 0;
      } else {
        slider.scrollLeft += scrollStep;
      }
    };

    const interval = setInterval(scroll, scrollInterval);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const cards = [
    { id: 1, title: "Card 1", description: "This is the first card." },
    { id: 2, title: "Card 2", description: "This is the second card." },
    { id: 3, title: "Card 3", description: "This is the third card." },
    { id: 4, title: "Card 4", description: "This is the fourth card." },
    { id: 5, title: "Card 5", description: "This is the fifth card." },
  ];

  // Duplicate cards to create seamless loop
  const loopingCards = [...cards, ...cards];

  return (
    <div className="overflow-hidden py-4 px-3" >
      <div
        ref={sliderRef}
        className="flex space-x-10 p-4 overflow-x-scroll no-scrollbar"
      >
        {loopingCards.map((card, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-white shadow-md shadow-slate-600 rounded-lg p-4 flex-shrink-0"
          >
            <div className="flex justify-center"><img src={profile_icon} alt=""/></div>
            <h3 className="text-lg font-bold text-center">{card.title}</h3>
            <p className="text-sm text-gray-600 text-center">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSlider;
