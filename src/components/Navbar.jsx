import { cn } from "@/lib/utils";
import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Explore", route: "/chatbox" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-500",
        isScrolled 
          ? "py-2 bg-background/70 backdrop-blur-xl shadow-lg border-b border-white/10" 
          : "py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo with enhanced design */}
        <a
          className="group flex items-center space-x-2 text-xl font-bold"
          href="#hero"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-full">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
          </div>
          <span className="relative">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Mehmet Ali's
            </span>
            <span className="ml-2 text-primary font-light">Portfolio</span>
          </span>
        </a>

        {/* Desktop Navigation with enhanced styling */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item, key) =>
            item.route ? (
              <a
                key={key}
                href={item.route}
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
              >
                <span>{item.name}</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ) : (
              <a
                key={key}
                href={item.href}
                className="group relative px-4 py-2 text-foreground/80 hover:text-white transition-all duration-300"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 rounded-lg transition-all duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            )
          )}
        </div>

        {/* Mobile menu button with enhanced design */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden relative p-3 text-foreground z-50 group"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 rounded-lg transition-all duration-300"></div>
          <div className="relative">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </div>
        </button>

        {/* Enhanced Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 z-40 md:hidden",
            "transition-all duration-500 ease-in-out",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-background/95 backdrop-blur-xl"></div>
          
          {/* Menu content */}
          <div className="relative flex flex-col items-center justify-center min-h-screen px-8">
            {/* Mobile logo */}
            <div className="mb-12">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Menu
                </span>
              </div>
            </div>

            {/* Mobile menu items */}
            <div className="flex flex-col space-y-6 text-xl w-full max-w-xs">
              {navItems.map((item, key) =>
                item.route ? (
                  <a
                    key={key}
                    href={item.route}
                    onClick={() => setIsMenuOpen(false)}
                    className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                ) : (
                  <a
                    key={key}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="group relative px-6 py-4 text-foreground/80 hover:text-white transition-all duration-300 rounded-xl text-center"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/20 group-hover:to-blue-500/20 rounded-xl transition-all duration-300"></div>
                  </a>
                )
              )}
            </div>

            {/* Mobile menu footer */}
            <div className="mt-12 text-center">
              <p className="text-sm text-foreground/60">
                Swipe up to close menu
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};