import { color } from "framer-motion";

export default function SeccionTecnologia() {
  const tecnologias = [
    {
      nombre: "HTML",
      color: "bg-white/10",
      imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      nombre: "CSS",
      color: "bg-white/10",
      imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      nombre: "Tailwind",
      color: "bg-white/10",
      imagen: "/tailwind.png",
    },
    {
      nombre: "Bootstrap",
      color: "bg-white/10",
      imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    {
      nombre: "JavaScript",
      color: "bg-white/10",
      imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      nombre: "TypeScript",
      color: "bg-white/10",
      imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      nombre: "C#",
      color: "bg-white/10",
      imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    },
    {
      nombre: "C++",
      color: "bg-white/10",
      imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      nombre: ".NET",
      color: "bg-white/10",
      imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/800px-Microsoft_.NET_logo.svg.png",
    },
    {
      nombre: "Next.js",
      color: "bg-white/10",
      imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      nombre: "Sql Server",
      color: "bg-white/10",
      imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    },
    {
      nombre: "MySQL",
      color: "bg-white/10",
      imagen: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    }
  ];

  return (
    <section className="text-white p-10 mt-6">
      <h2 className="text-2xl font-bold mb-6">Tecnologías</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {tecnologias.map((tec, index) => (
          <div
            key={index}
            className={`rounded-2xl p-4 flex flex-col items-center justify-center shadow-lg border-2 border-black/5 hover:border-green-400 transition duration-100 ${tec.color}`}
          >
            <img src={tec.imagen} alt={tec.nombre} className="w-16 h-16 mb-4" />
            <p className="text-xl font-semibold">{tec.nombre}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
