function MarketData() {
  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden py-24">
      {/* Fundo */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_60%,#eef6ff_100%)]"></div>

      {/* Quadriculado */}
      <div className="absolute inset-0 opacity-[0.15] bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:42px_42px]"></div>

      {/* Círculos */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] border border-green-500/25 rounded-full"></div>
      <div className="absolute -top-20 -left-20 w-[360px] h-[360px] border border-green-500/20 rounded-full"></div>

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
      <div className="absolute bottom-24 right-24 hidden md:grid grid-cols-4 gap-2">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
        ))}
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 text-center">

        <h2
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-extrabold text-blue-950 mb-16"
        >
          Um mercado{" "}
          <span className="text-green-500">completo</span> e em constante
          crescimento
        </h2>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="max-w-3xl mx-auto text-blue-950 text-lg md:text-xl leading-relaxed"
        >
          <p>
            A Fortiva Cred atua com uma ampla variedade de soluções financeiras,
            conectando clientes a oportunidades em diferentes segmentos do
            mercado de crédito e seguros.
          </p>
        </div>

        {/* Destaque principal */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="mt-16 flex justify-center"
        >
          <div className="bg-blue-950 text-white px-10 py-8 rounded-xl shadow-xl">
            <p className="text-lg md:text-xl mb-2">
              Mais de
            </p>

            <p className="text-5xl md:text-6xl font-extrabold text-green-400">
              150 produtos
            </p>

            <p className="mt-3 text-sm md:text-base text-white/80 max-w-sm">
              e uma ampla rede de parceiros entre bancos, seguradoras e instituições financeiras
            </p>
          </div>
        </div>

        {/* Cards secundários */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="p-6 border border-blue-950/10 rounded-lg"
          >
            <p className="text-green-500 font-bold text-lg mb-2">
              Parcerias sólidas
            </p>
            <p className="text-blue-950 text-sm">
              Conexão com grandes instituições do mercado financeiro.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="p-6 border border-blue-950/10 rounded-lg"
          >
            <p className="text-green-500 font-bold text-lg mb-2">
              Portfólio completo
            </p>
            <p className="text-blue-950 text-sm">
              Diversidade de soluções para diferentes perfis de clientes.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="p-6 border border-blue-950/10 rounded-lg"
          >
            <p className="text-green-500 font-bold text-lg mb-2">
              Crescimento contínuo
            </p>
            <p className="text-blue-950 text-sm">
              Mercado em expansão com alta demanda por crédito.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default MarketData;