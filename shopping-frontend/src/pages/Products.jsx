import React, { useState, useEffect } from "react";
import UserNavbar from "../components/UserNavbar";

const demoProducts = [
  {
    id: 1,
    name: "Women's Summer Dress",
    price: 1299,
    category: "Women",
    image:
      "https://thevishnu.in/cdn/shop/articles/blog1_vishnu.png?v=1718008804",
  },
  {
    id: 2,
    name: "Men's Casual Shirt",
    price: 999,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
  },
  {
    id: 3,
    name: "Kids Party Wear",
    price: 799,
    category: "Kids",
    image:
      "https://www.foreverkidz.in/cdn/shop/files/WhatsAppImage2025-06-30at3.14.16PM.jpg?crop=center&height=1194&v=1751285221&width=853",
  },
  {
    id: 4,
    name: "Women's Handbag",
    price: 1599,
    category: "Women",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqCn7qFYc7JBPf3Sw1KhlgKOjgbID3XMi0eA&s",
  },
  {
    id: 5,
    name: "Men Sneakers",
    price: 2199,
    category: "Men",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
  },
  {
    id: 6,
    name: "Kids Shoes",
    price: 699,
    category: "Kids",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
];

const categories = ["All", "Women", "Men", "Kids"];

const Products = () => {
  const [products, setProducts] = useState(demoProducts);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <UserNavbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6 text-gray-900">
          Our Products
        </h1>

        {/* Categories */}
        <div className="flex gap-3 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg truncate">
                  {product.name}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  {product.category}
                </p>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-xl font-bold text-blue-600">
                    ₹{product.price}
                  </span>
                </div>

                <div className="flex gap-2 mt-4">
                  <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty */}
        {filteredProducts.length === 0 && (
          <div className="text-center mt-20 text-gray-500">
            No products found
          </div>
        )}
      </div>
    </>
  );
};

export default Products;
