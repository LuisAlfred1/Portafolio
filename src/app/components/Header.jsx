// app/components/Header.jsx
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              Portafolio <i className="bi bi-briefcase"></i>
            </Link>
          </div>
          
          {/* Navegación para escritorio */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-indigo-600 font-medium">
              Inicio
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium">
              Sobre mí
            </Link>
            <Link href="/projects" className="text-gray-700 hover:text-indigo-600 font-medium">
              Proyectos
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600 font-medium">
              Contacto
            </Link>
          </nav>

          {/* Botón de menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href=""
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Inicio
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Sobre mí
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Proyectos
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}