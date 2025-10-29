import type { RefObject } from 'react';


interface ServicesSectionProps {
  atendRef?: RefObject<HTMLElement | null>;  // ← | null
}

export const ServicesSection = ({ atendRef }: ServicesSectionProps) => {
  const services = [
    { icon: "ri-brain-line", title: "Terapia Individual", desc: "Sessões personalizadas para ansiedade, depressão e autoestima." },
    { icon: "ri-heart-2-line", title: "Terapia de Casal", desc: "Fortalecimento do relacionamento e comunicação efetiva." },
    { icon: "ri-group-line", title: "Terapia Familiar", desc: "Harmonização das dinâmicas familiares." },
    { icon: "ri-shield-line", title: "Terapia Online", desc: "Atendimento seguro e confidencial." },
  ];

  return (
    <section id="atendimentos" ref={atendRef} className="w-full bg-[#F8F3E9]">
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <section className="text-center reveal animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif text-[#1F2E25]">Como posso te ajudar?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-[#6A7A71]">
            Ofereço diferentes modalidades de atendimento para atender suas necessidades específicas
          </p>
        </section>

        <section aria-label="Canais de contato" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <section
              key={service.title}
              className="reveal animate-fade-up rounded-xl border border-[#E6E9E5] bg-white p-6 text-center shadow-sm"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E7F0EA] text-[#2F5A45]">
                <span className={`${service.icon} text-2xl font-extralight`} />
              </div>
              <h3 className="text-sm font-medium text-[#374A40]">{service.title}</h3>
              <p className="mt-1 text-sm text-[#7A8880]">{service.desc}</p>
            </section>
          ))}
        </section>
      </div>
    </section>
  );
};
