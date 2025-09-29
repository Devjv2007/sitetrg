// HeroTherapist.tsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function HeroTherapist() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative bg-white">
      {/* Top bar */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo left */}
          <a href="#" className="flex items-center gap-2" aria-label="Ir para início">
            <img
              src="data:image/png;base64,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"
              alt="Logo do Terapeuta"
              className="h-8 w-8"
            />
            <span className="text-xl font-semibold tracking-tight">
              Dr. Cláudio Theodoro Dos Santos
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#sobre" className="text-gray-600 hover:text-gray-900 transition">
              Sobre
            </a>
            <a href="#abordagens" className="text-gray-600 hover:text-gray-900 transition">
              Abordagens
            </a>
            <a href="#depoimentos" className="text-gray-600 hover:text-gray-900 transition">
              Depoimentos
            </a>
            <a href="#contato" className="text-gray-600 hover:text-gray-900 transition">
              Contato
            </a>
            <Link
              to="https://api.whatsapp.com/send/?phone=18997131670&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-1 text-white text-lg font-semibold shadow-md hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
            >
              Agendar Sessão
              <span className="ri-arrow-right-line text-white text-xl transition-transform group-hover:translate-x-1"></span>
            </Link>
         </nav>

          {/* Mobile menu button */}
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

      {/* Mobile nav */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t">
          <nav className="px-4 py-4 space-y-2">
            <a href="#sobre" className="block text-gray-700 hover:text-gray-900">Sobre</a>
            <a href="#abordagens" className="block text-gray-700 hover:text-gray-900">Abordagens</a>
            <a href="#depoimentos" className="block text-gray-700 hover:text-gray-900">Depoimentos</a>
            <a href="#contato" className="block text-gray-700 hover:text-gray-900">Contato</a>
            <a
              href="#agendar"
              className="mt-2 inline-block rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition shadow-sm"
            >
              Agendar sessão
            </a>
          </nav>
        </div>
      )}

      {/* Hero */}
      <section className="relative overflow-hidden ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -m-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16 md:py-24">
            <div className="order-2 md:order-1">
              <h1 className="mt-4 text-4xl sm:ting-tight text-gray-900ext-5xl font-semibold track my-52">
                Cuidando da mente com acolhimento e ciência
              </h1>
              <p className=" text-lg text-gray-600 ">
                Atendimento humanizado em terapia cognitivo-comportamental, ansiedade, depressão e autoconhecimento, tudo sob medida para cada fase da vida.
              </p>
           
              <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="https://api.whatsapp.com/send/?phone=18997131670&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3 text-white text-lg font-semibold shadow-md hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
            >
              Agendar Sua Primeira Sessão
              <span className="ri-arrow-right-line text-white text-xl transition-transform group-hover:translate-x-1"></span>
            </Link>    
              </div>

              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
                  Atendimento presencial e online
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
                  Agenda com horários flexíveis
                </li>
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
                  Abordagem baseada em evidências
                </li>
              </ul>
            </div>

            {/* Photo right */}
            <div className="order-1 md:order-2 relative">
              <div className="relative mx-auto max-w-md">
                <img
                  src="/imagemheader-Photoroom.png"
                  alt="Foto do Terapeuta"
                  className="w-full rounded-2xl shadow-xl"
                />
                {/* Subtle decorative shapes */}
                <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-2xl bg-blue-100/60 blur-2xl" />
                <div className="pointer-events-none absolute -right-8 -bottom-8 h-28 w-28 rounded-full bg-indigo-100/60 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
<section className="m-12">
  {/* Fundo com gradiente suave */}


  <header className="">
    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 animate-fade-in">
      Conheça a TRG
    </h1>
    <p className="mt-3 text-gray-600 text-lg max-w-2xl animate-fade-in-delay mx-auto md:mx-0">
      Terapia de Reprocessamento Generativo — um novo caminho para o equilíbrio emocional e bem-estar.
    </p>
    <div className="mt-5 animate-fade-in-delay-2">
   
    </div>
  </header>
</section>


<section className="grid grid-cols-4 py-1 m-11">
   <img
   src="/trg1.jpg"
   className="rounded-lg  h-96 m-1"
   />
      <img
   src="/trg2.jpg"
   className="rounded-lg  h-96 m-1"
   />
      <img
   src="/trg3.jpg"
   className="rounded-lg  h-96 m-1"
   />
      <img
   src="/trg4.jpg"
   className="rounded-lg  h-96 m-1"
   />
    <img
   src="/trg5.jpg"
   className="rounded-lg  h-96 m-1"
   />
      <img
   src="/trg6.jpg"
   className="rounded-lg  h-96 m-1"
   />
      <img
   src="/trg7.jpg"
   className="rounded-lg  h-96 m-1"
   />
      <img
   src="/trg8.jpg"
   className="rounded-lg  h-96 m-1"
   />

</section>


 <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 m-20 py-10">

  <header className="mb-5">
    <h1 className="text-3xl sm:text-6xl font-semibold tracking-tight text-gray-600  flex justify-center">
      Meus certificados 
    </h1>
  </header>

  <div className="flex justify-center">


      <img
        src="/certificados.png"
        className="w-6/12"
      />
      
   

  </div>
</section>

 <section className="flex justify-center my-10">
  <Link
    to="https://api.whatsapp.com/send/?phone=18997131670&text&type=phone_number&app_absent=0"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-3 text-white text-lg font-semibold shadow-md hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
  >
    Agendar
    <span className="ri-arrow-right-line text-white text-xl transition-transform group-hover:translate-x-1"></span>
  </Link>
</section>



</section>   
      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-lg font-semibold">Dr. Cláudio Theodoro Dos Santos</p>
              <p className="mt-2 text-sm text-gray-600">
                 Psicanalista, acolhimento e desenvolvimento pessoal.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Contato</p>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li><a href="tel:+5518999999999" className="hover:text-gray-900">+55 (18) 997131670</a></li>
                <li><a href="mailto:contato@drjoaocarvalho.com" className="hover:text-gray-900">fratermariarainha@gmail.com</a></li>
                <li>Presidente Prudente - SP</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Atendimento</p>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li>Seg a Sex: 8h - 11h</li>
                <li>Sáb: 13h - 14h</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Dr. Claudio Theodoro Dos Santos Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-gray-700">Política de Privacidade</a>
              <a href="#" className="hover:text-gray-700">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </header>
  );
}
