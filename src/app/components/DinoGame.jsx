import { useEffect, useRef, useState, useCallback } from "react";

export default function DinoGame() {
  const canvasRef = useRef(null);
  const gameStateRef = useRef({
    isJumping: false,
    position: 0,
    obstacles: [],
    gameSpeed: 2,
    score: 0,
    gameRunning: true,
    keys: new Set(),
  });

  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [highScore, setHighScore] = useState(() => {
    if (typeof window !== "undefined") {
      return parseInt(localStorage.getItem("dinoHighScore") || "0");
    }
    return 0;
  });

  // Generar obstáculo aleatorio
  const generateObstacle = useCallback((canvasWidth) => {
    const types = ["cactus", "bird"];
    const type = types[Math.floor(Math.random() * types.length)];

    return {
      x: canvasWidth + Math.random() * 200 + 100,
      type,
      width: type === "cactus" ? 12 : 20,
      height: type === "cactus" ? 25 : 15,
      y: type === "cactus" ? 0 : Math.random() > 0.5 ? -20 : 0,
    };
  }, []);

  // Función de salto mejorada
  const jump = useCallback(() => {
    const gameState = gameStateRef.current;
    if (gameState.isJumping || !gameState.gameRunning) return;

    gameState.isJumping = true;
    let jumpHeight = 0;
    let velocity = 8;
    const gravity = 0.4;

    const jumpAnimation = () => {
      velocity -= gravity;
      jumpHeight += velocity;

      if (jumpHeight <= 0) {
        jumpHeight = 0;
        velocity = 0;
        gameState.isJumping = false;
      }

      gameState.position = jumpHeight;

      if (gameState.isJumping || jumpHeight > 0) {
        requestAnimationFrame(jumpAnimation);
      }
    };

    jumpAnimation();
  }, []);

  // Función de agacharse
  const duck = useCallback(() => {
    const gameState = gameStateRef.current;
    if (gameState.isJumping) return;

    gameState.isDucking =
      gameState.keys.has("ArrowDown") || gameState.keys.has("s");
  }, []);

  // Reiniciar juego
  const resetGame = useCallback(() => {
    const canvas = canvasRef.current;
    gameStateRef.current = {
      isJumping: false,
      position: 0,
      obstacles: [generateObstacle(canvas.width)],
      gameSpeed: 2,
      score: 0,
      gameRunning: true,
      keys: new Set(),
      isDucking: false,
    };
    setScore(0);
    setGameOver(false);
  }, [generateObstacle]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const dinoYBase = canvas.height - 35;

    // Inicializar obstáculos
    gameStateRef.current.obstacles = [generateObstacle(canvas.width)];

    const draw = () => {
      const gameState = gameStateRef.current;

      if (!gameState.gameRunning) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibujar dinosaurio
      const dinoY = dinoYBase - gameState.position;
      const dinoHeight = gameState.isDucking ? 15 : 25;
      const dinoWidth = gameState.isDucking ? 30 : 20;

      ctx.fillStyle = "#535353";
      ctx.fillRect(
        20,
        dinoY - (gameState.isDucking ? 10 : 0),
        dinoWidth,
        dinoHeight
      );

      // Ojos del dino
      ctx.fillStyle = "white";
      ctx.fillRect(25, dinoY + 2 - (gameState.isDucking ? 10 : 0), 3, 3);

      // Actualizar y dibujar obstáculos
      gameState.obstacles.forEach((obstacle, index) => {
        // Dibujar obstáculo
        ctx.fillStyle = obstacle.type === "cactus" ? "#228B22" : "#8B4513";
        const obstacleY = dinoYBase + obstacle.y - obstacle.height;
        ctx.fillRect(obstacle.x, obstacleY, obstacle.width, obstacle.height);

        // Detalles del cactus
        if (obstacle.type === "cactus") {
          ctx.fillStyle = "#32CD32";
          ctx.fillRect(
            obstacle.x + 2,
            obstacleY + 2,
            obstacle.width - 4,
            obstacle.height - 4
          );
        }

        // Mover obstáculo
        obstacle.x -= gameState.gameSpeed;

        // Detectar colisión
        const dinoRect = {
          x: 20,
          y: dinoY - (gameState.isDucking ? 10 : 0),
          width: dinoWidth,
          height: dinoHeight,
        };

        const obstacleRect = {
          x: obstacle.x,
          y: obstacleY,
          width: obstacle.width,
          height: obstacle.height,
        };

        if (
          dinoRect.x < obstacleRect.x + obstacleRect.width &&
          dinoRect.x + dinoRect.width > obstacleRect.x &&
          dinoRect.y < obstacleRect.y + obstacleRect.height &&
          dinoRect.y + dinoRect.height > obstacleRect.y
        ) {
          gameState.gameRunning = false;
          setGameOver(true);

          // Actualizar high score
          if (gameState.score > highScore) {
            setHighScore(gameState.score);
            if (typeof window !== "undefined") {
              localStorage.setItem("dinoHighScore", gameState.score.toString());
            }
          }
          return;
        }

        // Incrementar puntuación al pasar obstáculo
        if (obstacle.x + obstacle.width < 20 && !obstacle.passed) {
          obstacle.passed = true;
          gameState.score += 10;
          setScore(gameState.score);
        }

        // Remover obstáculos fuera de pantalla
        if (obstacle.x < -obstacle.width) {
          gameState.obstacles.splice(index, 1);
        }
      });

      // Generar nuevos obstáculos
      const lastObstacle = gameState.obstacles[gameState.obstacles.length - 1];
      if (!lastObstacle || lastObstacle.x < canvas.width - 200) {
        gameState.obstacles.push(generateObstacle(canvas.width));
      }

      // Aumentar velocidad gradualmente
      gameState.gameSpeed = Math.min(2 + gameState.score * 0.01, 6);

      // Dibujar puntuación
      ctx.fillStyle = "white";
      ctx.font = "20px monospace";
      ctx.fillText(`Score: ${gameState.score}`, canvas.width - 150, 30);
      ctx.fillText(`High: ${highScore}`, canvas.width - 150, 55);

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => cancelAnimationFrame(animationFrameId);
  }, [generateObstacle, highScore]);

  // Manejo de teclas
  useEffect(() => {
    const handleKeyDown = (e) => {
      // 👇 Evitar controlar teclas si estás escribiendo en un input/textarea
      const tag = document.activeElement.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      const gameState = gameStateRef.current;
      gameState.keys.add(e.key);

      if (gameOver && (e.key === " " || e.key === "Enter")) {
        resetGame();
        return;
      }

      if (e.key === " " || e.key === "ArrowUp") {
        e.preventDefault();
        jump();
      }

      duck();
    };

    const handleKeyUp = (e) => {
      const gameState = gameStateRef.current;
      gameState.keys.delete(e.key);
      duck();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [jump, duck, gameOver, resetGame]);

  return (
    <div className="relative flex flex-col items-center space-y-4">
      <canvas ref={canvasRef} width={1000} height={200} />
      <div>
        {gameOver && (
          <div className="text-gray-300 absolute inset-0 bg-black/20 rounded-2xl items-center justify-center flex flex-col gap-2 font-mono">
            Game Over!{" "}
            <div>
              Presiona{" "}
              <span className="inline-block bg-black/80 text-white px-4 py-1 rounded font-mono text-sm">
                space
              </span>{" "}
              para seguir jugando
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
