"use client";
import { useState } from "react";

export default function ContactForm() {
  const [estado, setEstado] = useState("Enviar");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setEstado("Enviando...");

    if (!formData.name || !formData.email || !formData.message) {
      setError("Por favor completa todos los campos requeridos.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mzzejwbv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setEstado("Enviar");
      } else {
        setError("Error al enviar el mensaje. Intenta nuevamente.");
      }
    } catch (err) {
      setError("Error al enviar el mensaje. Intenta nuevamente.");
    }
  };

  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-white">Contáctame</h2>

      {submitted ? (
        <div className="text-center">
          <p className="text-green-400 text-lg font-medium mb-4">¡Gracias por tu mensaje!</p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-green-700 text-white px-6 py-2 rounded hover:bg-green-800 transition"
          >
            Enviar otro
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-100 text-red-600 p-4 rounded">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-500 bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-500 bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
              Mensaje <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 border border-gray-500 bg-transparent text-white rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
          >
            {estado}
          </button>
        </form>
      )}
    </div>
  );
}
