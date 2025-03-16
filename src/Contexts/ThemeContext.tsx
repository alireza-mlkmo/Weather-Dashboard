import { createContext, useContext, useEffect, useState } from "react";

type Theme = 'dark' | 'light';
type ThemeContextType = {
    theme: Theme,
    toggleTheme: () => void,
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
    const [theme , setTheme] = useState<Theme>("light");
    
    function toggleTheme(){
        setTheme((theme) => theme === 'light' ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark',theme === 'light')
    }
    useEffect(
      function () {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
        setTheme(initialTheme);
        document.documentElement.classList.toggle(
          "dark",
          initialTheme === "dark"
        );
      },
      []
    );
     useEffect(() => {
        localStorage.setItem('theme', theme);
    },[theme]);


    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};