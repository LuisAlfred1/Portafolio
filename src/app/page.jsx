"use client";
import Titulo from "./components/Titulo";
import SeccionTecnologia from "./components/SeccionTecnologia";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
// app/page.jsx

export default function HomePage() {
  return (
    <>
      <Titulo />
      <SobreMi />
      <SeccionTecnologia />
      <Proyectos />
      <ContactForm />
      <Footer />
    </>
  );
}
