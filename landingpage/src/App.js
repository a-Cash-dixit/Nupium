import Faculties from "./components/Faculties/Faculties.jsx";
import Features from "./components/Features/Features.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar";
//import ProcessFlow from "./components/Process/ProcessFlow.jsx";
import Slides from "./components/Slides/Slides";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Web3 from "./components/Web3/Web3.jsx";
import Welcome from "./components/Welcome/Welcome.jsx";
import "./App.css";
import ProcessFlow from "./components/Process/ProcessFlow.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Slides />
      <Welcome />
      <Features />
      <Faculties />
      <Web3 />
      <Testimonials />
      <ProcessFlow />
      <Footer />
    </>
  );
}

export default App;
