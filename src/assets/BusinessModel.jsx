import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHouse,
  faBuilding,
  faBoxOpen,
  faPercent,
  faCreditCard,
  faCircleCheck,
  faChevronDown,
  faArrowRight,
  faStar,
  faLaptop,
  faChartLine,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

function BusinessModel() {
  const [aberto, setAberto] = useState(null);
  const [imagemBoxBank, setImagemBoxBank] = useState(0);

  const modelosCompactos = [
    {
      name: "Home",
      subtitle: "Modelo essencial",
      icon: faHouse,
      lucro: "70%",
      royalties: "Royalties Fixo",
      pagamento: "50% de entrada + 10x sem juros no boleto",
      acessos: "1 Acesso",
      destaque: false,

      itens: [
        "1 Acesso",
        "Todas as linhas de crédito EXCETO crédito Agro e Financiamento de Construção e Construtora",
        "Treinamento da Plataforma",
        "Material de Marketing Básico Digital",
        "Artes padrão para panfletos",
        "1 Curso de Microcrédito e gestão financeira",
        "Suporte Remoto",
        "Manual de Operação Simplificado",
      ],
    },

    {
      name: "Office",
      subtitle: "Estrutura para equipes",
      icon: faBuilding,
      lucro: "75%",
      royalties: "Royalties Fixo",
      pagamento: "50% de entrada + 10x sem juros no boleto",
      acessos: "3 Acessos",
      destaque: true,

      itens: [
        "3 Acessos",
        "Todas as linhas de crédito EXCETO Financiamento de Construção e Construtora",
        "Treinamento da Plataforma (Presencial e Híbrido)",
        "Treinamento da Equipe",
        "02 Uniformes para 3 atendentes (2x ao ano)",
        "1 Viagem/ano para reciclagem e cursos*",
        "Material de Marketing Básico Digital",
        "Arte padrão para panfletos e crachás",
        "1 Curso de Microcrédito e gestão financeira",
        "Suporte Remoto",
        "Manual de Operação Simplificado",
        "Kit de identidade Visual",
        "Consultoria semestral",
        "Relatórios Avançados",
        "Sistema CRM para cadastro e comissionamento",
        "Desconto personalizado em gráficas",
      ],
    },
  ];

  const boxBank = {
    name: "BoxBank",
    lucro: "80%",
    royalties: "Royalties Fixo",
    acessos: "5 Acessos",

    pagamento:
      "35% no fechamento do contrato + 20% na entrega do container + 5x sem juros no boleto",

    itens: [
      "1 Container 20” em cessão onerosa, totalmente equipado com banheiro, mesas de atendimento, mobiliado, climatizado, personalizado, sinalização externa e equipamentos de informática",
      "5 Acessos",
      "Todas as linhas de crédito, clube de vantagens e telemedicina",
      "Treinamento da Plataforma (Presencial e Híbrido)",
      "Treinamento da Equipe",
      "Treinamento avançado em crédito e compliance",
      "02 Uniformes para 5 atendentes (2x ao ano) + camisas promocionais",
      "1 Viagem/ano para reciclagem e cursos p/ 2 pessoas*",
      "Material de Marketing Dedicado",
      "1 milheiro mensal de material promocional",
      "1 Curso de Microcrédito e gestão financeira",
      "Suporte Remoto e técnico avançado prioritário",
      "Manual de Operação Simplificado",
      "Kit de identidade Visual",
      "Consultoria semestral",
      "Relatórios Avançados",
      "Sistema completo de gestão com CRM, relatórios financeiros e integração bancária",
      "Campanha de Inauguração",
      "Suporte Contábil",
      "Desconto personalizado em gráficas",
      "Assessoria para análise do ponto comercial",
    ],
  };

  const portfolioBoxBank = [
    {
      src: "container.png",
      titulo: "Estrutura física BoxBank",
      descricao:
        "Container equipado, personalizado e preparado para iniciar a operação.",
      tipo: "estrutura",
    },

    {
      src: "sistema-dashboard.png",
      titulo: "Visão geral da operação",
      descricao: "Acompanhamento da operação através da plataforma Fortiva.",
      tipo: "sistema",
    },

    {
      src: "aulas.png",
      titulo: "Videoaulas didáticas",
      descricao:
        "Sistema de treinamento completo para capacitar os colaboradores em vendas",
      tipo: "sistema",
    },
  ];

  const toggleModelo = (index) => {
    setAberto(aberto === index ? null : index);
  };

  const imagemAtual = portfolioBoxBank[imagemBoxBank];

  return (
    <section
      id="modelo-negocio"
      className="
        relative
        bg-blue-950
        overflow-hidden
        py-24
        md:py-32
      "
    >
      {/* FUNDO */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(34,197,94,0.15),transparent_28%),radial-gradient(circle_at_90%_75%,rgba(59,130,246,0.12),transparent_28%),linear-gradient(135deg,#172554_0%,#0f172a_100%)]" />

      <div className="absolute inset-0 opacity-[0.1] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:42px_42px]" />

      <div className="absolute -top-56 right-[-180px] w-[580px] h-[580px] border border-green-400/15 rounded-full" />

      <div className="absolute -bottom-64 -left-52 w-[620px] h-[620px] border border-blue-400/15 rounded-full" />

      {/* CONTEÚDO */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* CABEÇALHO */}

        <div className="max-w-3xl mb-16">
          <span
            data-aos="fade-up"
            className="
              inline-flex
              items-center
              px-4
              py-2
              mb-6
              rounded-full
              bg-green-400/10
              border
              border-green-400/20
              text-green-400
              text-sm
              font-bold
            "
          >
            Faça parte da Fortiva Cred
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="
              text-4xl
              md:text-6xl
              font-light
              text-white
              leading-tight
            "
          >
            Um modelo para cada{" "}
            <span className="font-extrabold text-green-400">
              momento do negócio.
            </span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="
              mt-6
              text-lg
              text-slate-300
              leading-relaxed
              max-w-2xl
            "
          >
            Da operação mais compacta a uma estrutura física completa, conheça
            as opções disponíveis para atuar com a Fortiva Cred.
          </p>
        </div>

        {/* ========================================== */}
        {/* HOME + OFFICE */}
        {/* ========================================== */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-7
            max-w-5xl
          "
        >
          {modelosCompactos.map((model, index) => {
            const estaAberto = aberto === index;

            return (
              <div
                key={model.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className={`
                  relative
                  overflow-hidden
                  rounded-[32px]
                  bg-white
                  border
                  transition-all
                  duration-500

                  ${
                    model.destaque
                      ? "border-green-400 shadow-2xl shadow-green-500/10"
                      : "border-white/10"
                  }
                `}
              >
                {model.destaque && (
                  <div
                    className="
                      absolute
                      top-0
                      right-0
                      bg-green-500
                      text-white
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      font-bold
                      px-5
                      py-2
                    "
                  >
                    Em destaque
                  </div>
                )}

                <div className="p-7 md:p-9">
                  {/* TOPO */}

                  <div className="flex items-start justify-between">
                    <div
                      className="
                        w-14
                        h-14
                        rounded-2xl
                        bg-green-500/10
                        text-green-600
                        flex
                        items-center
                        justify-center
                        text-xl
                      "
                    >
                      <FontAwesomeIcon icon={model.icon} />
                    </div>

                    <span
                      className="
                        text-xs
                        uppercase
                        tracking-[0.16em]
                        text-slate-400
                        font-bold
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  <div className="mt-7">
                    <p className="text-sm text-slate-500">{model.subtitle}</p>

                    <h3 className="mt-1 text-4xl font-extrabold text-blue-950">
                      {model.name}
                    </h3>
                  </div>

                  {/* INFORMAÇÕES PRINCIPAIS */}

                  <div
                    className="
                      mt-7
                      grid
                      grid-cols-2
                      gap-3
                    "
                  >
                    <div
                      className="
                        rounded-2xl
                        bg-blue-950
                        p-5
                        text-white
                      "
                    >
                      <p className="text-xs text-slate-300">Participação</p>

                      <p className="mt-1 text-2xl font-extrabold text-green-400">
                        {model.lucro}
                      </p>
                    </div>

                    <div
                      className="
                        rounded-2xl
                        bg-slate-50
                        border
                        border-slate-100
                        p-5
                      "
                    >
                      <p className="text-xs text-slate-500">Plataforma</p>

                      <p className="mt-1 text-lg font-extrabold text-blue-950">
                        {model.acessos}
                      </p>
                    </div>
                  </div>

                  {/* PAGAMENTO */}

                  <div
                    className="
                      mt-6
                      flex
                      gap-4
                      items-start
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
                      "
                    >
                      <FontAwesomeIcon icon={faCreditCard} />
                    </div>

                    <div>
                      <p
                        className="
                          text-[11px]
                          uppercase
                          tracking-[0.15em]
                          text-slate-400
                          font-bold
                        "
                      >
                        Forma de pagamento
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          leading-relaxed
                          font-bold
                          text-blue-950
                        "
                      >
                        {model.pagamento}
                      </p>
                    </div>
                  </div>

                  {/* BENEFÍCIOS */}

                  <div className="mt-7 space-y-3">
                    {model.itens.slice(0, 4).map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-3">
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="text-green-500 mt-1 shrink-0"
                        />

                        <p className="text-sm text-slate-600 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div
                    className={`
                      grid
                      transition-all
                      duration-500

                      ${
                        estaAberto
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-3 space-y-3">
                        {model.itens.slice(4).map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="flex items-start gap-3"
                          >
                            <FontAwesomeIcon
                              icon={faCircleCheck}
                              className="text-green-500 mt-1 shrink-0"
                            />

                            <p className="text-sm text-slate-600 leading-relaxed">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleModelo(index)}
                    className="
                      mt-6
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-bold
                      text-blue-950
                      hover:text-green-600
                      transition-colors
                    "
                  >
                    {estaAberto
                      ? "Ver menos"
                      : `Ver tudo que está incluso (${model.itens.length})`}

                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`
                        transition-transform
                        ${estaAberto ? "rotate-180" : ""}
                      `}
                    />
                  </button>

                  <a
                    href="#contato"
                    className="
                      mt-8
                      w-full
                      rounded-full
                      bg-green-500
                      text-white
                      font-bold
                      py-4
                      px-6
                      flex
                      items-center
                      justify-center
                      gap-3
                      hover:bg-green-600
                      hover:-translate-y-1
                      transition-all
                    "
                  >
                    Quero conhecer o {model.name}
                    <FontAwesomeIcon icon={faArrowRight} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================== */}
        {/* DIVISOR */}
        {/* ========================================== */}

        <div
          data-aos="fade-up"
          className="
            mt-24
            mb-10
            flex
            items-center
            gap-5
          "
        >
          <div className="h-px flex-1 bg-white/10" />

          <span
            className="
              text-xs
              uppercase
              tracking-[0.25em]
              font-bold
              text-green-400
            "
          >
            Experiência completa
          </span>

          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* ========================================== */}
        {/* BOXBANK */}
        {/* ========================================== */}

        <div
          data-aos="fade-up"
          className="
            relative
            overflow-hidden
            rounded-[40px]
            bg-white
            border
            border-green-400/30
            shadow-2xl
            shadow-black/20
          "
        >
          {/* CABEÇALHO BOXBANK */}

          <div
            className="
              bg-blue-950
              px-7
              md:px-10
              py-9
              md:py-12
              grid
              grid-cols-1
              lg:grid-cols-[1fr_auto]
              gap-8
              items-end
            "
          >
            <div>
              <div
                className="
                  flex
                  items-center
                  gap-4
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-green-500
                    text-white
                    flex
                    items-center
                    justify-center
                    text-xl
                  "
                >
                  <FontAwesomeIcon icon={faBoxOpen} />
                </div>

                <div>
                  <p
                    className="
                      text-green-400
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      font-bold
                    "
                  >
                    Modelo 03
                  </p>

                  <h3
                    className="
                      text-4xl
                      md:text-5xl
                      font-extrabold
                      text-white
                    "
                  >
                    BoxBank
                  </h3>
                </div>
              </div>

              <p
                className="
                  mt-6
                  text-slate-300
                  text-lg
                  leading-relaxed
                  max-w-2xl
                "
              >
                Uma estrutura completa para quem busca uma operação física,
                tecnológica e preparada para oferecer o ecossistema Fortiva em
                uma unidade própria.
              </p>
            </div>

            <div
              className="
                flex
                flex-wrap
                gap-3
              "
            >
              <div
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  px-5
                  py-4
                "
              >
                <p className="text-xs text-slate-400">Participação</p>

                <p className="text-2xl font-extrabold text-green-400">
                  {boxBank.lucro}
                </p>
              </div>

              <div
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  px-5
                  py-4
                "
              >
                <p className="text-xs text-slate-400">Plataforma</p>

                <p className="text-lg font-extrabold text-white">
                  {boxBank.acessos}
                </p>
              </div>
            </div>
          </div>

          {/* ========================================== */}
          {/* MINI PORTFÓLIO */}
          {/* ========================================== */}

          <div
            className="
              p-6
              md:p-10
              grid
              grid-cols-1
              xl:grid-cols-[1.2fr_0.8fr]
              gap-10
            "
          >
            {/* GALERIA */}

            <div>
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  bg-slate-100
                  border
                  border-slate-200
                  min-h-[440px]
                  md:min-h-[560px]
                "
              >
                <img
                  src={imagemAtual.src}
                  alt={imagemAtual.titulo}
                  className={`
                    absolute
                    inset-0
                    w-full
                    h-full

                    ${
                      imagemAtual.tipo === "sistema"
                        ? "object-contain p-4 md:p-7"
                        : "object-cover"
                    }
                  `}
                />

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-[180px]
                    bg-gradient-to-t
                    from-blue-950/90
                    via-blue-950/50
                    to-transparent
                    pointer-events-none
                  "
                />

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    z-10
                    p-6
                    md:p-8
                  "
                >
                  <span
                    className="
                      inline-flex
                      bg-green-500
                      text-white
                      text-[10px]
                      uppercase
                      tracking-[0.18em]
                      font-bold
                      px-3
                      py-1.5
                      rounded-full
                    "
                  >
                    {imagemAtual.tipo === "estrutura"
                      ? "Estrutura física"
                      : "Sistema Fortiva"}
                  </span>

                  <h4
                    className="
                      mt-3
                      text-white
                      text-xl
                      md:text-2xl
                      font-extrabold
                    "
                  >
                    {imagemAtual.titulo}
                  </h4>

                  <p
                    className="
                      mt-2
                      text-sm
                      md:text-base
                      text-slate-200
                      max-w-xl
                    "
                  >
                    {imagemAtual.descricao}
                  </p>
                </div>
              </div>

              {/* MINIATURAS */}

              <div
                className="
                  mt-4
                  grid
                  grid-cols-2
                  md:grid-cols-4
                  gap-3
                "
              >
                {portfolioBoxBank.map((imagem, index) => (
                  <button
                    key={imagem.src}
                    type="button"
                    onClick={() => setImagemBoxBank(index)}
                    className={`
                      relative
                      overflow-hidden
                      rounded-2xl
                      h-[100px]
                      md:h-[115px]
                      border-2
                      transition-all
                      duration-300

                      ${
                        imagemBoxBank === index
                          ? "border-green-500 shadow-lg shadow-green-500/15"
                          : "border-slate-200 opacity-70 hover:opacity-100"
                      }
                    `}
                  >
                    <img
                      src={imagem.src}
                      alt={imagem.titulo}
                      className={`
                        w-full
                        h-full

                        ${
                          imagem.tipo === "sistema"
                            ? "object-contain bg-slate-50 p-2"
                            : "object-cover"
                        }
                      `}
                    />

                    {imagemBoxBank === index && (
                      <div
                        className="
                          absolute
                          inset-0
                          ring-2
                          ring-inset
                          ring-green-500
                          rounded-2xl
                        "
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* INFORMAÇÕES BOXBANK */}

            <div>
              <span
                className="
                  text-green-600
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  font-extrabold
                "
              >
                Estrutura + tecnologia
              </span>

              <h4
                className="
                  mt-3
                  text-3xl
                  md:text-4xl
                  font-extrabold
                  text-blue-950
                  leading-tight
                "
              >
                Muito além de uma unidade física.
              </h4>

              <p
                className="
                  mt-5
                  text-slate-600
                  leading-relaxed
                "
              >
                O BoxBank combina uma estrutura física personalizada com
                ferramentas de gestão, atendimento e acompanhamento da operação.
              </p>

              {/* 3 DESTAQUES */}

              <div className="mt-8 space-y-4">
                <div
                  className="
                    flex
                    gap-4
                    p-5
                    rounded-2xl
                    bg-slate-50
                    border
                    border-slate-100
                  "
                >
                  <div
                    className="
                      w-11
                      h-11
                      rounded-xl
                      bg-green-500/10
                      text-green-600
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <FontAwesomeIcon icon={faStore} />
                  </div>

                  <div>
                    <h5 className="font-extrabold text-blue-950">
                      Unidade física completa
                    </h5>

                    <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                      Container equipado, climatizado, mobiliado e personalizado
                      para a operação.
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    gap-4
                    p-5
                    rounded-2xl
                    bg-slate-50
                    border
                    border-slate-100
                  "
                >
                  <div
                    className="
                      w-11
                      h-11
                      rounded-xl
                      bg-green-500/10
                      text-green-600
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <FontAwesomeIcon icon={faLaptop} />
                  </div>

                  <div>
                    <h5 className="font-extrabold text-blue-950">
                      Sistema de Treinamento
                    </h5>

                    <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                      Sistema de treinamento completo para capacitar os
                      colaboradores em vendas, atendimento e em todos os
                      processos das principais linhas de crédito.
                    </p>
                  </div>
                </div>

                <div
                  className="
                    flex
                    gap-4
                    p-5
                    rounded-2xl
                    bg-slate-50
                    border
                    border-slate-100
                  "
                >
                  <div
                    className="
                      w-11
                      h-11
                      rounded-xl
                      bg-green-500/10
                      text-green-600
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <FontAwesomeIcon icon={faChartLine} />
                  </div>

                  <div>
                    <h5 className="font-extrabold text-blue-950">
                      Operação acompanhada
                    </h5>

                    <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                      Treinamentos, suporte prioritário e consultoria para
                      acompanhar o desenvolvimento da operação.
                    </p>
                  </div>
                </div>
              </div>

              {/* PAGAMENTO */}

              <div
                className="
                  mt-7
                  p-5
                  rounded-2xl
                  bg-blue-950
                  text-white
                "
              >
                <div className="flex gap-4 items-start">
                  <div
                    className="
                      w-11
                      h-11
                      rounded-full
                      bg-green-500
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <FontAwesomeIcon icon={faCreditCard} />
                  </div>

                  <div>
                    <p className="text-xs text-slate-400">Forma de pagamento</p>

                    <p className="mt-1 text-sm font-bold leading-relaxed">
                      {boxBank.pagamento}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================== */}
          {/* BENEFÍCIOS BOXBANK */}
          {/* ========================================== */}

          <div
            className="
              px-6
              md:px-10
              pb-10
            "
          >
            <div
              className="
                border-t
                border-slate-100
                pt-8
              "
            >
              <div
                className="
                  flex
                  flex-col
                  md:flex-row
                  md:items-center
                  md:justify-between
                  gap-4
                  mb-6
                "
              >
                <div>
                  <p
                    className="
                      text-xs
                      uppercase
                      tracking-[0.18em]
                      font-bold
                      text-green-600
                    "
                  >
                    O que está incluso
                  </p>

                  <h4
                    className="
                      mt-1
                      text-2xl
                      font-extrabold
                      text-blue-950
                    "
                  >
                    Estrutura completa para operar.
                  </h4>
                </div>

                <span
                  className="
                    bg-green-500/10
                    text-green-700
                    text-sm
                    font-bold
                    px-4
                    py-2
                    rounded-full
                  "
                >
                  {boxBank.itens.length} itens
                </span>
              </div>

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  lg:grid-cols-3
                  gap-x-8
                  gap-y-4
                "
              >
                {boxBank.itens.map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-start
                      gap-3
                    "
                  >
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-green-500 mt-1 shrink-0"
                    />

                    <p
                      className="
                        text-sm
                        text-slate-600
                        leading-relaxed
                      "
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#contato"
                className="
                  mt-9
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-green-500
                  text-white
                  font-bold
                  py-4
                  px-8
                  hover:bg-green-600
                  hover:-translate-y-1
                  transition-all
                  shadow-lg
                  shadow-green-500/20
                "
              >
                Quero conhecer o BoxBank
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </div>
          </div>
        </div>

        {/* ========================================== */}
        {/* FECHAMENTO */}
        {/* ========================================== */}

        <div
          data-aos="fade-up"
          className="
            mt-16
            max-w-4xl
            mx-auto
            text-center
          "
        >
          <FontAwesomeIcon icon={faStar} className="text-green-400" />

          <p
            className="
              mt-4
              text-slate-300
              leading-relaxed
            "
          >
            Converse com nossa equipe para conhecer os detalhes de cada modelo e
            entender qual estrutura faz mais sentido para sua operação.
          </p>

          <a
            href="#contato"
            className="
              group
              inline-flex
              items-center
              gap-3
              mt-7
              text-green-400
              font-bold
              hover:text-green-300
              transition-colors
            "
          >
            Quero receber mais informações
            <FontAwesomeIcon
              icon={faArrowRight}
              className="
                group-hover:translate-x-1
                transition-transform
              "
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default BusinessModel;
