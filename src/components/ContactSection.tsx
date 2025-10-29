import { Link } from 'react-router-dom';

export const ContactSection = () => {
  const contactInfo = [
    { icon: "ri-phone-line", title: "Telefone", desc: "(18) 99795-9373" },
    { icon: "ri-mail-send-line", title: "E‑mail", desc: "Claudio.trg.terapeuta@gmail.com" },
    { icon: "ri-map-pin-line", title: "Localização", desc: "Presidente Prudente, SP" },
    { icon: "ri-calendar-schedule-line", title: "Horários", desc: "Seg‑Sex: 8h‑18h" },
  ];

  return (
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
            to="https://api.whatsapp.com/send/?phone=18997959373&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-800 to-green-700 px-8 py-4 text-white text-lg font-semibold shadow-md hover:from-green-700 hover:to-green-800 transition-all duration-900"
          >
            Agendar Consulta agora
            <span className="ri-arrow-right-line text-white text-xl transition-transform group-hover:translate-x-1"></span>
          </Link>
        </section>

        <section aria-label="Canais de contato" className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((contact, i) => (
            <section
              key={contact.title}
              className="reveal animate-fade-up rounded-xl border border-[#E6E9E5] bg-white p-6 text-center shadow-sm"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#E7F0EA] text-[#2F5A45]">
                <span className={`${contact.icon} text-2xl font-extralight`} />
              </div>
              <h3 className="text-sm font-medium text-[#374A40]">{contact.title}</h3>
              <p className="mt-1 flex justify-center text-sm text-[#7A8880]">{contact.desc}</p>
            </section>
          ))}
        </section>
      </div>
    </section>
  );
};
