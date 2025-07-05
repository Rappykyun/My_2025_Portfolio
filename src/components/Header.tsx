import { useState, useEffect } from "react";
import { House, FolderKanban, Mail, Menu, X } from "lucide-react";
import MoonIcon from "../assets/icons/MoonIcon";
import SunIcon from "../assets/icons/SunIcon";
import { NavLink, useLocation } from "react-router-dom";

export function Header() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navItems = [
    { icon: House, label: "Home", to: "/" },
    { icon: FolderKanban, label: "Projects", to: "/projects" },
    { icon: Mail, label: "Contact", to: "/contact" },
  ];

  type NavItemProps = {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    to: string;
    onClick?: () => void;
  };

  function NavItem({ icon: Icon, label, to, onClick }: NavItemProps) {
    return (
      <li className="w-full md:w-auto">
        <NavLink
          to={to}
          onClick={onClick}
          className={({ isActive }) => `
            w-full md:w-auto text-sm flex items-center gap-2 font-incognito font-semibold 
            transition-all duration-200 px-4 py-3 md:py-2 rounded-lg
            ${
              isActive
                ? "text-green-500 bg-green-50 dark:bg-green-950/30 scale-105"
                : "text-zinc-600 dark:text-zinc-400 hover:text-green-500 dark:hover:text-green-400 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
            }
            hover:scale-105 active:scale-95
          `}
        >
          <Icon className="w-5 h-5 transition-colors stroke-current" />
          <span>{label}</span>
        </NavLink>
      </li>
    );
  }

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark/80 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        
        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors z-50 relative"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="relative w-6 h-6">
            <div className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'}`}>
              <Menu size={24} />
            </div>
            <div className={`absolute inset-0 transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'}`}>
              <X size={24} />
            </div>
          </div>
        </button>

        {/* Logo */}
        <NavLink
          to="/"
          className="font-incognito text-xl font-bold text-zinc-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors z-50"
        >
          <span className="hidden md:block">Ralph Vincent</span>
          <span className="md:hidden">RV</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center" aria-label="Main navigation">
          <ul className="flex items-center gap-2">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                icon={item.icon}
                label={item.label}
                to={item.to}
              />
            ))}
          </ul>
        </nav>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 
            hover:bg-zinc-200 dark:hover:bg-zinc-700
            transition-all duration-200 z-50 hover:scale-105 active:scale-95"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
        >
          <div className="relative w-5 h-5">
            <div className={`absolute inset-0 transition-all duration-300 ${theme === "light" ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`}>
              <MoonIcon />
            </div>
            <div className={`absolute inset-0 transition-all duration-300 ${theme === "dark" ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`}>
              <SunIcon />
            </div>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Navigation Menu */}
      <nav
        className={`
          fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-white dark:bg-zinc-900 
          shadow-xl z-40 md:hidden transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        aria-label="Mobile navigation"
      >
        <div className="pt-20 pb-6 px-6">
          <div className="mb-8">
            <h2 className="font-incognito text-lg font-bold text-zinc-900 dark:text-white">
              Navigation
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Explore my portfolio
            </p>
          </div>
          
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                icon={item.icon}
                label={item.label}
                to={item.to}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </ul>

          {/* Social links in mobile menu */}
          <div className="mt-12 pt-6 border-t border-zinc-200 dark:border-zinc-700">
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-4">
              Connect with me
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://github.com/Rappykyun"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                GitHub
              </a>
              <span className="text-zinc-300 dark:text-zinc-600">•</span>
              <a
                href="https://www.linkedin.com/in/ralph-vincent-rodriguez-205a6b241/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                LinkedIn
              </a>
              <span className="text-zinc-300 dark:text-zinc-600">•</span>
              <a
                href="mailto:ralphvincentrodriguez@sksu.edu.ph"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
