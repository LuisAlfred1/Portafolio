import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function SobreMi() {
  const codeString = `function sobreMi() {
  return (
    "¡Hola! Soy un desarrollador apasionado por la tecnología, siempre buscando crear soluciones creativas.
    Me encanta trabajar con herramientas modernas como React, Next.js, Tailwind y .NET.
    También disfruto aprender constantemente y colaborar en proyectos que tengan impacto."
  );
}`;

  return (
    <section className=" text-white p-10 rounded-xl">
      <h2 className="text-2xl font-bold mb-6">Sobre mí</h2>

      <div className="bg-[#171717] rounded-md shadow-lg overflow-hidden">
        {/* Barra estilo ventana de código */}
        <div className="bg-gray-800 px-4 py-2 items-center  flex justify-between">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <div className="text-sm py-1 text-gray-400">portafolio.js</div>
        </div>

        {/* Código con resaltado */}
        <div className="flex py-7">
          <div className="text-right pr-4 select-none text-gray-500 ml-2">
            {Array.from({ length: codeString.split("\n").length }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <SyntaxHighlighter
            language="javascript"
            style={vscDarkPlus}
            customStyle={{
              backgroundColor: "transparent",
              margin: 0,
              padding: "0",
            }}
            codeTagProps={{
              style: {
                fontSize: "0.95rem", // ✅ Esto sí afecta el tamaño del texto real
                lineHeight: "1.5", // Puedes ajustar esto también si hace falta
              },
            }}
          >
            {codeString}
          </SyntaxHighlighter>
        </div>
      </div>
    </section>
  );
}
