import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// Layout
import SidebarNavbar from './components/SidebarNavbar';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import JoinUs from './components/JoinUs';
// import LiveChatWidget from './components/LiveChatWidget'; // Optional

// Pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Dealer from './pages/Dealer';
import About from './pages/About';
import Calculator from './pages/Calculator';
import Recommender from './pages/Recommender';
import Cart from './pages/Cart';
import TrackOrder from './pages/TrackOrder';

// import NotFound from './pages/NotFound'; // Optional

// Scroll to top on page change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar - fixed */}
        <SidebarNavbar />

        {/* Main Content */}
        <div className="flex flex-col flex-grow ml-68 min-h-screen bg-white text-gray-900">
          <ScrollToTop />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/dealer" element={<Dealer />} />
              <Route path="/about" element={<About />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/recommender" element={<Recommender />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/track-order" element={<TrackOrder />} />
              <Route path="/join-us" element={<JoinUs />} />

              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </main>

          <Footer />
        </div>

        <WhatsAppChat />
        {/* <LiveChatWidget /> */}
      </div>
    </Router>
  );
};

export default App;
