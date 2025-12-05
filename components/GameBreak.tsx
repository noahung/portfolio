
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Point = { x: number; y: number };
type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

const GRID_COUNT = 20;
const LOGICAL_SIZE = 400;
const CELL_SIZE = LOGICAL_SIZE / GRID_COUNT;
const INITIAL_SPEED = 150;

const GameBreak: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  
  // Game State refs (for avoiding closure staleness in interval)
  const snakeRef = useRef<Point[]>([{ x: 10, y: 10 }]);
  const foodRef = useRef<Point>({ x: 15, y: 5 });
  const directionRef = useRef<Direction>('UP');
  const nextDirectionRef = useRef<Direction>('UP');
  const gameLoopRef = useRef<number | null>(null);

  // --- Game Logic ---

  const spawnFood = () => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_COUNT),
      y: Math.floor(Math.random() * GRID_COUNT),
    };
    // Prevent spawning on snake
    const onSnake = snakeRef.current.some(s => s.x === newFood.x && s.y === newFood.y);
    if (onSnake) return spawnFood();
    foodRef.current = newFood;
  };

  const resetGame = () => {
    snakeRef.current = [{ x: 10, y: 10 }];
    directionRef.current = 'UP';
    nextDirectionRef.current = 'UP';
    setScore(0);
    setIsGameOver(false);
    setIsPlaying(true);
    spawnFood();
  };

  const gameOverSequence = () => {
    if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    setIsPlaying(false);
    setIsGameOver(true);
    if (score > highScore) setHighScore(score);
  };

  const gameTick = useCallback(() => {
    const head = { ...snakeRef.current[0] };
    directionRef.current = nextDirectionRef.current; // Apply buffered direction

    switch (directionRef.current) {
      case 'UP': head.y -= 1; break;
      case 'DOWN': head.y += 1; break;
      case 'LEFT': head.x -= 1; break;
      case 'RIGHT': head.x += 1; break;
    }

    // Wall Collision Check
    if (head.x < 0 || head.x >= GRID_COUNT || head.y < 0 || head.y >= GRID_COUNT) {
      gameOverSequence();
      return;
    }

    // Self Collision Check
    if (snakeRef.current.some(s => s.x === head.x && s.y === head.y)) {
      gameOverSequence();
      return;
    }

    const newSnake = [head, ...snakeRef.current];

    // Food Check
    if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
      setScore(s => s + 10);
      spawnFood();
      // Don't pop tail -> snake grows
    } else {
      newSnake.pop(); // Move forward
    }

    snakeRef.current = newSnake;
    draw();
  }, [score, highScore]); // Dependencies aren't strictly needed for refs, but good for linter

  // --- Rendering ---

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear
    ctx.fillStyle = '#18181b'; // Zinc 900
    ctx.fillRect(0, 0, LOGICAL_SIZE, LOGICAL_SIZE);

    // Grid Lines (Subtle)
    ctx.strokeStyle = '#27272a'; // Zinc 800
    ctx.lineWidth = 1;
    for (let i = 0; i <= GRID_COUNT; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL_SIZE, 0);
      ctx.lineTo(i * CELL_SIZE, LOGICAL_SIZE);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * CELL_SIZE);
      ctx.lineTo(LOGICAL_SIZE, i * CELL_SIZE);
      ctx.stroke();
    }

    // Draw Food
    ctx.fillStyle = '#ef4444'; // Red 500
    ctx.shadowColor = '#ef4444';
    ctx.shadowBlur = 15;
    const f = foodRef.current;
    ctx.beginPath();
    ctx.roundRect(f.x * CELL_SIZE + 2, f.y * CELL_SIZE + 2, CELL_SIZE - 4, CELL_SIZE - 4, 4);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Draw Snake
    ctx.fillStyle = '#3b82f6'; // Blue 500
    ctx.shadowColor = '#3b82f6';
    ctx.shadowBlur = 10;
    
    snakeRef.current.forEach((segment, index) => {
      const isHead = index === 0;
      ctx.fillStyle = isHead ? '#60a5fa' : '#3b82f6'; // Lighter head
      ctx.beginPath();
      ctx.roundRect(
        segment.x * CELL_SIZE + 1, 
        segment.y * CELL_SIZE + 1, 
        CELL_SIZE - 2, 
        CELL_SIZE - 2, 
        2
      );
      ctx.fill();
    });
    ctx.shadowBlur = 0;
  };

  // --- Input Handling ---

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying) return;
      
      const keyMap: { [key: string]: Direction } = {
        'ArrowUp': 'UP',
        'ArrowDown': 'DOWN',
        'ArrowLeft': 'LEFT',
        'ArrowRight': 'RIGHT',
        'w': 'UP',
        's': 'DOWN',
        'a': 'LEFT',
        'd': 'RIGHT',
      };

      const newDir = keyMap[e.key];
      if (!newDir) return;

      e.preventDefault(); // Stop scrolling while playing

      // Prevent 180 degree turns
      const current = directionRef.current;
      if (newDir === 'UP' && current === 'DOWN') return;
      if (newDir === 'DOWN' && current === 'UP') return;
      if (newDir === 'LEFT' && current === 'RIGHT') return;
      if (newDir === 'RIGHT' && current === 'LEFT') return;

      nextDirectionRef.current = newDir;
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPlaying]);

  // --- Loop Management ---

  useEffect(() => {
    if (isPlaying) {
      gameLoopRef.current = window.setInterval(gameTick, INITIAL_SPEED);
    } else {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    }
    return () => {
      if (gameLoopRef.current) clearInterval(gameLoopRef.current);
    };
  }, [isPlaying, gameTick]);

  // Initial Draw
  useEffect(() => {
    draw();
  }, []);

  // Mobile Controls
  const handleMobileControl = (dir: Direction) => {
    if (!isPlaying) return;
    const current = directionRef.current;
    if (dir === 'UP' && current === 'DOWN') return;
    if (dir === 'DOWN' && current === 'UP') return;
    if (dir === 'LEFT' && current === 'RIGHT') return;
    if (dir === 'RIGHT' && current === 'LEFT') return;
    nextDirectionRef.current = dir;
  };

  return (
    <section className="py-32 bg-black border-t border-zinc-900 relative overflow-hidden">
       {/* Deco background */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 via-black to-black pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
              <span className="inline-block py-1 px-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs font-mono tracking-widest uppercase mb-4">
                System Cooldown
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Take a break.
              </h2>
              <p className="text-zinc-500 max-w-md mx-auto">
                Sorry to make you scroll a lot. Rest your eyes and chase some pixels before moving on.
              </p>
           </motion.div>
        </div>

        <div className="max-w-[400px] mx-auto">
          
          {/* Game HUD */}
          <div className="flex justify-between items-center mb-4 px-2 font-mono text-sm">
            <div className="text-zinc-400">SCORE: <span className="text-white">{score}</span></div>
            <div className="text-zinc-400">HIGH: <span className="text-blue-400">{highScore}</span></div>
          </div>

          {/* Canvas Container */}
          <div className="relative rounded-lg border border-zinc-800 shadow-2xl shadow-blue-900/20 overflow-hidden bg-zinc-900">
            <canvas 
              ref={canvasRef}
              width={LOGICAL_SIZE}
              height={LOGICAL_SIZE}
              className="w-full h-auto block"
            />

            {/* Overlays */}
            <AnimatePresence>
              {!isPlaying && !isGameOver && (
                 <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="absolute inset-0 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6"
                 >
                    <div className="w-16 h-16 mb-4 text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Ready Player One?</h3>
                    <p className="text-zinc-500 text-sm mb-6">Use arrow keys or buttons to eat the red pixels.</p>
                    <button 
                      onClick={resetGame}
                      className="bg-white text-black px-6 py-2 font-bold text-sm uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-colors"
                    >
                      Start Game
                    </button>
                 </motion.div>
              )}

              {isGameOver && (
                 <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   exit={{ opacity: 0 }}
                   className="absolute inset-0 bg-red-900/20 backdrop-blur-md flex flex-col items-center justify-center text-center p-6"
                 >
                    <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">GAME OVER</h3>
                    <p className="text-zinc-300 text-sm mb-6 font-mono">FINAL SCORE: {score}</p>
                    <button 
                      onClick={resetGame}
                      className="bg-red-600 text-white px-6 py-2 font-bold text-sm uppercase tracking-widest hover:bg-red-500 transition-colors border border-red-500"
                    >
                      Try Again
                    </button>
                 </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Controls */}
          <div className="grid grid-cols-3 gap-2 mt-6 max-w-[200px] mx-auto md:hidden">
             <div />
             <button 
                className="aspect-square bg-zinc-800 rounded flex items-center justify-center active:bg-blue-600 active:text-white text-zinc-400 transition-colors"
                onPointerDown={(e) => { e.preventDefault(); handleMobileControl('UP'); }}
             >
                ▲
             </button>
             <div />
             <button 
                className="aspect-square bg-zinc-800 rounded flex items-center justify-center active:bg-blue-600 active:text-white text-zinc-400 transition-colors"
                onPointerDown={(e) => { e.preventDefault(); handleMobileControl('LEFT'); }}
             >
                ◀
             </button>
             <button 
                className="aspect-square bg-zinc-800 rounded flex items-center justify-center active:bg-blue-600 active:text-white text-zinc-400 transition-colors"
                onPointerDown={(e) => { e.preventDefault(); handleMobileControl('DOWN'); }}
             >
                ▼
             </button>
             <button 
                className="aspect-square bg-zinc-800 rounded flex items-center justify-center active:bg-blue-600 active:text-white text-zinc-400 transition-colors"
                onPointerDown={(e) => { e.preventDefault(); handleMobileControl('RIGHT'); }}
             >
                ▶
             </button>
          </div>

          <p className="text-center text-zinc-600 text-xs mt-6 hidden md:block font-mono">
             [ARROW KEYS TO MOVE]
          </p>

        </div>
      </div>
    </section>
  );
};

export default GameBreak;
