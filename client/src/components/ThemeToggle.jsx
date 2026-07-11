import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg border border-gray-300 hover:bg-gray-100 transition"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? (
        <FaMoon className="text-gray-700" />
      ) : (
        <FaSun className="text-yellow-500" />
      )}
    </button>
  );
}

export default ThemeToggle;