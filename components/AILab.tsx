import React, { useState } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";
import { motion } from 'framer-motion';

// --- Icons (Inline replacement for lucide-react) ---
const TerminalIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
);

// --- Helpers ---

// Decode Base64 to Uint8Array
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// Decode Raw PCM Data (System Instruction method)
async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

// AI Logic
const generateTechPlan = async (userIdea: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are Noah Aung, a senior full-stack developer. A potential client has this project idea: "${userIdea}". 
              Generate a technical response in a JSON-like format (but human readable text) suggesting:
              1. Recommended Tech Stack (Focus on React, Node, PostgreSQL, Firebase).
              2. Key Database Models.
              3. A 3-phase development roadmap.
              Keep it technical, concise, and "brutalist" in style to match my portfolio. Do not use markdown bolding, just plain text or caps.`,
    });
    return response.text || "Error generating plan.";
  } catch (e) {
    console.error(e);
    return "System Error: Unable to connect to Neural Backend.";
  }
};

const generateSpeech = async (text: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: "Fenrir" }
          }
        }
      }
    });
    // Return the raw inline data
    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || null;
  } catch (e) {
    console.error(e);
    return null;
  }
};

// --- Components ---

const AIArchitect = () => {
  const [idea, setIdea] = useState('');
  const [plan, setPlan] = useState('');
  const [loading, setLoading] = useState(false);

  const handleArchitect = async () => {
    if (!idea) return;
    setLoading(true);
    setPlan('');
    const result = await generateTechPlan(idea);
    setPlan(result);
    setLoading(false);
  };

  return (
    <div className="border border-zinc-800 rounded bg-[#050505] p-6 mb-12 font-mono max-w-3xl mx-auto shadow-2xl shadow-black/50">
      <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-4">
         <div className="w-3 h-3 rounded-full bg-red-500"></div>
         <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
         <div className="w-3 h-3 rounded-full bg-green-500"></div>
         <span className="ml-2 text-xs text-zinc-500 flex items-center gap-1">
            <TerminalIcon className="w-3 h-3" />
            AI_Architect.exe
         </span>
      </div>
      
      <div className="mb-4">
        <p className="text-zinc-400 mb-2 text-sm">
          {`> Describe a project idea below, and I will generate a technical stack and roadmap.`}
        </p>
        <div className="flex gap-2 flex-col sm:flex-row">
          <input 
            type="text" 
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="e.g. An Uber for dog walkers"
            className="flex-grow bg-black border border-zinc-700 rounded px-4 py-3 text-zinc-300 focus:border-blue-500 focus:outline-none text-sm"
            onKeyDown={(e) => e.key === 'Enter' && handleArchitect()}
          />
          <button 
            onClick={handleArchitect}
            disabled={loading}
            className="bg-blue-900/20 text-blue-400 border border-blue-500/50 px-6 py-2 rounded hover:bg-blue-900/40 transition-colors text-sm disabled:opacity-50 whitespace-nowrap"
          >
            {loading ? "Computing..." : "Run Process"}
          </button>
        </div>
      </div>

      {plan && (
        <div className="bg-black p-4 rounded border border-zinc-800 text-xs text-zinc-300 overflow-x-auto leading-relaxed whitespace-pre-wrap animate-in fade-in slide-in-from-bottom-2 duration-500">
          <span className="text-blue-400">{`> Output received:`}</span>
          <br/><br/>
          {plan}
        </div>
      )}
    </div>
  );
};

const AudioBio = ({ textToRead }: { textToRead: string }) => {
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const playAudio = async () => {
    if (playing) return;
    setLoading(true);
    const base64Audio = await generateSpeech(textToRead);
    setLoading(false);

    if (base64Audio) {
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 24000});
        const audioBuffer = await decodeAudioData(
            decode(base64Audio),
            audioCtx,
            24000,
            1
        );
        
        const source = audioCtx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioCtx.destination);
        source.start(0);
        setPlaying(true);
        source.onended = () => setPlaying(false);
      } catch (e) {
        console.error("Audio playback error", e);
        setPlaying(false);
      }
    }
  };

  return (
    <button 
      onClick={playAudio}
      disabled={loading || playing}
      className="text-xs font-mono text-blue-400 border border-blue-400/30 px-3 py-1.5 rounded hover:bg-blue-400/10 disabled:opacity-50 flex items-center gap-2 transition-all"
    >
        {loading ? (
            <span className="animate-pulse">Initializing...</span>
        ) : playing ? (
            <span className="animate-pulse">Transmitting...</span>
        ) : (
            <>
                <span>🔊</span>
                <span>Listen to Bio Protocol</span>
            </>
        )}
    </button>
  );
};

const AILab: React.FC = () => {
  return (
    <section id="ai-lab" className="py-32 bg-[#050505] border-t border-zinc-900 relative overflow-hidden">
      {/* Background Tech decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
         <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#fff_10px,#fff_11px)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
                <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-4xl font-bold text-white">AI Lab</h2>
                    <span className="px-2 py-0.5 rounded bg-blue-900/30 text-blue-400 text-xs border border-blue-800 font-mono uppercase">Beta</span>
                </div>
                <p className="text-zinc-500 max-w-lg">
                    Experimental neural interfaces and automated architecture planning.
                </p>
            </div>
            
            <AudioBio textToRead="I am Noah Aung. A full stack developer focused on clean code, scalable architecture, and user-centric design. Welcome to my portfolio." />
        </div>

        <AIArchitect />
        
        <div className="text-center">
            <p className="text-zinc-600 text-xs font-mono">
                POWERED BY GOOGLE GEMINI 2.5 FLASH & TTS
            </p>
        </div>
      </div>
    </section>
  );
};

export default AILab;