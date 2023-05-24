import React, { useContext } from "react";
import { MyContext } from "../context";

function CounterCard() {
  const { isDarkTheme, count } = useContext(MyContext);
  return (
    <div
      style={{
        margin: "10px 20px",
        height: "50px",
        width: "100px",
        backgroundColor: "#758283",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "15px",
        color: isDarkTheme ? "#3C4048" : "#CAD5E2",
      }}
    >
      {count}
    </div>
  );
}

export default CounterCard;
