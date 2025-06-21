
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">ShuHaRi Renewables</h3>
          <p>
            A Make in India enterprise transforming biomass waste into clean, efficient biofuels and carbon products.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Phone size={18} /> <span>+91 9619596561</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> <span>info@shuhari.co.in</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={18} /> <span>Ahmedabad, Gujarat, India</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/dealer" className="hover:text-green-400">Become a Dealer</a></li>
            <li><a href="/calculator" className="hover:text-green-400">Savings Calculator</a></li>
            <li><a href="/recommender" className="hover:text-green-400">Product Recommender</a></li>
            <li><a href="/gallery" className="hover:text-green-400">Gallery</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} ShuHaRi Renewables. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;