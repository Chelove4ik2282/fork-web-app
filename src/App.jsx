import Navbar from "./components/Navbar.jsx";
import MainPart from "./components/mainPart.jsx";
import SecondPart from "./components/secondPart.jsx";
import ThirdPart from "./components/thirdPart.jsx";
import FourthPart from "./components/fourthPart.jsx";
import FifthPart from "./components/fifthPart.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <MainPart />
      <SecondPart />
      <ThirdPart />
      <FourthPart />
      <FifthPart /> 
    </div>
  );
}
