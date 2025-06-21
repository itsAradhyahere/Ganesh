// src/pages/Cart.tsx
import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Cart: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center space-x-3 mb-6">
        <ShoppingCart className="w-8 h-8 text-green-600" />
        <h1 className="text-2xl md:text-3xl font-bold">Your Cart</h1>
      </div>

      {/* Cart Content */}
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-gray-600">Your cart is currently empty.</p>
      </div>
    </div>
  );
};

export default Cart;
