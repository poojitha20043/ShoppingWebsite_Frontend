import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  const testimonials = [
    { name: "Rahul Sharma", review: "Best shopping experience! Fast delivery and great customer service.", rating: "⭐⭐⭐⭐⭐" },
    { name: "Priya Patel", review: "Quality products at affordable prices. Highly recommended!", rating: "⭐⭐⭐⭐⭐" },
    { name: "Amit Kumar", review: "Easy returns policy made my shopping stress-free. Will shop again!", rating: "⭐⭐⭐⭐" },
  ];

  return (
   
    <div className="flex flex-col min-h-screen">
       <Navbar />
      {/* Hero Section */}
      <div 
        className="relative py-24 sm:py-32 text-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Welcome to ShopEasy</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8">Your one-stop shopping destination for quality products</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/register" 
              className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-150"
            >
              Get Started
            </Link>
            <Link 
              to="/login" 
              className="bg-white text-blue-600 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-150"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center border border-gray-100 hover:shadow-lg transition duration-300">
            <div className="text-5xl mb-3 sm:mb-4">🛒</div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-gray-800">Easy Shopping</h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-base">Simple and intuitive shopping experience with easy navigation</p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center border border-gray-100 hover:shadow-lg transition duration-300">
            <div className="text-5xl mb-3 sm:mb-4">🚚</div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-gray-800">Fast Delivery</h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-base">Quick and reliable delivery to your doorstep across India</p>
          </div>
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md text-center border border-gray-100 hover:shadow-lg transition duration-300">
            <div className="text-5xl mb-3 sm:mb-4">🔒</div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4 text-gray-800">Secure Payment</h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-base">100% secure payment options with multiple payment methods</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-100">
              <div className="text-yellow-400 text-xl mb-2 sm:mb-3">{testimonial.rating}</div>
              <p className="text-gray-600 italic mb-3 sm:mb-4 text-sm sm:text-base">"{testimonial.review}"</p>
              <p className="font-bold text-gray-800 text-sm sm:text-base">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-10 pb-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-3">🛒 ShopEasy</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">Your trusted online shopping destination. Quality products, fast delivery, and excellent service.</p>
            <div className="flex space-x-3 text-lg sm:text-xl">
              <span>📘</span>
              <span>🐦</span>
              <span>📷</span>
              <span>📺</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><Link to="/" className="text-gray-300 hover:text-white transition">Home</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition">Products</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition">Categories</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">About Us</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Legal</h4>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Refund Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Shipping Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
            <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base text-gray-300">
              <li>📧 support@shopeasy.com</li>
              <li>📞 +91 9876543210</li>
              <li>📍 Hyderabad, India</li>
              <li>⏰ 9 AM - 9 PM (Mon-Sat)</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm sm:text-base">
          <p>© {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
          <p className="mt-1">Made with ❤️ for shopping enthusiasts</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
