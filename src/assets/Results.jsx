function Results() {
  return (
    <section className="relative min-h-screen bg-blue-950 flex items-center overflow-hidden py-24">
      {/* Fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,197,94,0.18),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(56,189,248,0.12),transparent_28%),linear-gradient(135deg,#172554_0%,#0f172a_100%)]"></div>

      {/* Quadriculado fino */}
      <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:42px_42px]"></div>

      {/* Círculos */}
      <div className="absolute -bottom-48 -right-48 w-[560px] h-[560px] border border-green-400/25 rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] border border-green-400/20 rounded-full"></div>

      {/* Pontinhos */}
      <div className="absolute top-36 right-24 hidden md:grid grid-cols-4 gap-2">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 bg-green-400 rounded-full"
          ></span>
        ))}
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
          <p
            data-aos="fade-up"
            className="text-green-400 font-bold uppercase tracking-[0.25em] text-sm mb-6"
          >
            Oportunidade de crescimento
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-7xl font-extrabold text-white leading-tight"
          >
            Uma operação pensada para gerar{" "}
            <span className="text-green-400">resultado</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-8 text-lg md:text-2xl text-white/80 leading-relaxed max-w-3xl"
          >
            A Fortiva Cred combina um portfólio completo, parceiros estratégicos
            e processos estruturados para transformar oportunidades financeiras
            em crescimento real.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6"
            >
              <p className="text-4xl font-extrabold text-green-400">+150</p>
              <p className="mt-2 text-white font-semibold">produtos</p>
              <p className="mt-2 text-white/65 text-sm">
                Soluções para diferentes perfis de clientes.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6"
            >
              <p className="text-4xl font-extrabold text-green-400">360°</p>
              <p className="mt-2 text-white font-semibold">atuação completa</p>
              <p className="mt-2 text-white/65 text-sm">
                Crédito, seguros, consórcios e soluções financeiras.
              </p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="bg-white/10 backdrop-blur border border-white/10 rounded-2xl p-6"
            >
              <p className="text-4xl font-extrabold text-green-400">BR</p>
              <p className="mt-2 text-white font-semibold">expansão nacional</p>
              <p className="mt-2 text-white/65 text-sm">
                Modelo preparado para escalar com consistência.
              </p>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="600" className="mt-12">
            <a
              href="#contato"
              className="inline-flex items-center justify-center bg-green-500 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-green-500/25 hover:bg-green-600 hover:-translate-y-1 transition-all duration-300"
            >
              Quero conhecer a Fortiva Cred
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Results;
