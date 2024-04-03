/* 8.Use the useEffect hook to manage the current slide and transition.
Add few images atleast 10 in public folder to populate the slideshow.
Allow users to pause, play the slideshow.
Include a time interval option to control the automatic slideshow progression. */
import React, { useState, useEffect } from "react";

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalTime = 3000;

  const images = [
    "/Images/02.jpg",
    "/Images/03.jpg",
    "/Images/04.jpg",
    "/Images/01.jpg",
  ];
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === images.length - 1 ? 0 : prevSlide + 1
        );
      }, intervalTime);
    }
    return () => clearInterval(interval);
  }, [isPaused, intervalTime, images.length]);

  const handlePausePlay = () => {
    setIsPaused((prevPaused) => !prevPaused);
  };
  return (
    <div>
      <h1>My Slide Show</h1>
      <div>
        <img
          src={images[currentSlide]}
          alt="Slide"
          style={{ width: "200px", height: "auto" }}
        />
      </div>
      <div>
        <button onClick={handlePausePlay}>{isPaused ? "Play" : "Pause"}</button>
      </div>
    </div>
  );
};

export default SlideShow;
