// app/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Luis Reyes. Todos los derechos
            reservados.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/tuusuario"
              className="text-black hover:text-[#064e3b] duration-300"
            >
              <i className="bi bi-github text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com/in/tuusuario"
              className="text-black hover:text-[#064e3b] duration-300"
            >
              <i className="bi bi-linkedin text-2xl"></i>
            </a>
            <a
              href="https://instagram.com/tuusuario"
              className="text-black hover:text-[#064e3b] duration-300"
            >
              <i className="bi bi-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
