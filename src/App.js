import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "./Components/Shared/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Blog from "./Components/Blog/Blog";
import Events from "./Components/Events/Events";
import Partnerships from "./Components/Partnerships/Partnerships";
import Resources from "./Components/Resources/Resources";
import Error from "./Components/Error/Error";
import SharedHeader from "./Components/Shared/SharedHeader";
import Footer from "./Components/Shared/Footer";
import Team from "./Components/Team/Team";

function App() {
  const location = useLocation();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div>
      {/* Page Transition Animation */}
      <AnimatePresence mode="wait">
        {isAnimating && (
          <motion.div className="fixed inset-0 z-20 flex items-center justify-center">
            {/* Layer 1 */}
            <motion.div
              className="absolute inset-0 bg-blue-900"
              initial={{ x: "0%", opacity: 1 }}
              animate={{ x: "100%", opacity: 0.8}}
              exit={{ x: "100%", opacity: 0.5 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.1 }}
            />

            {/* Layer 2 */}
            <motion.div
              className="absolute inset-0 bg-blue-600"
              initial={{ x: "20%", opacity: 1 }}
              animate={{ x: "100%", opacity: 0.8 }}
              exit={{ x: "100%", opacity: 0.5 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            />

            {/* Layer 3 */}
            <motion.div
              className="absolute inset-0 bg-blue-300"
              initial={{ x: "40%", opacity: 1 }}
              animate={{ x: "100%", opacity: 0.8 }}
              exit={{ x: "100%", opacity: 0.5 }}
              transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
            >
              <h1 className="text-blue-900 text-7xl text-left font-bold">
                Welcome!
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header & Navbar */}
      <div className="hidden lg:block">
        <SharedHeader />
      </div>
      <Navbar />

      {/* Wrap Routes in AnimatePresence & Ensure Key Changes */}
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/team" element={<Team />} />
          <Route path="/partnerships" element={<Partnerships />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
