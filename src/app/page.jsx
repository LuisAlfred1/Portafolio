"use client";

// app/page.jsx
import Link from "next/link";
import Image from "next/image";
import ProjectCard from "./components/ProjectCard";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
  // Inicializa AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({
      duration: 800, // Duración de la animación
      //once: true, // Para que solo ocurra una vez
      easing: "ease-in-out", // Efecto de animación
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#064e3b] to-[#065f46] text-white py-25">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">
                Es un gusto saludarte, mi nombre es{" "}
                <span className=" via-white bg-clip-text font-bold text-shadow-lg drop-shadow-md tracking-wide">
                  Luis Reyes
                </span>
              </h1>
              <h2 className="text-2xl mb-6">
                <Typewriter
                  words={["> Programador Junior"]}
                  loop={1} // Solo escribe una vez
                  cursor
                  cursorStyle="_"
                  typeSpeed={50} // Velocidad de escritura
                  //deleteSpeed={false} // Velocidad al borrar (si quisieras efecto de borrado)
                />
              </h2>
              <p className="text-lg mb-8 text-justify">
                Soy un estudiante apasionado por el aprendizaje y el desarrollo
                web. He trabajado en proyectos personales y universitarios
                creando aplicaciones modernas y funcionales con frameworks de
                <span className="text-white shadow-lg font-semibold">
                  {" "}
                  React, Flask, Next.js y ASP.NET
                </span>{" "}
              </p>

              <div className="flex space-x-4">
                <Link
                  href="/"
                  className="bg-white text-[#064e3b] px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
                >
                  Imprimir CV <i className="bi bi-file-person"></i>
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
              <div className="relative w-90 h-90 rounded-full overflow-hidden border-4 border-white">
                {/* Reemplaza con tu imagen */}
                <Image
                  src="https://res.cloudinary.com/dmgdrxfar/image/upload/v1743191050/ChatGPT_Image_28_mar_2025_12_43_26_g9ge2m.png"
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

      <section className="py-20 bg-gray-100">
        <div
          className="max-w-6xl mx-auto px-6 lg:px-8 text-black"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-black drop-shadow-md">
            Mis habilidades
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {/* Skill item */}
            {[
              {
                name: "HTML & CSS",
                img: "https://res.cloudinary.com/dmgdrxfar/image/upload/v1743371091/html-5_whzser.png",
              },
              {
                name: "Python",
                img: "https://res.cloudinary.com/dmgdrxfar/image/upload/v1743371313/python_egcxhy.png",
              },
              {
                name: "JavaScript",
                img: "https://res.cloudinary.com/dmgdrxfar/image/upload/v1743371239/js_sqjcw3.png",
              },
              {
                name: "C#",
                img: "https://res.cloudinary.com/dmgdrxfar/image/upload/v1743370917/c-sharp_oabc63.png",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center transition-transform transform hover:scale-105"
              >
                <div className="w-34 h-34 flex items-center justify-center mb-4 p-4 cursor-pointer">
                  <img
                    src={skill.img}
                    alt={skill.name}
                    className="w-30 h-24 object-contain"
                  />
                </div>
                <h3 className="font-semibold text-2xl text-black">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proyectos destacados</h2>
            <p className="text-lg text-white max-w-3xl mx-auto">
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
              className="bg-[#064e3b]  text-white px-6 py-3 rounded-md font-medium hover:bg-[#065f46] transition"
            >
              Ver todos los proyectos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
