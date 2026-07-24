import React from "react";
import { CloudCheck, Globe, Terminal, Mail } from "lucide-react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const PRODUCT_LINKS: FooterLink[] = [
  { label: "Desktop App", href: "#" },
  { label: "Mobile App", href: "#" },
  { label: "Browser Extension", href: "#" },
  { label: "Hardware Sync", href: "#" },
];

const RESOURCE_LINKS: FooterLink[] = [
  { label: "Developer API", href: "#" },
  { label: "Help Center", href: "#" },
  { label: "Security Audits", href: "#" },
  { label: "Community", href: "#" },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Compliance", href: "#" },
];

const FOOTER_SECTIONS: FooterSection[] = [
  { title: "Product", links: PRODUCT_LINKS },
  { title: "Resources", links: RESOURCE_LINKS },
  { title: "Legal", links: LEGAL_LINKS },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 px-4 md:px-8 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        {/* Brand & Socials Column */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <CloudCheck className="w-8 h-8 text-indigo-400" />
            <span className="text-2xl font-bold text-indigo-400 tracking-tight">
              Sage Wallet
            </span>
          </div>

          <p className="text-slate-400 mb-6 text-sm leading-relaxed">
            The world's most secure and immersive 3D crypto wallet for the
            digital age.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Website"
              className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center hover:text-indigo-400 hover:border-indigo-400/30 transition-all"
            >
              <Globe className="w-5 h-5 text-slate-300 hover:text-indigo-400" />
            </a>
            <a
              href="#"
              aria-label="Terminal"
              className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center hover:text-indigo-400 hover:border-indigo-400/30 transition-all"
            >
              <Terminal className="w-5 h-5 text-slate-300 hover:text-indigo-400" />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center hover:text-indigo-400 hover:border-indigo-400/30 transition-all"
            >
              <Mail className="w-5 h-5 text-slate-300 hover:text-indigo-400" />
            </a>
          </div>
        </div>

        {/* Navigation Sections */}
        {FOOTER_SECTIONS.map((section) => (
          <div key={section.title}>
            <h3 className="font-bold mb-6 text-white text-base">
              {section.title}
            </h3>
            <ul className="space-y-4 text-sm text-slate-400">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-10 text-xs text-slate-500 gap-4">
        <p>
          © {currentYear} Sage Wallet Enterprise Suite. All rights reserved.
        </p>
        <p>Empowering the decentralized future.</p>
      </div>
    </footer>
  );
};

export default Footer;
