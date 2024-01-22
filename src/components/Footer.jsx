import React from "react";

let date = new Date().getFullYear();
console.log(date);

const Footer = () => {
  return (
    <div className="text-center p-10 mt-10 border-t  dark: border-gray-700 border-gray-200">
      <h1>{date} Googl, Inc.</h1>
    </div>
  );
};

export default Footer;
