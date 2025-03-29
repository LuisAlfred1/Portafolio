"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Barra de progreso superior */}
      <div
        className="fixed top-0 left-0 h-1 bg-emerald-600 z-[999]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navbar */}
      <header className="backdrop-blur-lg bg-black text-white shadow-sm sticky top-0 z-50 transition duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link
              href="/"
              className="text-2xl text-emerald-600 font-extrabold  bg-clip-text flex items-center gap-2"
            >
              <img src="/images/LuisBlack.png" alt="" className="h-10" />
            </Link>

            {/* Navegación escritorio */}
            <nav className="hidden md:flex space-x-10 items-center">
              <Link
                href="/"
                className="relative group  font-medium transition duration-300"
              >
                Inicio <i className="bi bi-house"></i>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0a7d5f] group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link
                href="/proyectos"
                className="relative group  font-medium transition duration-300"
              >
                Proyectos <i className="bi bi-folder2"></i>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0a7d5f] group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link
                href="/contact"
                className="relative group  font-medium transition duration-300"
              >
                Contacto <i className="bi bi-whatsapp"></i>
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#0a7d5f] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            {/* Botón menú móvil */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white cursor-pointer focus:outline-none transition duration-300"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md border-t">
            <div className="px-4 py-3 space-y-2">
              {["Inicio", "Sobre mí", "Proyectos", "Contacto"].map(
                (text, index) => (
                  <Link
                    key={index}
                    href={
                      text === "Inicio"
                        ? "/"
                        : `/${text.toLowerCase().replace(" ", "")}`
                    }
                    onClick={toggleMenu}
                    className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 transition duration-300"
                  >
                    {text}
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
