import React, { useState } from "react";
import Header from "./Header";
import Router from "./Router";
import Footer from "./Footer";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  console.log(darkTheme);
  return (
    <>
      <div className={darkTheme ? "dark" : ""}>
        <div className="bg-gray-500 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <Header />
          <Router />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
