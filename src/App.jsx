import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import DevOps from "./sections/DevOps";
import Experience from "./sections/Experience";
import Research from "./sections/Research";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import VeyraCaseStudy from "./pages/case-studies/VeyraCaseStudy";
import DockMindCaseStudy from "./pages/case-studies/DockMindCaseStudy";
import DEVRPCaseStudy from "./pages/case-studies/DEVRPCaseStudy";
import FinHabitCaseStudy from "./pages/case-studies/FinHabitCaseStudy";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <DevOps />
        <Experience />
        <Research />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/case-studies/veyra" element={<VeyraCaseStudy />} />

        <Route
          path="/case-studies/dockmind-ai"
          element={<DockMindCaseStudy />}
        />

        <Route path="/case-studies/devrp-v2" element={<DEVRPCaseStudy />} />

        <Route path="/case-studies/finhabit" element={<FinHabitCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
