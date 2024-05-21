import Hero from "./Components/Hero.jsx";
import Market from "./Components/Market.jsx";
import Join from "./Components/Join.jsx";
import WhyChooseUs from "./Components/WhyChooseUs.jsx";
import Navbar from "./Components/Navbar.jsx";
import CoinInfo from "./Pages/CoinInfo.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
