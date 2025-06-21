import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  Image,
  ShoppingCart,
  Truck,
  Users,
  Info,
  Calculator,
  SlidersHorizontal,
  LogIn,
} from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { name: 'Home', path: '/', icon: <Home size={20} /> },
  { name: 'Gallery', path: '/gallery', icon: <Image size={20} /> },
  { name: 'Dealer', path: '/dealer', icon: <Users size={20} /> },
  { name: 'About', path: '/about', icon: <Info size={20} /> },
  { name: 'Calculator', path: '/calculator', icon: <Calculator size={20} /> },
  { name: 'Recommender', path: '/recommender', icon: <SlidersHorizontal size={20} /> },
  { name: 'Cart', path: '/cart', icon: <ShoppingCart size={20} /> },
  { name: 'Track Order', path: '/track-order', icon: <Truck size={20} /> },
];

const SidebarNavbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setOpen(!open);
  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/* Mobile Topbar */}
      <div className="md:hidden fixed top-0 left-0 w-full z-50 bg-white shadow-md flex items-center justify-between px-4 py-3">
        <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <Link to="/" className="text-lg font-bold text-green-600">
          ShuHaRi
        </Link>
        <Link to="/join-us" className="bg-green-600 text-white px-4 py-1 rounded-xl text-sm">
          Join Us
        </Link>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {(open || window.innerWidth >= 768) && (
          <motion.div
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ duration: 0.3 }}
            className={clsx(
              'fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 shadow-2xl flex flex-col justify-between',
              'transition-transform duration-300 ease-in-out'
            )}
          >
            {/* Logo */}
            <div className="flex items-center justify-center py-6 border-b border-gray-700">
              <Link to="/" className="text-2xl font-bold text-green-400">
                ShuHaRi
              </Link>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col mt-4 space-y-2 px-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={closeSidebar}
                  className={clsx(
                    'flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-300 hover:bg-green-700 hover:translate-x-1 hover:scale-105',
                    location.pathname === item.path ? 'bg-green-600' : 'text-white'
                  )}
                >
                  {item.icon}
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>

            {/* Join Us Button */}
            <div className="p-4 border-t border-gray-700">
              <Link
                to="/join-us"
                onClick={closeSidebar}
                className="block text-center bg-green-600 hover:bg-green-700 transition-colors text-white px-4 py-2 rounded-lg font-semibold"
              >
                <span className="inline-flex items-center gap-2">
                  <LogIn size={18} /> Join Us
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="md:ml-64" />
    </>
  );
};

export default SidebarNavbar;
