import { useState } from "react";
import logo from "./logo.svg";
import "./index.css";
import AboutCard from "./components/AboutCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="font-inter">
      <AboutCard />
    </div>
  );
}

export default App;
