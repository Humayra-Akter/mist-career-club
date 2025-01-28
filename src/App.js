import { Route, Routes } from "react-router-dom";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the duration as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Animated Loading Screen */}
      {/* <AnimatePresence>
    {isLoading && (
      <motion.div
        className="fixed inset-0 z-50 bg-blue-500 flex items-center justify-center"
        initial={{ x: "0%" }}
        animate={{ x: "100%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <h1 className="text-white text-3xl font-bold">Welcome!</h1>
      </motion.div>
    )}
  </AnimatePresence> */}
      <AnimatePresence>
        {isLoading && (
          <motion.div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Layer 1 */}
            <motion.div
              className="absolute inset-0 bg-blue-900"
              initial={{ x: "0%" }}
              animate={{ x: "100%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            />

            {/* Layer 2 */}
            <motion.div
              className="absolute inset-0 bg-blue-600"
              initial={{ x: "20%" }}
              animate={{ x: "100%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 1.3, ease: "easeInOut", delay: 0.3 }}
            />
            {/* Layer 3 */}
            <motion.div
              className="absolute inset-0 bg-blue-300"
              initial={{ x: "40%" }}
              animate={{ x: "100%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 1.1, ease: "easeInOut", delay: 0.4 }}
            >
              <h1 className="text-blue-900 text-7xl text-left font-bold">
                Welcome!
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden lg:block">
        <SharedHeader />
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
