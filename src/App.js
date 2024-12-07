import { Route, Routes } from "react-router-dom";
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
  return (
    <div>
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
