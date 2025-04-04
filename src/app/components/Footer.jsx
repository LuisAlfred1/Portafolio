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
              href="https://github.com/LuisAlfred1"
              target="_blank" //Hace que el enlace se abra en una nueva pestaña.
              rel="noopener noreferrer" //Mejora la seguridad al abrir enlaces externos.
              className="text-black transition transform duration-200 hover:scale-120"
            >
              <i className="bi bi-github text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/luis-reyes-5a9a50246"
              target="_blank" //Hace que el enlace se abra en una nueva pestaña.
              rel="noopener noreferrer"
              className="text-[#0077B5] transtion transform duration-200 hover:scale-120"
            >
              <i className="bi bi-linkedin text-2xl"></i>
            </a>
            <a
              href="https://instagram.com/luis_reyesnk"
              target="_blank" //Hace que el enlace se abra en una nueva pestaña.
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent transition transform duration-200 hover:scale-120"
            >
              <i className="bi bi-instagram text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
