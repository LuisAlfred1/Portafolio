import DinoGame from "./DinoGame";

export default function Footer() {
  return (
    <footer className="bg-black/10 rounded-2xl text-white py-6 flex flex-col items-center">
      <DinoGame />
      <div className="text-xs opacity-60">
        Presiona <span className="px-4 py-1 bg-black/40 rounded-md">space</span> para saltar 🦖
      </div>
    </footer>
  );
}
