import "./App.css";
import axios from "axios";
import pattern from "./assets/pattern-divider-desktop.svg";
import dice from "./assets/dice.svg";
import { useState } from "react";

function App() {
  const [advice, setAdvice] = useState("");
  const getAdvice = async () => {
    try {
      const advice = await axios.get("https://api.adviceslip.com/advice");
      setAdvice(advice.data.slip);
    } catch (error) {}
  };
  return (
    <div className="body-container">
      <div className="advice-container">
        <span className="advice-id">ADVICE #{advice.id}</span>
        <p className="advice">{advice.advice}</p>
        <img src={pattern} alt="pattern" className="pattern" />
        <img
          src={dice}
          alt="dice"
          className="dice-img"
          onClick={() => getAdvice()}
        />
      </div>
    </div>
  );
}

export default App;
