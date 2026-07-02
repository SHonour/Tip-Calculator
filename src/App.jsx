import "./App.css";
import Header from "./components/Header";
import TipCalculator from "./components/TipCalculator";

function App() {
  return (
    <div className="bg-[#0D2218] h-screen flex flex-col justify-center items-center">
      <Header />
      <TipCalculator />
      <h1 className="font-martel font-normal text-[#FFFFFF] text-[12px] leading-[169%] mt-5.75">
        Dinner is on you - JUST KIDDING
      </h1>
    </div>
  );
}

export default App;
