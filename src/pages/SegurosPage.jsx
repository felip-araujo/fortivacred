import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faShieldHalved,
  faCar,
  faHouse,
  faHeartPulse,
  faPlane,
  faBuilding,
  faCheck,
  faArrowRight,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

function SegurosPage() {
  const beneficios = [
    "Cobertura para vida, bens e viagens",
    "Planos sob medida para cada necessidade",
    "Atendimento rápido e suporte completo",
  ];

  const seguros = [
    {
      titulo: "Seguro Auto",
      icon: faCar,
      descricao:
        "Cobertura contra colisão, roubo, furto, incêndio e assistência 24 horas, para você dirigir com total tranquilidade.",
    },
    {
      titulo: "Seguro Residencial",
      icon: faHouse,
      descricao:
        "Proteção contra incêndios, roubos, danos elétricos e muito mais, com assistência 24h para emergências no seu lar.",
    },
    {
      titulo: "Seguro de Vida e Acidentes Pessoais",
      icon: faHeartPulse,
      descricao:
        "Segurança financeira para sua família em casos de falecimento ou invalidez, com planos sob medida para cada fase da vida.",
    },
    {
      titulo: "Seguro Viagem",
      icon: faPlane,
      descricao:
        "Assistência médica, odontológica e proteção completa contra imprevistos durante viagens nacionais ou internacionais.",
    },
    {
      titulo: "Seguro Empresarial",
      icon: faBuilding,
      descricao:
        "Soluções sob medida para proteger seu negócio, com cobertura para imóveis comerciais, frotas e responsabilidade civil.",
    },
  ];

  return (
    <main className="bg-white overflow-hidden">
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section
        className="
          relative
          min-h-[90vh]
          flex
          items-center
          overflow-hidden
          pt-32
          pb-20
        "
      >
        {/* Fundo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_85%_35%,rgba(30,64,175,0.10),transparent_30%),linear-gradient(135deg,#ffffff_0%,#f8fafc_55%,#eef6ff_100%)]" />

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

        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-green-500/10 rounded-full blur-3xl" />

        <div
          className="
            relative
            z-10
            max-w-7xl
            w-full
            mx-auto
            px-6
            md:px-12
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-14
            items-center
          "
        >
          {/* TEXTO */}
          <div data-aos="fade-up">
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
              <FontAwesomeIcon icon={faShieldHalved} />
              Seguros Fortiva
            </span>

            <h1
              className="
                mt-7
                text-5xl
                md:text-7xl
                lg:text-[76px]
                font-extrabold
                text-blue-950
                tracking-tight
                leading-[0.98]
              "
            >
              Proteção personalizada
              <span className="block text-green-500">para o que importa.</span>
            </h1>

            <p
              className="
                mt-7
                text-xl
                md:text-2xl
                text-slate-600
                leading-relaxed
                max-w-2xl
              "
            >
              Sua vida, seus bens e sua família protegidos com soluções pensadas
              para oferecer mais segurança e tranquilidade.
            </p>

            <Link
              to="/falar-whatsapp"
              className="
                group
                mt-10
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
              Saiba mais
              <FontAwesomeIcon
                icon={faArrowRight}
                className="
                  text-sm
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </Link>
          </div>

          {/* VISUAL */}
          <div
            data-aos="fade-left"
            className="
    relative
    w-full
    max-w-[650px]
    mx-auto
    lg:mx-0
  "
          >
            {/* CONTAINER DA IMAGEM */}
            <div
              className="
      relative
      w-full
      aspect-[4/3]
      bg-white
      rounded-[40px]
      overflow-hidden
      shadow-2xl
      shadow-blue-950/10
      border
      border-blue-950/5
    "
            >
              <img
                src="items.png"
                alt="Seguros Fortiva Cred"
                className="
        absolute
        inset-0
        w-full
        h-full
        object-contain
        object-center
        p-3
        md:p-5
      "
              />
            </div>

            {/* CARD FLUTUANTE */}
            <div
              className="
      relative
      z-20
      mt-[-55px]
      ml-4
      md:ml-[-30px]
      bg-white/95
      backdrop-blur-xl
      border
      border-blue-950/5
      rounded-[28px]
      p-5
      md:p-6
      shadow-2xl
      shadow-blue-950/15
      max-w-[290px]
    "
            >
              <div
                className="
        w-12
        h-12
        rounded-2xl
        bg-green-500
        text-white
        flex
        items-center
        justify-center
        shadow-lg
        shadow-green-500/20
      "
              >
                <FontAwesomeIcon icon={faShieldHalved} />
              </div>

              <p className="mt-4 font-extrabold text-blue-950 text-lg">
                Proteção para cada momento
              </p>

              <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                Soluções para você, sua família e seu patrimônio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* PROTEÇÃO / BENEFÍCIOS */}
      {/* ================================================= */}

      <section className="relative py-24 md:py-32 bg-slate-50">
        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            md:px-12
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-16
            items-center
          "
        >
          <div data-aos="fade-right">
            <span className="text-green-500 text-sm font-extrabold uppercase tracking-[0.2em]">
              Proteção, segurança e transparência
            </span>

            <h2
              className="
                mt-5
                text-4xl
                md:text-6xl
                font-extrabold
                text-blue-950
                tracking-tight
                leading-[1.05]
              "
            >
              Proteção que faz sentido para
              <span className="block text-green-500">você e sua família.</span>
            </h2>

            <p
              className="
                mt-7
                text-lg
                text-slate-600
                leading-relaxed
                max-w-xl
              "
            >
              Cobertura completa e personalizada para garantir sua tranquilidade
              em diferentes situações.
            </p>
          </div>

          <div data-aos="fade-left" className="space-y-4">
            {beneficios.map((beneficio) => (
              <div
                key={beneficio}
                className="
                  group
                  bg-white
                  border
                  border-slate-200
                  rounded-2xl
                  p-5
                  md:p-6
                  flex
                  items-center
                  gap-4
                  shadow-sm
                  hover:border-green-500/40
                  hover:-translate-y-1
                  hover:shadow-xl
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                    w-11
                    h-11
                    shrink-0
                    rounded-full
                    bg-green-500/10
                    text-green-600
                    flex
                    items-center
                    justify-center
                    group-hover:bg-green-500
                    group-hover:text-white
                    transition-all
                  "
                >
                  <FontAwesomeIcon icon={faCheck} />
                </div>

                <p className="font-bold text-blue-950">{beneficio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* PROPÓSITO */}
      {/* ================================================= */}

      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            data-aos="fade-up"
            className="
              max-w-4xl
              mx-auto
              text-center
            "
          >
            <span
              className="
                inline-flex
                px-4
                py-2
                rounded-full
                bg-green-500/10
                text-green-600
                text-sm
                uppercase
                tracking-[0.2em]
                font-extrabold
              "
            >
              Propósito
            </span>

            <h2
              className="
                mt-6
                text-4xl
                md:text-6xl
                font-extrabold
                text-blue-950
                tracking-tight
                leading-[1.08]
              "
            >
              Proteção completa para você,
              <span className="text-green-500">
                {" "}
                sua família e seu patrimônio.
              </span>
            </h2>

            <p
              className="
                mt-7
                text-lg
                text-slate-600
                leading-relaxed
              "
            >
              Na Fortiva Cred, entendemos que cada pessoa possui necessidades
              únicas. Por isso, nossos seguros são pensados para oferecer
              proteção completa e personalizada, garantindo mais tranquilidade
              em todos os momentos.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* TIPOS DE SEGURO */}
      {/* ================================================= */}

      <section className="relative py-24 md:py-32 bg-blue-950 overflow-hidden">
        {/* Fundo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.15),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(56,189,248,0.10),transparent_30%)]" />

        <div className="absolute inset-0 opacity-[0.10] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:42px_42px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-14">
            <span className="text-green-400 uppercase tracking-[0.2em] text-sm font-extrabold">
              Nossas soluções
            </span>

            <h2
              className="
                mt-5
                text-4xl
                md:text-6xl
                text-white
                font-extrabold
                tracking-tight
              "
            >
              Um seguro para cada
              <span className="block text-green-400">momento da sua vida.</span>
            </h2>
          </div>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              lg:grid-cols-3
              gap-5
            "
          >
            {seguros.map((seguro, index) => (
              <div
                key={seguro.titulo}
                data-aos="fade-up"
                data-aos-delay={index * 80}
                className="
                  group
                  relative
                  bg-white/[0.08]
                  backdrop-blur
                  border
                  border-white/10
                  rounded-[28px]
                  p-7
                  hover:bg-white
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-green-400/15
                    text-green-400
                    flex
                    items-center
                    justify-center
                    text-xl
                    group-hover:bg-green-500
                    group-hover:text-white
                    transition-all
                  "
                >
                  <FontAwesomeIcon icon={seguro.icon} />
                </div>

                <h3
                  className="
                    mt-7
                    text-xl
                    font-extrabold
                    text-white
                    group-hover:text-blue-950
                    transition-colors
                  "
                >
                  {seguro.titulo}
                </h3>

                <p
                  className="
                    mt-4
                    text-sm
                    text-slate-300
                    leading-relaxed
                    group-hover:text-slate-600
                    transition-colors
                  "
                >
                  {seguro.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* CTA FINAL */}
      {/* ================================================= */}

      <section className="relative py-24 md:py-32 px-6 md:px-12">
        <div
          data-aos="fade-up"
          className="
            relative
            overflow-hidden
            max-w-7xl
            mx-auto
            rounded-[40px]
            bg-gradient-to-br
            from-green-500
            to-green-600
            px-7
            py-14
            md:px-14
            md:py-20
          "
        >
          <div className="absolute -right-24 -top-24 w-[350px] h-[350px] bg-white/10 rounded-full blur-2xl" />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              lg:flex-row
              items-start
              lg:items-center
              justify-between
              gap-10
            "
          >
            <div className="max-w-3xl">
              <div
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/15
                  text-white
                  flex
                  items-center
                  justify-center
                  text-xl
                "
              >
                <FontAwesomeIcon icon={faHeadset} />
              </div>

              <h2
                className="
                  mt-6
                  text-3xl
                  md:text-5xl
                  text-white
                  font-extrabold
                  tracking-tight
                  leading-tight
                "
              >
                Quero meu seguro na Fortiva!
              </h2>

              <p className="mt-5 text-white/85 text-lg leading-relaxed">
                Converse com nossa equipe e encontre uma opção de proteção
                adequada às suas necessidades.
              </p>
            </div>

            <Link
              to="/falar-whatsapp"
              className="
                group
                shrink-0
                bg-white
                text-blue-950
                font-extrabold
                px-8
                py-4
                rounded-full
                flex
                items-center
                gap-3
                shadow-xl
                hover:-translate-y-1
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              Falar com um consultor
              <FontAwesomeIcon
                icon={faArrowRight}
                className="
                  text-green-500
                  group-hover:translate-x-1
                  transition-transform
                "
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SegurosPage;
