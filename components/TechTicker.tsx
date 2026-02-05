'use client';
import { motion } from "framer-motion";

const techs = [
  "Next.js 15", "React", "Angular", "TypeScript", "Tailwind CSS", 
  "Node.js", "PostgreSQL", "Azure", "Cypress", "Playwright", 
  "Framer Motion", "Cloudflare", "Vercel", "SQL", "REST API"
];

export default function TechTicker() {
  return (
    <div className="w-full bg-slate-900/50 border-y border-white/5 py-6 overflow-hidden relative flex">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 pointer-events-none" />
      
      <motion.div 
        className="flex whitespace-nowrap gap-16"
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <span key={i} className="text-slate-500 font-mono text-sm uppercase tracking-widest font-semibold">
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}