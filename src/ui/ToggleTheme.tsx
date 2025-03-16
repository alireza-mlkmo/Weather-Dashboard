import React from "react";
import { useTheme } from "../Contexts/ThemeContext"; // Assuming you have a ThemeContext
import { IoMoonOutline } from "react-icons/io5"; // Moon icon
import { LuSunMedium } from "react-icons/lu"; // Sun icon

const ToggleTheme: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="flex items-center w-24 h-10 p-2 shadow-2xl bg-primary rounded-full cursor-pointer focus:outline-none  transition-colors duration-300"
      onClick={toggleTheme}
    >
      <div
        className={`relative w-full h-full transition-transform duration-300 ${
          theme === "dark" ? "translate-x-8" : "translate-x-0"
        }`}
      >
        <div
          className={`absolute top-1/2 left-0 transform -translate-y-1/2 transition-opacity duration-300 ${
            theme === "light" ? "opacity-100" : "opacity-0"
          }`}
        >
          <IoMoonOutline className="w-7 h-7" />
        </div>

        <div
          className={`absolute top-1/2 right-7 transform -translate-y-1/2 transition-opacity duration-300 ${
            theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
        >
          <LuSunMedium className="w-7 h-7 dark:text-black" />
        </div>
      </div>
    </button>
  );
};

export default ToggleTheme;
