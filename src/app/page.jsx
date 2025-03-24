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
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">
                Un gusto saludarte, mi nombre es <span className="text-yellow-300">Luis Reyes</span>
              </h1>
              <h2 className="text-2xl mb-6">Soy programador junior</h2>
              <p className="text-lg mb-8">
                Desarrollo soluciones web modernas y eficientes. Especializado
                en React, Next.js y ASP.NET.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/projects"
                  className="bg-white text-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
                >
                  Ver proyectos
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-indigo-600 transition"
                >
                  Contactar
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white">
                {/* Reemplaza con tu imagen */}
                <Image
                  src="/placeholder-profile.jpg"
                  alt="Tu Nombre"
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
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                {/* Icono aquí */}
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="font-medium text-lg">HTML & CSS</h3>
            </div>

            {/* Más skills... */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="font-medium text-lg">React</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-medium text-lg">Next.js</h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🖥️</span>
              </div>
              <h3 className="font-medium text-lg">ASP.NET</h3>
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
              className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition"
            >
              Ver todos los proyectos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
