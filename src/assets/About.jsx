function About() {
  return (
    <section
      id="quem-somos"
      className="relative min-h-screen bg-white flex items-center overflow-hidden py-24"
    >
      {/* Fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_50%,rgba(34,197,94,0.10),transparent_28%),linear-gradient(135deg,#ffffff_0%,#f8fafc_60%,#eef6ff_100%)]"></div>

      {/* Quadriculado fino */}
      <div className="absolute inset-0 opacity-[0.18] bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:42px_42px]"></div>

      {/* Círculos direita */}
      <div className="absolute right-[-260px] top-1/2 -translate-y-1/2 w-[620px] h-[620px] border border-green-500/40 rounded-full"></div>
      <div className="absolute right-[-190px] top-1/2 -translate-y-1/2 w-[480px] h-[480px] border border-green-500/35 rounded-full"></div>
      <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-green-500/8 rounded-full"></div>

      {/* Topo */}
      <div className="absolute top-8 left-8 md:left-12 z-20 flex gap-1.5">
        <span className="w-9 h-2 bg-green-500 rounded-full"></span>
        <span className="w-9 h-2 bg-sky-400 rounded-full"></span>
        <span className="w-9 h-2 bg-blue-950 rounded-full"></span>
      </div>

      <p className="absolute top-8 right-8 md:right-12 z-20 text-sm md:text-base text-blue-950 font-medium">
        apresentação comercial{" "}
        <span className="text-green-500 font-bold">2026</span>
      </p>

      {/* Pontinhos */}
      <div className="absolute top-40 right-24 hidden md:grid grid-cols-4 gap-2">
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className="w-1.5 h-1.5 bg-green-500 rounded-full"
          ></span>
        ))}
      </div>

      <div className="absolute bottom-24 left-[55%] hidden lg:grid grid-cols-4 gap-2">
        {Array.from({ length: 16 }).map((_, index) => (
          <span
            key={index}
            className="w-1.5 h-1.5 bg-green-500 rounded-full"
          ></span>
        ))}
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <h2
            data-aos="fade-up"
            className="text-5xl md:text-7xl font-extrabold text-blue-950 mb-12"
          >
            Quem Somos
          </h2>

          <div
            data-aos="fade-up"
            data-aos-delay="150"
            className="space-y-7 text-blue-950 text-lg md:text-xl leading-relaxed font-medium"
          >
            <p>
              A Fortiva Cred é uma franquia sólida e inovadora no setor de{" "}
              <span className="text-green-500 font-extrabold">
                soluções financeiras
              </span>
              , especializada em crédito consignado, empréstimos pessoais,
              consórcios, seguros e outras operações completas de crédito.
              Nascemos com o propósito de oferecer segurança, agilidade e
              confiança em cada atendimento, conectando pessoas às melhores
              oportunidades financeiras do mercado.
            </p>

            <p>
              Com base em uma estrutura corporativa robusta e processos
              padronizados, a Fortiva Cred atua com{" "}
              <span className="text-green-500 font-extrabold">
                tecnologia, transparência e excelência operacional
              </span>
              , garantindo suporte total aos franqueados e uma experiência
              diferenciada ao cliente final. Nosso modelo de negócio foi
              desenvolvido para gerar crescimento sustentável, com foco em
              resultados e expansão nacional.
            </p>

            <p>
              Mais do que uma franquia, somos um ecossistema financeiro que une{" "}
              <span className="text-green-500 font-extrabold">
                experiência, inovação e credibilidade
              </span>{" "}
              — pilares que fazem da Fortiva Cred uma marca de referência no
              mercado de crédito.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-16 flex justify-center lg:justify-end"
          >
            <img
              src="/fortiva-cred.png"
              alt="Fortiva Cred"
              className="w-32 md:w-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;