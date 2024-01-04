import Features from "./components/Features/Features.jsx";
import Navbar from "./components/Navbar/Navbar";
import ProcessFlow from "./components/Process/ProcessFlow.jsx";
import Slides from "./components/Slides/Slides";

function App() {
  return (
    <>
      <Navbar />
      <Slides />
      <Features />
      <ProcessFlow />
    </>
  );
}

export default App;
