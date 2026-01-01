"use client";
import React, { useState } from 'react';
import { ShoppingBag, Gem, Search, User, Heart } from 'lucide-react';

export default function StoreHomepage() {
  const [activeSection, setActiveSection] = useState('clothing');

  const clothingItems = [
    { id: 1, name: 'Elegant Maxi Dress', price: '₹149', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop' },
    { id: 2, name: 'Denim Jacket', price: '₹189', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop' },
    { id: 3, name: 'Leggings', price: '₹125', image: 'https://images.unsplash.com/photo-1564859228273-274232fdb516?w=400&h=500&fit=crop' },
    { id: 4, name: 'Wide Leg Pants', price: '₹135', image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=500&fit=crop' },
  ];

  const jewelryItems = [
    { id: 1, name: 'Necklace', price: '₹399', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop' },
    { id: 2, name: 'Earrings', price: '₹599', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=500&fit=crop' },
    { id: 3, name: 'Bracelet', price: '₹249', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=500&fit=crop' },
    { id: 4, name: 'Pearl Ring', price: '₹299', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=500&fit=crop' },
  ];

  const items = activeSection === 'clothing' ? clothingItems : jewelryItems;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Gem className="w-10 h-10" />
              <div>
                <h1 className="text-4xl font-bold tracking-widest">LIZA</h1>
                <p className="text-xs tracking-widest text-gray-400">FASHIONS AND JEWELS</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-8">
              <Search className="w-6 h-6 cursor-pointer hover:text-gray-400 transition-all duration-300" />
              <Heart className="w-6 h-6 cursor-pointer hover:text-gray-400 transition-all duration-300" />
              <User className="w-6 h-6 cursor-pointer hover:text-gray-400 transition-all duration-300" />
              <div className="relative">
                <ShoppingBag className="w-6 h-6 cursor-pointer hover:text-gray-400 transition-all duration-300" />
                <span className="absolute -top-2 -right-2 bg-gray-200 text-gray-900 text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">0</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative bg-gray-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
            STYLE
          </h2>
          <h3 className="text-5xl md:text-6xl font-light mb-8 tracking-wide">
            Redefined
          </h3>
          <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Premium fashion and exquisite jewelry for the modern individual
          </p>
          
          {/* Section Switcher */}
          <div className="flex justify-center items-center space-x-6">
            <button
              onClick={() => setActiveSection('clothing')}
              className={`flex items-center space-x-3 px-12 py-4 rounded-xl font-bold text-lg transition-all duration-500 ${
                activeSection === 'clothing'
                  ? 'bg-gray-200 text-gray-900 shadow-lg transform scale-105'
                  : 'bg-transparent text-white border-2 border-gray-200 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              <ShoppingBag className="w-6 h-6" />
              <span>FASHION</span>
            </button>
            <button
              onClick={() => setActiveSection('jewelry')}
              className={`flex items-center space-x-3 px-12 py-4 rounded-xl font-bold text-lg transition-all duration-500 ${
                activeSection === 'jewelry'
                  ? 'bg-gray-200 text-gray-900 shadow-lg transform scale-105'
                  : 'bg-transparent text-white border-2 border-gray-200 hover:bg-gray-200 hover:text-gray-900'
              }`}
            >
              <Gem className="w-6 h-6" />
              <span>JEWELS</span>
            </button>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-6xl font-bold text-gray-900 mb-4 tracking-tight">
            {activeSection === 'clothing' ? 'FASHION' : 'JEWELS'}
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {activeSection === 'clothing'
              ? 'Curated pieces that define elegance'
              : 'Timeless treasures that shine forever'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl border-2 border-gray-300 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-gray-900 hover:-translate-y-2"
            >
              <div className="relative h-96 overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-8 py-3 rounded-xl font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-gray-700 shadow-xl">
                  ADD TO CART
                </button>
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {item.name}
                </h4>
                <p className="text-3xl font-bold text-gray-900">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gray-900 text-white px-16 py-5 rounded-xl font-bold text-xl hover:bg-gray-700 transition-all duration-500 shadow-lg hover:shadow-2xl hover:scale-105">
            VIEW ALL {activeSection === 'clothing' ? 'FASHION' : 'JEWELS'}
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Gem className="w-10 h-10" />
                <div>
                  <h5 className="text-3xl font-bold">LIZA</h5>
                  <p className="text-xs text-gray-400 tracking-widest">FASHIONS AND JEWELS</p>
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Your destination for timeless elegance and style
              </p>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-6">SHOP</h5>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li className="hover:text-white cursor-pointer transition-colors">New Arrivals</li>
                <li className="hover:text-white cursor-pointer transition-colors">Fashion</li>
                <li className="hover:text-white cursor-pointer transition-colors">Jewelry</li>
                <li className="hover:text-white cursor-pointer transition-colors">Sale</li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-6">SUPPORT</h5>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                <li className="hover:text-white cursor-pointer transition-colors">Shipping</li>
                <li className="hover:text-white cursor-pointer transition-colors">Returns</li>
                <li className="hover:text-white cursor-pointer transition-colors">Size Guide</li>
              </ul>
            </div>
            <div>
              <h5 className="text-xl font-bold mb-6">CONNECT</h5>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li className="hover:text-white cursor-pointer transition-colors">Instagram</li>
                <li className="hover:text-white cursor-pointer transition-colors">Facebook</li>
                <li className="hover:text-white cursor-pointer transition-colors">Pinterest</li>
                <li className="hover:text-white cursor-pointer transition-colors">Twitter</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 text-lg">
              &copy; 2024 LIZA. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}