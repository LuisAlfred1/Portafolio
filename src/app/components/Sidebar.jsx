export default function Sidebar() {
  return (
    <aside className="hidden md:block bg-[#171717] text-white w-64 h-full fixed border-r-2 border-[#262626]">
      {/* En tu Layout o componente principal */}
      <ul className="flex flex-col gap-4 mt-20 text-center">
        <div className="relative">
          <img
            src="https://png.pngtree.com/png-vector/20250519/ourlarge/pngtree-happy-man-png-sticker-png-image_16332737.png"
            alt="persona"
          />
          <div className="absolute inset-0 flex justify-center ">
            <p className="text-lg font-bold text-orange-400">Imagen no real</p>
          </div>
        </div>
        <div className="flex gap-4 justify-center text-xl text-white">
          <a
            href="https://github.com/LuisAlfred1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-green-400 transform hover:-translate-y-1 transition duration-300"
          >
            <i className="bi bi-github"></i>
          </a>

          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-green-400 transform hover:-translate-y-1 transition duration-300"
          >
            <i className="bi bi-linkedin"></i>
          </a>

          <a
            href="https://instagram.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-green-400 transform hover:-translate-y-1 transition duration-300"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
        <li className="mt-1">
          <button className="px-8 py-2 rounded-lg hover:bg-white/10 transition cursor-pointer">
            <div className="flex gap-3">
              <i className="bi bi-file-earmark-text"></i>
              Descargar CV
            </div>
          </button>
        </li>
      </ul>
    </aside>
  );
}
