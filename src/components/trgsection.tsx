import type { RefObject } from 'react';

interface TRGSectionProps {
  trgRef?: RefObject<HTMLElement | null>;
  galeriaRef?: RefObject<HTMLElement | null>;
}

export const TRGSection = ({ galeriaRef }: TRGSectionProps) => {
  const images = [
    "/trg1.jpg", "/trg2.jpg", "/trg3.jpg", "/trg4.jpg",
    "/trg5.jpg", "/trg6.jpg", "/trg7.jpg", "/trg8.jpg"
  ];

  return (
    <section id="trg" className="w-full py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Seção TRG */}
        <section className="text-center reveal animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-serif  md:mt-24 text-[#1F2E25]">
            Conheça a TRG
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-[#6A7A71]">
            Terapia de Reprocessamento Generativo. Um novo caminho para o equilíbrio emocional e bem‑estar.
          </p>
        </section>

        {/* Galeria */}
        <section
          ref={galeriaRef}
          className="reveal animate-fade-up grid grid-cols-2 gap-4 mt-12 md:grid-cols-4"
        >
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Imagem da galeria ${i + 1}`}
              className="rounded-lg h-64 w-full object-cover md:h-96"
              style={{ animationDelay: `${i * 70}ms` }}
            />
          ))}
        </section>
      </div>
    </section>
  );
};
