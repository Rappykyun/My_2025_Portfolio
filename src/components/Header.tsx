import { useState, useEffect } from "react";
import { House, FolderKanban, Mail, Menu, X } from "lucide-react";
import MoonIcon from "../assets/icons/MoonIcon";
import SunIcon from "../assets/icons/SunIcon";

export function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navItems = [
    { icon: House, label: "Home" },
    { icon: FolderKanban, label: "Projects" },
    { icon: Mail, label: "Contact" },
  ];

  type NavItemProps = {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    isActive: boolean;
    onClick: () => void;
  };

  function NavItem({ icon: Icon, label, isActive, onClick }: NavItemProps) {
    return (
      <li className="w-full md:w-auto">
        <button
          onClick={onClick}
          className={`w-full md:w-auto text-sm flex items-center gap-2 font-incognito font-semibold 
            transition-all duration-200 px-4 py-3 md:py-2 rounded-lg
            ${
              isActive
                ? "text-green-500 bg-green-50 dark:bg-green-950/30"
                : "text-zinc-600 dark:text-zinc-400 hover:text-green-500 dark:hover:text-green-400"
            }
            hover:scale-105`}
          aria-current={isActive ? "page" : undefined}
        >
          <Icon
            className={`w-5 h-5 ${
              isActive ? "stroke-green-500" : "stroke-current"
            }`}
          />
          <span>{label}</span>
        </button>
      </li>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6 border-b border-zinc-200 dark:border-zinc-800">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors z-50"
          aria-label="Toggle menu"
          aria-expanded={isOpen ? "true" : "false"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:block text-xl font-bold text-zinc-900 dark:text-white z-50">
          Logo
        </div>

        <nav
          className={`
            fixed md:static 
            inset-0 md:inset-auto
            pt-20 md:pt-0
            px-6 md:px-0
            bg-white dark:bg-zinc-900 md:bg-transparent
            transform transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            flex flex-col md:flex-row 
            items-start md:items-center 
            justify-start md:justify-center
            z-40 md:z-auto
          `}
          aria-label="Main navigation"
        >
          <ul className="w-full md:w-auto flex flex-col md:flex-row items-stretch md:items-center gap-2">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                icon={item.icon}
                label={item.label}
                isActive={activeItem === item.label}
                onClick={() => {
                  setActiveItem(item.label);
                  setIsOpen(false);
                }}
              />
            ))}
          </ul>
        </nav>

        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 
            hover:bg-zinc-200 dark:hover:bg-zinc-700
            transition-colors duration-200 z-50"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          {theme === "light" ? <MoonIcon /> : <SunIcon />}
        </button>
      </div>
    </header>
  );
}
