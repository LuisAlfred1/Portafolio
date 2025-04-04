// app/contact/page.jsx
"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import ContactForm from ".././components/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contáctame</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estoy en busca de oportunidades laborales como programador. Si
            tienes alguna vacante, deseas conocer más sobre mis proyectos o
            simplemente ponerte en contacto, puedes usar el formulario y me
            comunicaré contigo lo antes posible.
            <i className="bi bi-emoji-laughing"></i>
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
