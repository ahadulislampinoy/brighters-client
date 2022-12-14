import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col sm:flex-row justify-between items-center p-5 sm:p-10">
      <p className="text-center text-gray-800 font-medium pb-4 sm:pb-0">
        &copy; {year} Brighters. All rights reservered.
      </p>
      <div className="flex justify-center space-x-5">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/facebook-new.png"
            alt=""
          />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/fluent/30/000000/linkedin-2.png"
            alt=""
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/fluent/30/000000/twitter.png"
            alt=""
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
