// app/page.jsx
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";

export default function HomePage() {
  // Datos de ejemplo para proyectos
  const featuredProjects = [
    {
      id: 1,
      title: "E-commerce moderno",
      description: "Tienda online desarrollada con Next.js, Stripe y MongoDB",
      image: "/projects/ecommerce-thumbnail.jpg",
      tags: ["Next.js", "MongoDB", "Stripe"],
      link: "/projects/ecommerce",
    },
    {
      id: 2,
      title: "Aplicación de gestión",
      description: "Dashboard interactivo con gráficos y analytics",
      image: "/projects/dashboard-thumbnail.jpg",
      tags: ["React", "Chart.js", "Firebase"],
      link: "/projects/dashboard",
    },
    {
      id: 3,
      title: "Blog personal",
      description: "Blog con CMS personalizado y comentarios",
      image: "/projects/blog-thumbnail.jpg",
      tags: ["Next.js", "Sanity", "Tailwind"],
      link: "/projects/blog",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#064e3b] to-[#065f46] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">
                Un gusto saludarte, mi nombre es{" "}
                <span className=" via-white bg-clip-text font-bold text-shadow-lg drop-shadow-md hover:drop-shadow-xl transition duration-500 ease-in-out tracking-wide">
                  Luis Reyes
                </span>
              </h1>
              <h2 className="text-2xl mb-6">Programador Junior</h2>
              <p className="text-lg mb-8">
                Desarrollo soluciones web modernas y eficientes. Especializado
                en React, Next.js y ASP.NET.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/projects"
                  className="bg-white text-[#064e3b] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
                >
                  Ver proyectos
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-[#064e3b] transition"
                >
                  Contactar
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white">
                {/* Reemplaza con tu imagen */}
                <Image
                  src="https://res.cloudinary.com/dmgdrxfar/image/upload/v1737068480/Image_if0fvg.jpg"
                  alt="LUIS REYES"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mis habilidades
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Skill item */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4 cursor-pointer">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 hover:scale-110 transition-transform duration-300"
                >
                  <title>HTML5</title>
                  <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg">HTML & CSS</h3>
            </div>

            {/* Más skills... */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4 cursor-pointer">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 hover:scale-110 transition-transform duration-300"
                >
                  <title>Python</title>
                  <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg">Python</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4 cursor-pointer">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 hover:scale-110 transition-transform duration-300"
                >
                  <title>JavaScript</title>
                  <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg">JavaScript</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4 cursor-pointer">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 hover:scale-110 transition-transform duration-300"
                >
                  <title>.NET</title>
                  <path d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z" />
                </svg>
              </div>
              <h3 className="font-medium text-lg">ASP.NET MVC</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proyectos destacados</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Una selección de mis trabajos más recientes y relevantes. Cada
              proyecto refleja mi pasión por crear soluciones web modernas y
              funcionales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="bg-gradient-to-r from-[#064e3b] to-[#065f46] text-white px-6 py-3 rounded-md font-medium hover:from-[#065f46] transition"
            >
              Ver todos los proyectos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
