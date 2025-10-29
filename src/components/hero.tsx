import { Link } from 'react-router-dom';

interface HeroProps {
  heroRef?: any;  
}

export const Hero = ({ heroRef }: HeroProps) => {
  
  return (
    <div ref={heroRef}>
      {/* VERSÃO DESKTOP */}
       <div className="hidden md:block">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -m-36">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:min-h-[600px] py-16 md:py-24">

            <div className="order-2 md:order-1 flex flex-col justify-center reveal animate-fade-right my-45">
              <h1 className="text-3xl font-serif text-[#1F2E25] md:text-4xl">
                Encontre o equilíbrio que você precisa
              </h1>
              <p className="mt-3 text-lg text-gray-600">
                Ofereço um espaço seguro e acolhedor para você explorar seus sentimentos, superar desafios e descobrir seu potencial de crescimento pessoal.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  to="https://api.whatsapp.com/send/?phone=18997959373&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-800 to-green-700 px-8 py-4 text-white text-lg font-semibold shadow-md hover:from-green-700 hover:to-green-800 transition-all duration-900"
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
                <li className="flex items-center gap-2">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500" />
                  Atendimento confidencial e ético
                </li>
              </ul>
            </div>

            <div className="order-1 md:order-2 md:absolute md:right-0 py-70 md:top-24 md:w-1/2 md:px-8 reveal animate-fade-left">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-8 md:py-40 border -my-35 border-gray-100 md:min-h-[600px]">
                <div className="relative w-full max-w-md mx-auto">
                  <img
                    src="/claudiodelado-Photoroom.png"
                    alt="Foto do Terapeuta"
                    className="w-full -my-70"
                    style={{
                      maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)'
                    }}
                  />
                  <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24" />
                  <div className="pointer-events-none absolute -right-8 -bottom-8 h-28 w-28" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

       <div className="block md:hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 m-0 mt-6">
          <div className="grid grid-cols-1 gap-10 py-16">

            <div className="order-1 relative w-full reveal animate-fade-left">
              <div className="relative w-full max-w-sm mx-auto bg-white/60 backdrop-blur p-3 rounded-3xl -mt-10">
                <img
                  src="/claudiodelado-Photoroom.png"
                  alt="Foto do Terapeuta"
                  className="w-full -mt-10"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                  }}
                />
              </div>
            </div>

            <div className="order-2 text-center my-8 reveal animate-fade-right">
              <h1 className="text-3xl font-serif text-[#1F2E25]">
                Encontre o equilíbrio que você precisa
              </h1>
              <p className="mt-3 text-base text-gray-600">
                Ofereço um espaço seguro e acolhedor para você explorar seus sentimentos, superar desafios e descobrir seu potencial de crescimento pessoal.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3 justify-center">
                <Link
                  to="https://api.whatsapp.com/send/?phone=18997959373&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-800 to-green-700 px-8 py-4 text-white text-lg font-semibold shadow-md hover:from-green-700 hover:to-green-800 transition-all duration-900"
                >
                  Agendar Sua Primeira Sessão
                  <span className="ri-arrow-right-line text-white text-xl transition-transform group-hover:translate-x-1"></span>
                </Link>
              </div>

              <ul className="mt-8 grid grid-cols-4 gap-3 text-sm text-gray-700 text-center justify-items-center">
                <li className="flex items-center gap-2 justify-center">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500 flex-shrink-0" />
                  Atendimento presencial e online
                </li>
                <li className="flex items-center gap-2 justify-center">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500 flex-shrink-0" />
                  Agenda com horários flexíveis
                </li>
                <li className="flex items-center gap-2 justify-center">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500 flex-shrink-0" />
                  Abordagem baseada em evidências
                </li>
                <li className="flex items-center gap-2 justify-center">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-green-500 flex-shrink-0" />
                  Atendimento confidencial e ético
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
