import Link from "next/link";
import { Linkedin, Github, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white">M</div>
                <span className="font-bold tracking-tight text-white">MUSTACHIO <span className="text-slate-500">SYSTEMS</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Executive engineering for the modern web. We provide direct-access development and infrastructure strategies for businesses that value precision.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/luis-pena-gonzalez-016b19337/" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/Mustachio-Systems" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <Github size={18} />
              </a>
              <a href="mailto:lapgonzalez96@gmail.com" className="p-2 bg-slate-900 rounded-full text-slate-400 hover:text-white hover:bg-indigo-600 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-indigo-400 transition-colors">About The Founder</Link></li>
              <li><Link href="/work" className="hover:text-indigo-400 transition-colors">Case Studies</Link></li>
              <li><Link href="/process" className="hover:text-indigo-400 transition-colors">Our Process</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4: Location/Legal */}
          <div>
            <h4 className="text-white font-bold mb-6">Operations</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-indigo-500" />
                <span>Puerto Rico (HQ)</span>
              </li>
              <li>Global Remote Capabilities</li>
              <li className="pt-4 text-xs text-slate-600">
                Est. 2026 // Luis Pena Gonzalez<br />
                Sole Proprietorship
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs">
            © 2026 Mustachio Systems. Built with Next.js & Cloudflare.
          </p>
          <div className="flex gap-6 text-xs text-slate-600">
            <a href="/privacy" className="hover:text-slate-400">Privacy Policy</a>
            <a href="/terms" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}