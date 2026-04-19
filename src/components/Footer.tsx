import { Instagram, Mail, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer id="about" className="py-24 px-6 md:px-12 bg-brand-black border-t border-white/10 uppercase">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 mb-24">
          <div>
            <div className="mb-12">
              <h2 className="font-display text-4xl md:text-6xl font-black tracking-[-0.04em] leading-[0.9]">
                Beyond<br />
                The Digital<br />
                <span className="text-brand-accent">Frontier.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-8">
              <a 
                href="mailto:pencilon.graphy@gmail.com" 
                className="group flex flex-col gap-1 hover:text-brand-accent transition-colors"
              >
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/40">Email</span>
                <span className="font-display text-xl md:text-2xl font-black tracking-tighter">pencilon.graphy@gmail.com</span>
              </a>
              <a 
                href="https://instagram.com/pencilon" 
                target="_blank"
                className="group flex flex-col gap-1 hover:text-brand-accent transition-colors"
              >
                <span className="text-[10px] font-bold tracking-[0.2em] text-white/40">Instagram</span>
                <span className="font-display text-xl md:text-2xl font-black tracking-tighter">@pencilon</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between items-start md:items-end font-sans tracking-[0.1em] text-[11px] font-semibold text-white/40">
            <div className="text-left md:text-right space-y-4">
              <p>Located in Malappuram</p>
              <p>Kerala, India</p>
            </div>
            
            <div className="mt-12 md:mt-0 flex gap-24">
              <div className="space-y-4">
                <p className="text-white/20 mb-6 font-black tracking-[0.3em]">Services</p>
                <p className="hover:text-white cursor-pointer transition-colors">Branding</p>
                <p className="hover:text-white cursor-pointer transition-colors">Digital Marketing</p>
                <p className="hover:text-white cursor-pointer transition-colors">Social Media</p>
              </div>
              <div className="space-y-4">
                <p className="text-white/20 mb-6 font-black tracking-[0.3em]">Agency</p>
                <p className="hover:text-white cursor-pointer transition-colors">Our Studio</p>
                <p className="hover:text-white cursor-pointer transition-colors">Process</p>
                <p className="hover:text-white cursor-pointer transition-colors">Works</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-8">
          <div className="flex items-center gap-4">
            <Logo className="h-10 w-10" />
            <div className="font-display font-black text-2xl tracking-[0.15em]">PENCILON.</div>
          </div>
          <p className="font-sans text-[10px] font-bold tracking-[0.2em] text-white/20 text-center md:text-right">
            © 2026 PENCILON CREATIVE. <br />
            BUILT FOR THE FRONTIER.
          </p>
        </div>
      </div>
    </footer>
  );
}
