import React, { useContext } from "react";
import { MyContext } from "../context";

const ThemeChangeButton = ({ children, ...rest }) => {
  const { isDarkTheme } = useContext(MyContext);
  return (
    <button
      style={{
        fontSize: 20,
        cursor: "pointer",
        padding: "15px 25px",
        borderRadius: "10px",
        border: "1px solid",
        borderColor: isDarkTheme ? "white" : "black",
        backgroundColor: "#242B2E",
        color: "#CAD5E2",
        outline: "none",
        marginTop: "20px",
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ThemeChangeButton;
