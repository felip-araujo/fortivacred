function Services() {
  const services = [
    { title: "Seguros" },
    { title: "Empréstimo Consignado" },
    { title: "Empréstimo Pessoal" },
    { title: "Financiamento de Veículos e Imóveis" },
    { title: "Consórcio Tradicional e Contemplado" },
    { title: "Refinanciamento de Veículos e Imóveis" },
    { title: "Plano de Saúde" },
    { title: "Mercado Agro" },
  ];

  return (
    <section
      id="servicos"
      className="relative min-h-screen bg-white flex items-center overflow-hidden py-24"
    >
      {/* Fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_60%,#eef6ff_100%)]"></div>

      {/* Quadriculado */}
      <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:42px_42px]"></div>

      {/* Círculos */}
      <div className="absolute bottom-[-200px] right-[-200px] w-[520px] h-[520px] border border-green-500/30 rounded-full"></div>
      <div className="absolute bottom-[-140px] right-[-140px] w-[400px] h-[400px] border border-green-500/25 rounded-full"></div>

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
      <div className="absolute top-36 right-24 hidden md:grid grid-cols-4 gap-2">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
        ))}
      </div>

      <div className="absolute bottom-20 left-10 hidden md:grid grid-cols-4 gap-2">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
        ))}
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-extrabold text-blue-950 mb-20"
        >
          Conheça nossos{" "}
          <span className="font-black">Serviços</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-14 gap-x-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex flex-col items-center text-center"
            >
              {/* Ícone placeholder */}
              <div className="w-14 h-14 mb-4 border-2 border-blue-950 rounded-xl flex items-center justify-center text-blue-950 font-bold">
                +
              </div>

              <p className="text-blue-950 font-medium text-sm md:text-base leading-tight">
                {service.title}
              </p>

              {/* Linha */}
              <div className="mt-4 h-[1px] bg-blue-950/20 w-full max-w-[120px]"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-20"
        >
          <div className="inline-flex items-center gap-3 bg-blue-950 text-white px-6 py-3 rounded-md shadow-lg">
            <span className="text-green-400 text-xl">✦</span>
            <p className="font-semibold">
              Mais de{" "}
              <span className="text-green-400 font-bold">
                250 serviços
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;