import React, { useContext } from "react";
import Button from "./components/Button";
import CounterCard from "./components/CounterCard";
import { MyContext } from "./context";
import ThemeChangeButton from "./components/ThemeChangeButton";
import "./App.css";

const App = () => {
  const { isDarkTheme, setIsDarkTheme, setCount } = useContext(MyContext);
  const handleCount = (name) => {
    if (name === "+") {
      setCount((preValue) => preValue + 1);
    } else {
      setCount((preValue) => preValue + 1);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: isDarkTheme ? "#242B2E" : "#CAD5E2",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={() => handleCount("+")}>+</Button>
        <CounterCard />
        <Button onClick={() => handleCount("-")}>-</Button>
      </div>
      <ThemeChangeButton
        onClick={() => {
          setIsDarkTheme((preValue) => !preValue);
        }}
      >
        Change to {isDarkTheme ? "light" : "Dark"}
      </ThemeChangeButton>
    </div>
  );
};

export default App;
