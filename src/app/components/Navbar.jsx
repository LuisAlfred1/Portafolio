"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-10 px-80 py-4 text-white flex justify-end items-center transition-all duration-300 ${
        scrolled ? "bg-black/10 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <ul className="flex gap-4">
        <li>
          <a href="./components/SobreMi" className="hover:text-green-300 transition">
            Sobre mí
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-green-300 transition">
            Tecnologías
          </a>
        </li>
        <li>
          <a href="/projects" className="hover:text-green-300 transition">
            Proyectos
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-green-300 transition">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
