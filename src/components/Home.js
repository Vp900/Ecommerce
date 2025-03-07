import React, { useState, useEffect } from "react";
import "./Home.css";

const images = [
  "/images/banner1.jpg",
  "/images/banner2.jpg",

];

const products = [
  {
    id: 1,
    name: "Casual Shirt",
    image: "/images/shirt.webp",
    bgColor: "#FFCC00",
  },
  {
    id: 2,
    name: "T-Shirt",
    image: "/images/tshirt.webp",
    bgColor: "#0033CC",
  },
  {
    id: 3,
    name: "Denim Jeans",
    image: "/images/Denim Jeans.webp",
    bgColor: "#FFCC66",
  },
  {
    id: 4,
    name: "Formal Suit",
    image: "/images/suite.webp",
    bgColor: "#001F3F",
  },
  {
    id: 5,
    name: "Track Pants",
    image: "/images/trackpants.jpg",
    bgColor: "#800080",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Banner Slider */}
      <div className="banner-container">
        <img src={images[currentIndex]} alt="Banner" className="banner-image" />
      </div>

      {/* Bestseller Section */}
      <div className="bestseller">
        <h2>Our Bestseller</h2>
        <p>Crafted With Care, Trusted By Many</p>

        <div className="product-container">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              style={{ backgroundColor: product.bgColor }}
            >
              <img src={product.image} alt={product.name} />
              <div className="product-name">{product.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Section */}
      <div className="marquee-container">
        <marquee behavior="alternate" direction="left" className="marquee">
          🛍️ Big Sale Alert! Get up to 50% OFF on all products. &nbsp; • &nbsp;
          🚚 Free Shipping on orders above ₹999! &nbsp; • &nbsp;
          🎉 New Arrivals are here! Shop the latest trends now. &nbsp; • &nbsp;
        </marquee>
      </div>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <p>
          We are committed to delivering exceptional quality and innovation in
          every aspect of our services. Our team of experts combines
          cutting-edge technology with a deep understanding of customer needs,
          ensuring that we provide solutions that truly make a difference.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </section>
    </div>
  );
};

export default Home;
