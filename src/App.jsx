import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./index.css";
import AboutCard from "./components/AboutCard";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", appHeight);
    appHeight();
  }, []);

  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };

  return (
    <div className="font-inter">
      <AboutCard />
    </div>
  );
}

export default App;
