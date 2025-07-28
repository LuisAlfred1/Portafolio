import { Typewriter } from "react-simple-typewriter";

export default function Titulo() {
  return (
    <div className="flex flex-col gap-4 text-white ml-10">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
        Luis Reyes
      </h1>
      <span className="text-green-300 text-lg md:text-xl font-mono">
        <Typewriter
          words={["> Desarrollador Web"]}
          loop={1}
          cursor
          cursorStyle="_"
          typeSpeed={40}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </div>
  );
}
