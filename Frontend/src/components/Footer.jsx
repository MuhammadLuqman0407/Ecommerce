import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#ddfceb]">
      <div className="w-full max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6">
            <h2 className="text-3xl font-bold text-green-600">
              Green<span className="text-gray-800">Cart</span>
            </h2>

            <p className="mt-6 max-w-md text-gray-600 leading-8">
              We deliver fresh groceries and snacks straight to your door.
              Trusted by thousands, we aim to make your shopping experience
              simple and affordable.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-600">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">Best Sellers</Link></li>
              <li><Link to="/">Offers & Deals</Link></li>
              <li><Link to="/">Contact Us</Link></li>
              <li><Link to="/">FAQs</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Need Help?</h3>

            <ul className="space-y-3 text-gray-600">
              <li><Link to="/">Delivery Information</Link></li>
              <li><Link to="/">Return Policy</Link></li>
              <li><Link to="/">Payment Methods</Link></li>
              <li><Link to="/">Track Order</Link></li>
              <li><Link to="/">Contact Us</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-semibold text-lg mb-5">Follow Us</h3>

            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
                <FaInstagram /> Instagram
              </li>

              <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
                <FaTwitter /> Twitter
              </li>

              <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
                <FaFacebookF /> Facebook
              </li>

              <li className="flex items-center gap-2 hover:text-green-600 cursor-pointer">
                <FaYoutube /> YouTube
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-3"></div>

        <div className="py-3 text-center text-gray-800 text-sm">
          © 2026 GreenCart. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;