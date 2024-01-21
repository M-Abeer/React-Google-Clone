import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <div className={darkTheme ? "dark" : ""}>
        <div className="bg-gray-200 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        </div>
      </div>
    </>
  );
};

export default App;
