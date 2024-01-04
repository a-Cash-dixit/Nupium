import Features from "./components/Features/Features.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar";
import ProcessFlow from "./components/Process/ProcessFlow.jsx";
import Slides from "./components/Slides/Slides";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Web3 from "./components/Web3/Web3.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Slides />
      <Features />
      <ProcessFlow />
      <Web3 />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
