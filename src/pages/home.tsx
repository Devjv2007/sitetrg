import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroTherapist() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLElement | null>(null);


  const trgRef = useRef<HTMLElement | null>(null);
  const galeriaRef = useRef<HTMLElement | null>(null);
  const atendRef = useRef<HTMLElement | null>(null);
  const sobreRef = useRef<HTMLElement | null>(null);


  useEffect(() => {
    const root = rootRef.current ?? document.body;
    const items = root.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);


  function useHoverGate(scopeRef: React.RefObject<HTMLElement | null>, thresholdPct = 60) {
    useEffect(() => {
      let fired = false;
      const onMove = (e: MouseEvent) => {
        if (fired) return;
        const vh = window.innerHeight || document.documentElement.clientHeight;
        const yPct = (e.clientY / vh) * 100;
        if (yPct >= thresholdPct) {
          const scope = scopeRef.current;
          if (!scope) return;
          scope.querySelectorAll<HTMLElement>(".reveal").forEach((el) => el.classList.add("is-visible"));
          fired = true;
        }
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, [scopeRef, thresholdPct]);
  }


  useHoverGate(trgRef, 52);     
  useHoverGate(galeriaRef, 58);  
  useHoverGate(atendRef, 64);    
  useHoverGate(sobreRef, 70);  


  const handleGoTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector<HTMLElement>(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.add("section-focus");
    setTimeout(() => el.classList.remove("section-focus"), 900);
    setOpen(false);
  };

  return (
    <header ref={rootRef} className="relative bg-[#F6F2E9]">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          <a href="#" className="flex items-center gap-2" aria-label="Ir para início">
            <img
              src="/trg-Photoroom.png"
              alt="Logo do Terapeuta"
              className="h-8 w-8"
            />
            <span className="text-xl font-semibold tracking-tight">
              Psicanalista Cláudio Theodoro Dos Santos
            </span>
          </a>


          <nav className="hidden md:flex items-center gap-8">
            <a href="#trg" onClick={handleGoTo("#trg")} className="text-gray-700 hover:text-gray-900">TRG</a>
            <a href="#atendimentos" onClick={handleGoTo("#atendimentos")} className="text-gray-700 hover:text-gray-900">Atendimentos</a>
            <a href="#sobre" onClick={handleGoTo("#sobre")} className="text-gray-700 hover:text-gray-900">Sobre</a>
            <a href="#contato" onClick={handleGoTo("#contato")} className="text-gray-700 hover:text-gray-900">Contato</a>

            <Link
              to="https://api.whatsapp.com/send/?phone=18997131670&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-800 to-green-700 px-6 py-2 text-white text-base font-semibold shadow-md hover:from-green-700 hover:to-green-800 transition-all duration-300"
            >
              Agendar Sessão
              <span className="ri-arrow-right-line text-white text-lg transition-transform group-hover:translate-x-1" />
            </Link>
          </nav>


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


      {open && (
        <div
          id="mobile-menu"
          className="md:hidden absolute left-0 right-0 top-16 z-30 border-t bg-[#F6F2E9] shadow-sm dropdown-enter"
        >
          <nav className="px-4 py-4 space-y-2">
            <a href="#trg" onClick={handleGoTo("#trg")} className="block text-gray-700 hover:text-gray-900">Trg</a>
            <a href="#atendimentos" onClick={handleGoTo("#atendimentos")} className="block text-gray-700 hover:text-gray-900">Atendimentos</a>
            <a href="#sobre" onClick={handleGoTo("#sobre")} className="block text-gray-700 hover:text-gray-900">Sobre</a>
            <a href="#contato" onClick={handleGoTo("#contato")} className="block text-gray-700 hover:text-gray-900">Contato</a>
            <Link
              to="https://api.whatsapp.com/send/?phone=18997131670&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-green-700 px-4 py-3 text-white font-medium hover:bg-green-800 transition"
            >
              Agendar sessão
            </Link>
          </nav>
        </div>
      )}


      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -m-52 max-md:m-0 max-md:mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16 md:py-24">

            <div className="order-2 md:order-1 reveal animate-fade-right max-md:order-2 max-md:text-center">
              <h1 className="text-3xl font-serif text-[#1F2E25] md:text-4xl">
                Encontre o equilíbrio que você precisa
              </h1>
              <p className="mt-3 text-lg text-gray-600 max-md:text-base">
                Ofereço um espaço seguro e acolhedor para você explorar seus sentimentos, superar desafios e descobrir seu potencial de crescimento pessoal.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 max-md:justify-center">
                <Link
                  to="https://api.whatsapp.com/send/?phone=18997131670&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-800 to-green-700 px-8 py-4 text-white text-lg font-semibold shadow-md hover:from-green-700 hover:to-green-800 transition-all duration-900"
                >
                  Agendar Sua Primeira Sessão
                  <span className="ri-arrow-right-line text-white text-xl transition-transform group-hover:translate-x-1"></span>
                </Link>
              </div>

              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700 max-md:text-center max-md:grid-cols-4 max-md:justify-items-center">
                <li className="flex items-center gap-2 max-md:justify-center">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
                  Atendimento presencial e online
                </li>
                <li className="flex items-center gap-2 max-md:justify-center">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
                  Agenda com horários flexíveis
                </li>
                <li className="flex items-center gap-2 max-md:justify-center">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
                  Abordagem baseada em evidências
                </li>
                <li className="flex items-center gap-2 max-md:justify-center">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
                  Atendimento confidencial e ético
                </li>
              </ul>
            </div>

            <div className="order-1 md:order-2 relative reveal animate-fade-left max-md:order-1">
              <div className="relative mx-auto max-w-md max-md:max-w-sm max-md:bg-white/60 max-md:backdrop-blur max-md:p-3 max-md:rounded-3xl">
                <img
                  src="/claudiodelado-Photoroom.png"
                  alt="Foto do Terapeuta"
                  className="w-full max-md:-mt-10"
                />
                <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 max-md:hidden" />
                <div className="pointer-events-none absolute -right-8 -bottom-8 h-28 w-28 max-md:hidden" />
              </div>
            </div>
          </div>
        </div>


        <section id="trg" ref={trgRef} className="m-12 max-md:m-6">
          <header className="reveal animate-fade-up max-md:text-center">
            <h1 className="text-3xl font-serif text-[#1F2E25] md:text-4xl">Conheça a TRG</h1>
            <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto md:mx-0">
              Terapia de Reprocessamento Generativo — um novo caminho para o equilíbrio emocional e bem‑estar.
            </p>
          </header>
        </section>

        <section
          ref={galeriaRef}
          className="reveal animate-fade-up grid grid-cols-4 gap-3 -my-7 m-11 md:-mt-12 md:mb-0 max-md:m-2 max-md:my-4 max-md:grid-cols-2"
        >
          {[
            "/trg1.jpg","/trg2.jpg","/trg3.jpg","/trg4.jpg",
            "/trg5.jpg","/trg6.jpg","/trg7.jpg","/trg8.jpg"
          ].map((src, i) => (
            <img
              key={src}
              src={src}
              className="rounded-lg h-96 m-1 object-cover max-md:h-96 max-md:w-full"
              style={{ animationDelay: `${i * 70}ms` }}
            />
          ))}
        </section>

        <section id="atendimentos" ref={atendRef} className="w-full bg-[#F8F3E9]">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <section className="text-center reveal animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-serif text-[#1F2E25]">Como posso te ajudar?</h2>
              <p className="mx-auto mt-4 max-w-3xl text-[#6A7A71]">
                Ofereço diferentes modalidades de atendimento para atender suas necessidades específicas
              </p>
            </section>

            <section aria-label="Canais de contato" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "ri-brain-line", title: "Terapia Individual", desc: "Sessões personalizadas para ansiedade, depressão e autoestima." },
                { icon: "ri-heart-2-line", title: "Terapia de Casal", desc: "Fortalecimento do relacionamento e comunicação efetiva." },
                { icon: "ri-group-line", title: "Terapia Familiar", desc: "Harmonização das dinâmicas familiares." },
                { icon: "ri-shield-line", title: "Terapia Online", desc: "Atendimento seguro e confidencial." },
              ].map((c, i) => (
                <section
                  key={c.title}
                  className="reveal animate-fade-up rounded-xl border border-[#E6E9E5] bg-white p-6 text-center shadow-sm"
                  style={{ animationDelay: `${i * 90}ms` }}
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E7F0EA] text-[#2F5A45]">
                    <span className={`${c.icon} text-2xl font-extralight`} />
                  </div>
                  <h3 className="text-sm font-medium text-[#374A40]">{c.title}</h3>
                  <p className="mt-1 text-sm text-[#7A8880]">{c.desc}</p>
                </section>
              ))}
            </section>
          </div>
        </section>


        <section id="sobre" ref={sobreRef} className="w-full bg-[#F6F2E9]">
          <div className="mx-5 px-6 py-20">
            <section aria-labelledby="sobre-title" className="grid items-center gap-12 md:grid-cols-2">
              <section className="reveal animate-fade-right">
                <h2 id="sobre-title" className="text-3xl font-serif text-[#1F2E25] md:text-4xl">
                  Sobre o Psicanalista Claudio Theodoro
                </h2>
                <p className="mt-6 text-[#3B4A41] leading-relaxed">
                  Com experiência em psicologia clínica, dedico-me a ajudar pessoas a encontrarem equilíbrio emocional e bem-estar mental.
                </p>
                <p className="mt-4 text-[#3B4A41] leading-relaxed">
                  Espaço seguro e acolhedor para explorar sentimentos e desenvolver ferramentas para uma vida mais plena.
                </p>
                <section aria-label="Formações e certificações" className="mt-6">
                  <ul className="space-y-3 text-[#2E3E35]">
                    <li className="flex items-start gap-2"><span className="mt-1 inline-block h-5 w-5 rounded-full bg-blue-600" />Especializado em Leitura Corporal</li>
                    <li className="flex items-start gap-2"><span className="mt-1 inline-block h-5 w-5 rounded-full bg-blue-600" />Terapia Cognitivo-Comportamental</li>
                    <li className="flex items-start gap-2"><span className="mt-1 inline-block h-5 w-5 rounded-full bg-blue-600" />Certificação em Terapia Online</li>
                  </ul>
                </section>
              </section>

              <section className="relative mx-auto aspect-square w-80 md:w-96 reveal animate-fade-left">
                <div className="absolute inset-0 rounded-full opacity-60 ring-0" style={{ background: "conic-gradient(at 50% 50%, #E1E8E2 0%, #C6D2C9 35%, #E1E8E2 70%, #F6F2E9 100%)" }} />
                <div className="absolute inset-4 rounded-full bg-[#F6F2E9] shadow-[inset_0_0_0_1px_rgba(44,64,54,0.08)]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <p className="text-3xl font-semibold text-[#2F5A45]">+1</p>
                  <p className="mt-1 text-sm text-[#6A7A71]">Ano transformando vidas</p>
                  <div className="my-4 h-px w-12 bg-[#DADFD9]" />
                  <p className="text-2xl font-semibold text-[#2F5A45]">+200</p>
                  <p className="mt-1 text-sm text-[#6A7A71]">Pacientes atendidos</p>
                </div>
              </section>
            </section>
          </div>
        </section>
      </section>


      <footer>
        <section id="contato" className="w-full bg-[#F8F3E9]">
          <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
            <section className="text-center reveal animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-serif text-[#1F2E25]">
                Pronto para começar sua jornada?
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-[#6A7A71]">
                Dê o primeiro passo em direção ao seu bem‑estar. Agende uma consulta e descubra como a terapia pode transformar sua vida.
              </p>
            </section>

            <section className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                to="https://api.whatsapp.com/send/?phone=18997131670&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-800 to-green-700 px-8 py-1 text-white text-lg font-semibold shadow-md hover:from-green-700 hover:to-green-800 transition-all duration-900"
              >
                Agendar Consulta agora
                <span className="ri-arrow-right-line text-white text-xl transition-transform group-hover:translate-x-1"></span>
              </Link>
            </section>

            <section aria-label="Canais de contato" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "ri-phone-line", title: "Telefone", desc: "(18) 997131670" },
                { icon: "ri-mail-send-line", title: "E‑mail", desc: "fratermariarainha@gmail.com" },
                { icon: "ri-map-pin-line", title: "Localização", desc: "Presidente Prudente, SP" },
                { icon: "ri-calendar-schedule-line", title: "Horários", desc: "Seg‑Sex: 8h‑18h" },
              ].map((c, i) => (
                <section
                  key={c.title}
                  className="reveal animate-fade-up rounded-xl border border-[#E6E9E5] bg-white p-6 text-center shadow-sm"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E7F0EA] text-[#2F5A45]">
                    <span className={`${c.icon} text-2xl font-extralight`} />
                  </div>
                  <h3 className="text-sm font-medium text-[#374A40]">{c.title}</h3>
                  <p className="mt-1 text-sm text-[#7A8880]">{c.desc}</p>
                </section>
              ))}
            </section>
          </div>
        </section>
      </footer>
    </header>
  );
}
