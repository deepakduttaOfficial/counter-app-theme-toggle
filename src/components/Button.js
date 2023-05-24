import React, { useContext } from "react";
import { MyContext } from "../context";

const Button = ({ children, ...rest }) => {
  const { isDarkTheme } = useContext(MyContext);
  return (
    <button
      style={{
        fontSize: 20,
        cursor: "pointer",
        padding: "15px 25px",
        borderRadius: "10px",
        border: "1px solid black",
        backgroundColor: isDarkTheme ? "#CAD5E2" : "#242B2E",
        color: isDarkTheme ? "#03203C" : "#CAD5E2",
        outline: "none",
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
