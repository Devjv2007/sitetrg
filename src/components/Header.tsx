import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleGoTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector<HTMLElement>(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.add("section-focus");
    setTimeout(() => el.classList.remove("section-focus"), 900);
    setOpen(false);
  };

  const navLinks = [
    { href: "#trg", label: "TRG" },
    { href: "#atendimentos", label: "Atendimentos" },
    { href: "#sobre", label: "Sobre" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${scrolled ? 'bg-white shadow-md' : 'bg-[#F6F2E9]'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2" aria-label="Ir para início">
            <img
              src="/trg-Photoroom.png"
              alt="Logo do Terapeuta"
              className="h-8 w-8"
            />
            <span className="text-xl font-semibold tracking-tight">
              Especialista Cláudio Theodoro Dos Santos
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                onClick={handleGoTo(link.href)} 
                className="text-gray-700 hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}

            <Link
              to="https://api.whatsapp.com/send/?phone=18997959373&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-800 to-green-700 px-6 py-2 text-white text-base font-semibold shadow-md hover:from-green-700 hover:to-green-800 transition-all duration-300"
            >
              Agendar Sessão
              <span className="ri-arrow-right-line text-white text-lg transition-transform group-hover:translate-x-1" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Abrir menu"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {open && (
        <button
          onClick={() => setOpen(false)}
          aria-label="Fechar menu"
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
        />
      )}

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`fixed left-0 right-0 top-16 z-50 md:hidden transform origin-top transition-all duration-200 ${
          open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <nav className="px-4 py-4 space-y-2 bg-[#F6F2E9] shadow-sm">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={handleGoTo(link.href)} 
              className="block text-gray-700 hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="https://api.whatsapp.com/send/?phone=18997959373&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-green-700 px-4 py-3 text-white font-medium hover:bg-green-800 transition"
          >
            Agendar sessão
          </Link>
        </nav>
      </div>
    </header>
  );
};
