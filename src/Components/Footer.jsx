import { Link } from "react-router";

const Footer = ({NavLinks}) => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & About */}
        <div>
          <h2 className="text-2xl font-bold text-green-400">FoodLoop</h2>
          <p className="mt-2 text-sm text-gray-400">
            Sharing leftover and extra meals with love. Join the loop to reduce food waste and nourish the community.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-300">Quick Links</h3>
          <ul className="space-y-2 text-sm **:text-white">
            {NavLinks}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-green-300">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: support@foodloop.com</li>
            <li>Phone: +880 123 456 789</li>
            <li>Location: Dhaka, Bangladesh</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} FoodLoop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
