import React, { useState, useEffect } from "react";
import "./Banner.css";

const images = [
    "/images/banner1.jpg",
    "/images/banner2.jpg",
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // हर 3 सेकंड में स्लाइड बदलेगा
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container">
      <img src={images[currentIndex]} alt="Banner" className="banner-image" />
    </div>
  );
};

export default Banner;
