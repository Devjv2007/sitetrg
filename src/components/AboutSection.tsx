import type { RefObject } from 'react';

interface AboutSectionProps {
  sobreRef?: RefObject<HTMLElement | null>;  // ← | null
}

export const AboutSection = ({ sobreRef }: AboutSectionProps) => {
  const qualifications = [
    "Especializado em Leitura Corporal",
    "Terapia Cognitivo-Comportamental",
    "Certificação em Terapia Online"
  ];

  return (
    <section id="sobre" ref={sobreRef} className="w-full bg-[#F6F2E9]">
      <div className="mx-5 px-6 py-20">
        <section aria-labelledby="sobre-title" className="grid items-center gap-12 md:grid-cols-2">
          <section className="reveal animate-fade-right">
            <h2 id="sobre-title" className="text-3xl font-serif text-[#1F2E25] md:text-4xl">
              Sobre o Especialista Claudio Theodoro
            </h2>
            <p className="mt-6 text-[#3B4A41] leading-relaxed">
              Com experiência em psicologia clínica, dedico-me a ajudar pessoas a encontrarem equilíbrio emocional e bem-estar mental.
            </p>
            <p className="mt-4 text-[#3B4A41] leading-relaxed">
              Espaço seguro e acolhedor para explorar sentimentos e desenvolver ferramentas para uma vida mais plena.
            </p>
            <section aria-label="Formações e certificações" className="mt-6">
              <ul className="space-y-3 text-[#2E3E35]">
                {qualifications.map((qualification) => (
                  <li key={qualification} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-5 w-5 rounded-full bg-blue-600" />
                    {qualification}
                  </li>
                ))}
              </ul>
            </section>
          </section>

          <section className="relative mx-auto aspect-square w-80 md:w-96 reveal animate-fade-left">
            <div 
              className="absolute inset-0 rounded-full opacity-60 ring-0" 
              style={{ background: "conic-gradient(at 50% 50%, #E1E8E2 0%, #C6D2C9 35%, #E1E8E2 70%, #F6F2E9 100%)" }} 
            />
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
  );
};
