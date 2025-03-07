import React from "react";
import "./Home.css";

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
  return (
    <div>
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
      <div class="marquee-container">
    
</div>


    </div>
  );
};

export default Home;
