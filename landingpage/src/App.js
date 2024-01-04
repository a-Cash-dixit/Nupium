import Features from "./components/Features/Features.jsx";
import Navbar from "./components/Navbar/Navbar";
import ProcessFlow from "./components/Process/ProcessFlow.jsx";
import Slides from "./components/Slides/Slides";
import Web3 from "./components/Web3/Web3.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Slides />
      <Features />
      <ProcessFlow />
      <Web3 />
    </>
  );
}

export default App;
