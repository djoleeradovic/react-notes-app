import { React, useState, useEffect } from "react";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Header = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : true;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const setLightTheme = () => {
    setTheme(true);
    document.querySelector("body").classList.add("white-theme");
  };

  const setDarkTheme = () => {
    setTheme(false);
    document.querySelector("body").classList.remove("white-theme");
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "true") {
      setLightTheme();
    }
  }, []);

  return (
    <header>
      <h2>Notes App</h2>
      <div className="theme">
        {theme ? (
          <BsFillSunFill onClick={() => setDarkTheme()} />
        ) : (
          <BsFillMoonFill onClick={() => setLightTheme()} />
        )}
      </div>
    </header>
  );
};

export default Header;
