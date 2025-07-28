"use client";
import Titulo from "./components/Titulo";
import SeccionTecnlogia from "./components/SeccionTecnologia";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
// app/page.jsx

export default function HomePage() {
  return (
    <>
      <Titulo />
      <SobreMi />
      <SeccionTecnlogia />
      <Proyectos />
    </>
  );
}
