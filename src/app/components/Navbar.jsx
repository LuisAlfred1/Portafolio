export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-transparent text-white flex justify-end items-center px-80 py-6 z-10">
      <ul className="flex gap-4">
        <li>
          <a href="/blog" className=" hover:text-green-300 transition">
            Sobre mí
          </a>
        </li>
        <li>
          <a href="/about" className=" hover:text-green-300 transition">
            Tecnologías
          </a>
        </li>
        <li>
          <a href="/projects" className=" hover:text-green-300 transition">
            Proyectos
          </a>
        </li>
        <li>
          <a href="/contact" className=" hover:text-green-300 transition">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
