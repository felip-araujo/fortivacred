function Hero() {
  return (
    <section className="relative min-h-screen bg-white flex items-center overflow-hidden">
      {/* Detalhes do fundo */}
      
<div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_85%_35%,rgba(30,64,175,0.10),transparent_30%),linear-gradient(135deg,#ffffff_0%,#f8fafc_55%,#eef6ff_100%)]"></div>

{/* Fundo quadriculado fino */}
<div className="absolute inset-0 opacity-[0.55] bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:42px_42px]"></div>

      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-green-400/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] bg-blue-900/10 rounded-full blur-3xl"></div>

      <div className="absolute top-10 left-10 flex gap-1.5">
        
        <img data-aos="fade-in" src="/fortiva-cred.png" className="w-28 h-2rounded-full" alt="" />
        
       
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Imagem */}
        <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="absolute bottom-4 left-1/2 lg:left-44 -translate-x-1/2 w-[340px] h-[340px] bg-green-500/10 rounded-full blur-2xl"></div>

          <img
          
            data-aos="fade-left"
            src="/homem-fortiva.png"
            alt="Consultor Fortiva Cred"
            className="relative z-10 w-full max-w-[620px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* Conteúdo */}
        <div 
        data-aos="fade-up"
        
        className="order-1 lg:order-2 text-center lg:text-left pt-24 lg:pt-0">
          

          <h1 className="font-extrabold leading-[0.95] tracking-tight">
            

            {/* <span className="block text-blue-950 text-5xl md:text-7xl">
              Somos a
            </span> */}

            <span className="block text-blue-950 text-6xl md:text-8xl">
              Somos a Fortiva{" "}
              <span className="text-green-500">Cred.</span>
            </span>
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-blue-950 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Conheça a{" "}
            <span className="text-green-500 font-bold">
              solução inteligente
            </span>
            <br />
            no dia a dia do mercado de
            <br />
            <span className="text-green-500 font-bold">
              seguros e créditos.
            </span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center bg-green-500 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-green-500/25 hover:bg-green-600 hover:-translate-y-1 transition-all duration-300"
            >
              Fale com um consultor
            </a>

            <a
              href="#servicos"
              className="inline-flex items-center justify-center text-blue-950 font-bold px-8 py-4 rounded-full border border-blue-950/15 bg-white/70 backdrop-blur hover:border-green-500 hover:text-green-500 transition-all duration-300"
            >
              Conhecer soluções
            </a>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Hero;