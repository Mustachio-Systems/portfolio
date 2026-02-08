'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image"; // 👈 Added this import
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-slate-950/50 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Brand - UPDATED WITH LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all">
                <Image 
                    src="/icon.png" 
                    alt="Mustachio Systems" 
                    width={32} 
                    height={32} 
                    className="object-cover"
                />
            </div>
            <span className="font-bold tracking-tight text-white hidden sm:block">
                MUSTACHIO <span className="text-slate-500">SYSTEMS</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href="/expertise" className="hover:text-white transition-colors cursor-pointer">
              Expertise
            </Link>
            <Link href="/work" className="hover:text-white transition-colors cursor-pointer">
              Selected Work
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors cursor-pointer">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
             <Link 
              href="/contact" 
              className="px-5 py-2 text-xs font-bold bg-white text-slate-950 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950 pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-lg font-medium text-slate-400">
              
              <Link 
                href="/expertise" 
                className="block border-b border-white/5 pb-4 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Expertise
              </Link>

              <Link 
                href="/work" 
                className="block border-b border-white/5 pb-4 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Selected Work
              </Link>

              <Link 
                href="/contact" 
                className="block py-4 text-center font-bold bg-indigo-600 text-white rounded-xl mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}