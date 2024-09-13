import React from "react";

export default function Header() {
  const style = {
    color: "#FFF2E1",
    fontSize: "48px",
    textTransform: "uppercase",
  };

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}
