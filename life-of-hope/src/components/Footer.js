import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">Navigation</h4>
          <ul className="space-y-2">
            <li className="hover:text-yellow-300 cursor-pointer">About Us</li>
            <li className="hover:text-yellow-300 cursor-pointer">Gallery</li>
            <li className="hover:text-yellow-300 cursor-pointer">Contact Us</li>
            <li className="hover:text-yellow-300 cursor-pointer">Join Us</li>
            <li className="hover:text-yellow-300 cursor-pointer">Donate Now</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">Keep in Touch</h4>
          <ul className="space-y-2">
            <li className="hover:text-yellow-300 cursor-pointer">ShopAll</li>
            <li className="hover:text-yellow-300 cursor-pointer">Phones</li>
            <li className="hover:text-yellow-300 cursor-pointer">Laptops</li>
            <li className="hover:text-yellow-300 cursor-pointer">iPads & Tablets</li>
            <li className="hover:text-yellow-300 cursor-pointer">Gaming Consoles</li>
            <li className="hover:text-yellow-300 cursor-pointer">Drones</li>
            <li className="hover:text-yellow-300 cursor-pointer">Home Appliances</li>
          </ul>
        </div>


        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">Info</h4>
          <ul className="space-y-2">
            <li className="hover:text-yellow-300 cursor-pointer">Shipping & Returns</li>
            <li className="hover:text-yellow-300 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-yellow-300 cursor-pointer">Payment Methods</li>
            <li className="hover:text-yellow-300 cursor-pointer">Help</li>
          </ul>
        </div>


        <div>
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">Captain Bummer HQ</h4>
          <ul className="space-y-2">
            <li className="hover:text-yellow-300">500 Terry Francine Street</li>
            <li className="hover:text-yellow-300">San Francisco, CA 94158</li>
            <li className="hover:text-yellow-300">📞 123-456-7890</li>
            <li className="hover:text-yellow-300">📧 captain@bummerz.org</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-blue-800 pt-6 text-center text-xs text-gray-400">
        © 2025 Bage316 & Bunney Tunez | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
