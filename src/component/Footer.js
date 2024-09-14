import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center p-3 bg-yellow-400">
      <p> Made with 💛 by Abhishek & Tanvi ©️{new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
