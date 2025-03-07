import React from "react";
import "./Blog.css";

const blogs = [
  {
    id: 1,
    title: "The Future of Fashion: Trends to Watch",
    image: "/images/blog1.png",
    content:
      "Fashion is constantly evolving, and 2025 brings fresh trends in sustainability, smart fabrics, and bold designs. Stay ahead with our latest insights on the fashion world.",
  },
  {
    id: 2,
    title: "5 Must-Have Wardrobe Essentials",
    image: "/images/blog2.png",
    content:
      "Every stylish person needs a few timeless wardrobe staples. From classic denim to the perfect white shirt, discover the essentials that make dressing effortless.",
  },
  {
    id: 3,
    title: "How to Style Casual Outfits Like a Pro",
    image: "/images/blog3.png",
    content:
      "Casual wear doesn't have to be boring! Learn how to mix and match colors, add statement accessories, and create stylish yet comfortable everyday outfits.",
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">Latest Blogs</h2>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <h3 className="blog-heading">{blog.title}</h3>
            <p className="blog-content">{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
