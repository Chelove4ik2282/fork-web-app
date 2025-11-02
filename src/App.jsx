import Navbar from "./components/Navbar";
import MainPart from "./components/mainPart";
import SecondPart from "./components/secondPart";
import ThirdPart from "./components/thirdPart";
import FourthPart from "./components/fourthPart";
import FifthPart from "./components/fifthPart";

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
