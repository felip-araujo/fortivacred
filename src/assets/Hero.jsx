import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowRight,
  faCheck,
  faHouse,
  faBuilding,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";

function Hero() {
  const modelos = [
    {
      nome: "Home",
      lucro: "70%",
      icon: faHouse,
    },
    {
      nome: "Office",
      lucro: "75%",
      icon: faBuilding,
    },
    {
      nome: "BoxBank",
      lucro: "80%",
      icon: faBoxOpen,
    },
  ];

  const irParaModelos = () => {
    const section = document.getElementById("modelo-negocio");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="
        relative
        min-h-screen
        bg-white
        flex
        items-center
        overflow-hidden
        pt-28
        lg:pt-20
        pb-16
      "
    >
      {/* ========================================= */}
      {/* FUNDO */}
      {/* ========================================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_85%_35%,rgba(30,64,175,0.11),transparent_30%),linear-gradient(135deg,#ffffff_0%,#f8fafc_55%,#eef6ff_100%)]" />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.5]
          bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)]
          bg-[size:42px_42px]
        "
      />

      {/* Luzes */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-green-400/10 rounded-full blur-3xl" />

      <div className="absolute -bottom-40 -left-40 w-[540px] h-[540px] bg-blue-900/10 rounded-full blur-3xl" />

      {/* Círculo decorativo */}
      <div
        className="
          absolute
          hidden
          lg:block
          right-[6%]
          top-1/2
          -translate-y-1/2
          w-[620px]
          h-[620px]
          border
          border-green-500/10
          rounded-full
        "
      />

      {/* ========================================= */}
      {/* CONTEÚDO */}
      {/* ========================================= */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-6
          md:px-12
          grid
          grid-cols-1
          lg:grid-cols-[1.05fr_0.95fr]
          items-center
          gap-14
          lg:gap-8
        "
      >
        {/* ========================================= */}
        {/* TEXTO */}
        {/* ========================================= */}

        <div
          data-aos="fade-up"
          className="
            text-center
            lg:text-left
            max-w-3xl
            mx-auto
            lg:mx-0
          "
        >
          {/* Badge */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-green-500/20
              bg-green-500/10
              text-green-600
              text-sm
              font-bold
              mb-7
            "
          >
            <span
              className="
                w-2
                h-2
                rounded-full
                bg-green-500
              "
            />

            Modelos de negócio Fortiva Cred
          </div>

          {/* Headline */}
          <h1
            className="
              font-extrabold
              tracking-tight
              leading-[0.95]
              text-blue-950
              text-5xl
              md:text-7xl
              xl:text-[82px]
            "
          >
            Tenha sua própria
            <span className="block text-green-500">
              operação Fortiva.
            </span>
          </h1>

          {/* Descrição */}
          <p
            className="
              mt-8
              text-lg
              md:text-xl
              text-slate-600
              leading-relaxed
              max-w-2xl
              mx-auto
              lg:mx-0
            "
          >
            Entre para um modelo de negócio voltado ao mercado de{" "}
            <strong className="text-blue-950">
              crédito, seguros e soluções financeiras
            </strong>
            , com estrutura, treinamento e suporte para desenvolver sua
            operação.
          </p>

          {/* Benefícios rápidos */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              justify-center
              lg:justify-start
              gap-x-7
              gap-y-3
            "
          >
            <div className="flex items-center gap-2">
              <div
                className="
                  w-6
                  h-6
                  rounded-full
                  bg-green-500
                  text-white
                  flex
                  items-center
                  justify-center
                  text-[10px]
                "
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>

              <span className="text-sm font-semibold text-blue-950">
                Treinamento
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div
                className="
                  w-6
                  h-6
                  rounded-full
                  bg-green-500
                  text-white
                  flex
                  items-center
                  justify-center
                  text-[10px]
                "
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>

              <span className="text-sm font-semibold text-blue-950">
                Suporte à operação
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div
                className="
                  w-6
                  h-6
                  rounded-full
                  bg-green-500
                  text-white
                  flex
                  items-center
                  justify-center
                  text-[10px]
                "
              >
                <FontAwesomeIcon icon={faCheck} />
              </div>

              <span className="text-sm font-semibold text-blue-950">
                Estrutura comercial
              </span>
            </div>
          </div>

          {/* CTA */}
          <div
            className="
              mt-10
              flex
              flex-col
              sm:flex-row
              items-center
              justify-center
              lg:justify-start
              gap-4
            "
          >
            <button
              type="button"
              onClick={irParaModelos}
              className="
                group
                inline-flex
                items-center
                justify-center
                gap-3
                bg-green-500
                text-white
                font-bold
                px-8
                py-4
                rounded-full
                shadow-xl
                shadow-green-500/25
                hover:bg-green-600
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Conhecer os modelos

              <FontAwesomeIcon
                icon={faArrowRight}
                className="
                  text-sm
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </button>

            <Link
              to="/falar-whatsapp"
              className="
                inline-flex
                items-center
                justify-center
                text-blue-950
                font-bold
                px-8
                py-4
                rounded-full
                border
                border-blue-950/15
                bg-white/70
                backdrop-blur
                hover:border-green-500
                hover:text-green-600
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Falar com um consultor
            </Link>
          </div>
        </div>

        {/* ========================================= */}
        {/* VISUAL */}
        {/* ========================================= */}

        <div
          data-aos="fade-left"
          className="
            relative
            flex
            justify-center
            items-end
            min-h-[540px]
            lg:min-h-[680px]
          "
        >
          {/* Background atrás do personagem */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[420px]
              h-[420px]
              md:w-[520px]
              md:h-[520px]
              rounded-full
              bg-gradient-to-br
              from-green-500/20
              via-green-500/5
              to-blue-950/10
              blur-sm
            "
          />

          {/* Círculo interno */}
          <div
            className="
              absolute
              top-1/2
              left-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-[390px]
              h-[390px]
              md:w-[470px]
              md:h-[470px]
              border
              border-green-500/20
              rounded-full
            "
          />

          {/* Imagem */}
          <img
            src="/homem-fortiva.png"
            alt="Fortiva Cred"
            className="
              relative
              z-10
              w-full
              max-w-[600px]
              object-contain
              drop-shadow-2xl
            "
          />

          {/* ========================================= */}
          {/* CARDS FLUTUANTES */}
          {/* ========================================= */}

          {/* Card superior */}
          <div
            className="
              absolute
              z-20
              top-[10%]
              right-0
              md:right-[2%]
              bg-white/90
              backdrop-blur-xl
              border
              border-white
              shadow-2xl
              shadow-blue-950/10
              rounded-2xl
              p-4
              hidden
              sm:block
            "
          >
            <p className="text-xs text-slate-500">
              Escolha sua estrutura
            </p>

            <p className="mt-1 font-extrabold text-blue-950">
              3 modelos disponíveis
            </p>
          </div>

          {/* Cards de modelos */}
          <div
            className="
              absolute
              z-30
              left-1/2
              -translate-x-1/2
              bottom-0
              w-full
              max-w-[560px]
              grid
              grid-cols-3
              gap-2
              md:gap-3
              px-2
            "
          >
            {modelos.map((modelo) => (
              <div
                key={modelo.nome}
                className="
                  group
                  bg-white/95
                  backdrop-blur-xl
                  border
                  border-slate-200
                  shadow-xl
                  shadow-blue-950/10
                  rounded-2xl
                  p-3
                  md:p-4
                  hover:-translate-y-2
                  hover:border-green-500/40
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    w-9
                    h-9
                    rounded-xl
                    bg-green-500/10
                    text-green-600
                    flex
                    items-center
                    justify-center
                    text-sm
                  "
                >
                  <FontAwesomeIcon icon={modelo.icon} />
                </div>

                <p
                  className="
                    mt-3
                    text-sm
                    md:text-base
                    font-extrabold
                    text-blue-950
                  "
                >
                  {modelo.nome}
                </p>

                <p className="mt-1 text-[10px] md:text-xs text-slate-500">
                  Participação
                </p>

                <p
                  className="
                    mt-0.5
                    text-lg
                    md:text-xl
                    font-extrabold
                    text-green-500
                  "
                >
                  {modelo.lucro}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* INDICADOR */}
      {/* ========================================= */}

      <button
        type="button"
        onClick={irParaModelos}
        className="
          absolute
          z-20
          bottom-6
          left-1/2
          -translate-x-1/2
          hidden
          lg:flex
          flex-col
          items-center
          gap-2
          text-slate-400
          hover:text-green-500
          transition-colors
        "
      >
        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.2em]
            font-bold
          "
        >
          Descubra
        </span>

        <span className="animate-bounce text-xl">↓</span>
      </button>
    </section>
  );
}

export default Hero;