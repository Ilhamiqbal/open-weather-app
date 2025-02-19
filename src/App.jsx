import "./App.css";
import axios from "axios";
import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import { TempAndDetails } from "./components/TempAndDetails";

function App() {
  return (
    <div className="text-white mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700">
      <TopButton />
      <Inputs />
      <TimeAndLocation />
      <TempAndDetails />
    </div>
  );
}

export default App;
