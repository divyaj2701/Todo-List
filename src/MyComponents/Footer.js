import React from "react";

export const Footer = () => {
  let UsedStyle = {
    marginTop: "1rem",
    width: "100%"
  };
  return (
    <footer className="bg-dark text-light p-3" style={UsedStyle}>
      <p className="text-center"> Copyright &copy; MytodosList.com</p>
    </footer>
  );
};
