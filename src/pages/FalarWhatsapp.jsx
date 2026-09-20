import { Link } from "react-router-dom";

function FalarWhatsapp() {
  // Troque pelo número oficial da Fortiva
  // Formato: 55 + DDD + número
  const whatsappNumber = "5511922077141";

  const mensagem =
    "Olá! Vim pelo site da Fortiva Cred e gostaria de falar com um consultor para conhecer melhor os modelos de negócio Home, Office e BoxBank.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    mensagem
  )}`;

  const modelos = [
    {
      nome: "Home",
      destaque: "70%",
      texto: "do resultado",
    },
    {
      nome: "Office",
      destaque: "75%",
      texto: "do resultado",
    },
    {
      nome: "BoxBank",
      destaque: "80%",
      texto: "do resultado",
    },
  ];

  return (
    <section
      className="
        relative
        min-h-screen
        bg-white
        flex
        items-center
        justify-center
        overflow-hidden
        px-6
        py-20
      "
    >
      {/* FUNDO */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_85%_35%,rgba(30,64,175,0.10),transparent_30%),linear-gradient(135deg,#ffffff_0%,#f8fafc_55%,#eef6ff_100%)]" />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.45]
          bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)]
          bg-[size:42px_42px]
        "
      />

      {/* DECORAÇÕES */}
      <div className="absolute -top-32 -right-32 w-[460px] h-[460px] bg-green-400/10 rounded-full blur-3xl" />

      <div className="absolute -bottom-40 -left-40 w-[540px] h-[540px] bg-blue-900/10 rounded-full blur-3xl" />

      <div className="absolute hidden lg:block top-1/2 right-[4%] -translate-y-1/2 w-[560px] h-[560px] border border-green-500/10 rounded-full" />

      {/* CONTEÚDO */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-6xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-[1.05fr_0.95fr]
          gap-14
          items-center
        "
      >
        {/* ================================= */}
        {/* TEXTO */}
        {/* ================================= */}

        <div
          data-aos="fade-up"
          className="
            text-center
            lg:text-left
          "
        >
          <img
            src="/fortiva-cred.png"
            alt="Fortiva Cred"
            className="
              w-36
              md:w-40
              mx-auto
              lg:mx-0
              mb-10
              object-contain
            "
          />

          {/* BADGE */}
          <span
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-green-500/10
              border
              border-green-500/20
              text-green-600
              text-sm
              font-bold
            "
          >
            <span className="w-2 h-2 rounded-full bg-green-500" />

            Atendimento Fortiva Cred
          </span>

          <h1
            className="
              mt-7
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-extrabold
              tracking-tight
              leading-[0.98]
              text-blue-950
            "
          >
            Vamos encontrar o modelo
            <span className="block text-green-500">
              ideal para você.
            </span>
          </h1>

          <p
            className="
              mt-7
              text-lg
              md:text-xl
              text-slate-600
              leading-relaxed
              max-w-2xl
              mx-auto
              lg:mx-0
            "
          >
            Converse diretamente com nossa equipe e conheça os detalhes dos
            modelos de negócio da Fortiva Cred, estrutura de implantação,
            benefícios e condições.
          </p>

          {/* BENEFÍCIOS */}
          <div
            className="
              mt-9
              flex
              flex-col
              sm:flex-row
              sm:flex-wrap
              justify-center
              lg:justify-start
              gap-3
            "
          >
            {[
              "Tire suas dúvidas",
              "Compare os modelos",
              "Entenda a implantação",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-2
                  text-blue-950
                  font-semibold
                  text-sm
                "
              >
                <span
                  className="
                    w-6
                    h-6
                    rounded-full
                    bg-green-500
                    text-white
                    flex
                    items-center
                    justify-center
                    text-xs
                  "
                >
                  ✓
                </span>

                {item}
              </div>
            ))}
          </div>

          {/* VOLTAR */}
          <Link
            to="/"
            className="
              inline-flex
              mt-10
              text-sm
              font-bold
              text-slate-500
              hover:text-green-600
              transition-colors
            "
          >
            ← Voltar para o site
          </Link>
        </div>

        {/* ================================= */}
        {/* CARD WHATSAPP */}
        {/* ================================= */}

        <div
          data-aos="fade-left"
          className="
            relative
            bg-white/85
            backdrop-blur-xl
            border
            border-blue-950/10
            rounded-[36px]
            shadow-2xl
            shadow-blue-950/10
            p-7
            md:p-10
          "
        >
          {/* ÍCONE */}
          <div
            className="
              w-16
              h-16
              rounded-2xl
              bg-green-500
              text-white
              flex
              items-center
              justify-center
              shadow-lg
              shadow-green-500/25
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="w-8 h-8"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h8M8 14h5m8-2a9 9 0 0 1-13.8 7.6L3 21l1.4-4.1A9 9 0 1 1 21 12Z"
              />
            </svg>
          </div>

          <h2
            className="
              mt-7
              text-3xl
              md:text-4xl
              font-extrabold
              text-blue-950
              tracking-tight
            "
          >
            Fale com um consultor
          </h2>

          <p className="mt-3 text-slate-500 leading-relaxed">
            Inicie agora uma conversa pelo WhatsApp com nossa equipe.
          </p>

          {/* MODELOS */}
          <div className="mt-8 space-y-3">
            {modelos.map((modelo) => (
              <div
                key={modelo.nome}
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                  border
                  border-slate-200
                  bg-white
                  rounded-2xl
                  px-5
                  py-4
                "
              >
                <div>
                  <p className="text-xs text-slate-400">
                    Modelo
                  </p>

                  <p className="font-extrabold text-blue-950">
                    {modelo.nome}
                  </p>
                </div>

                <div className="text-right">
                  <p
                    className="
                      text-xl
                      font-extrabold
                      text-green-500
                    "
                  >
                    {modelo.destaque}
                  </p>

                  <p className="text-[11px] text-slate-400">
                    {modelo.texto}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              mt-8
              w-full
              min-h-14
              bg-green-500
              text-white
              font-extrabold
              text-sm
              md:text-base
              px-7
              py-4
              rounded-full
              flex
              items-center
              justify-center
              gap-3
              shadow-xl
              shadow-green-500/25
              hover:bg-green-600
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            FALAR AGORA COM UM CONSULTOR

            <span
              className="
                group-hover:translate-x-1
                transition-transform
              "
            >
              →
            </span>
          </a>

          <div
            className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
              text-xs
              text-slate-400
            "
          >
            <span className="w-2 h-2 bg-green-500 rounded-full" />

            Você será direcionado para o WhatsApp.
          </div>
        </div>
      </div>
    </section>
  );
}

export default FalarWhatsapp;