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
} from "@fortawesome/free-solid-svg-icons";

function BusinessModel() {
  const [aberto, setAberto] = useState(null);

  const models = [
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
        "Kit de identidade Visual (banner interno, adesivos, agenda, calendários, etc)",
        "Consultoria semestral: gestão de carteira de clientes, atualizações e gestão financeira",
        "Relatórios Avançados: Performance e indicadores",
        "Sistema CRM para cadastro e comissionamento",
        "Desconto personalizado em gráficas para impressões de materiais",
      ],
    },

    {
      name: "BoxBank",
      subtitle: "Operação completa",
      icon: faBoxOpen,

      lucro: "80%",
      royalties: "Royalties Fixo",

      pagamento:
        "35% no fechamento do contrato + 20% na entrega do container + 5x sem juros no boleto",

      acessos: "5 Acessos",

      destaque: false,

      itens: [
        '1 Container 20” em cessão onerosa, totalmente equipado com banheiro, mesas de atendimento, mobiliado, climatizado, personalizado, sinalização externa e equipamentos de informática (computadores e impressora)',
        "5 Acessos",
        "Todas as linhas de crédito, clube de vantagens e telemedicina",
        "Treinamento da Plataforma (Presencial e Híbrido)",
        "Treinamento da Equipe",
        "Treinamento avançado em crédito e compliance",
        "02 Uniformes para 5 atendentes (2x ao ano) + camisas promocionais",
        "1 Viagem/ano para reciclagem e cursos p/ 2 pessoas*",
        "Material de Marketing Dedicado (faixas, panfletos, etc)",
        "1 milheiro mensal de material promocional",
        "1 Curso de Microcrédito e gestão financeira",
        "Suporte Remoto e técnico avançado prioritário",
        "Manual de Operação Simplificado",
        "Kit de identidade Visual (banner interno, adesivos, agenda, calendários, etc)",
        "Consultoria semestral: gestão de carteira de clientes, atualizações e gestão financeira",
        "Relatórios Avançados: Performance e indicadores",
        "Sistema completo de gestão de módulos extras: CRM, relatórios financeiros e integração bancária",
        "Campanha de Inauguração (marketing local, mídia digital e suporte em divulgação)",
        "Suporte Contábil",
        "Desconto personalizado em gráficas para impressões de materiais",
        "Assessoria para análise do ponto comercial",
      ],
    },
  ];

  const toggleModelo = (index) => {
    setAberto(aberto === index ? null : index);
  };

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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.16),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(56,189,248,0.12),transparent_30%),linear-gradient(135deg,#172554_0%,#0f172a_100%)]" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:42px_42px]" />

      {/* CÍRCULOS */}
      <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[620px] h-[620px] border border-green-400/20 rounded-full" />

      <div className="absolute -bottom-52 -right-52 w-[580px] h-[580px] border border-green-400/20 rounded-full" />

      {/* PONTOS */}
      <div className="absolute top-16 left-10 hidden md:grid grid-cols-4 gap-2">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 bg-green-400 rounded-full"
          />
        ))}
      </div>

      <div className="absolute bottom-20 right-16 hidden md:grid grid-cols-5 gap-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 bg-green-400 rounded-full"
          />
        ))}
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
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
            Escolha seu modelo de{" "}
            <span className="font-extrabold text-green-400">
              negócio.
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
            Conheça as estruturas disponíveis e encontre o modelo mais adequado
            para iniciar sua operação com a Fortiva Cred.
          </p>
        </div>

        {/* CARDS */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-3
            gap-7
            items-start
          "
        >
          {models.map((model, index) => {
            const estaAberto = aberto === index;

            return (
              <div
                key={model.name}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className={`
                  relative
                  overflow-hidden
                  rounded-[32px]
                  transition-all
                  duration-500
                  border

                  ${
                    model.destaque
                      ? "bg-white border-green-400 shadow-2xl shadow-green-500/15 lg:-translate-y-4"
                      : "bg-white/95 border-white/10 hover:-translate-y-2 hover:shadow-2xl"
                  }
                `}
              >
                {/* DESTAQUE OFFICE */}
                {model.destaque && (
                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      w-full
                      bg-green-500
                      text-white
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      font-bold
                      text-center
                      py-2
                    "
                  >
                    Modelo em destaque
                  </div>
                )}

                <div
                  className={`
                    p-7
                    md:p-8
                    ${model.destaque ? "pt-14" : ""}
                  `}
                >
                  {/* ÍCONE */}
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
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-slate-400
                      "
                    >
                      0{index + 1}
                    </span>
                  </div>

                  {/* TÍTULO */}
                  <div className="mt-7">
                    <p className="text-sm text-slate-500 font-medium">
                      {model.subtitle}
                    </p>

                    <h3
                      className="
                        mt-1
                        text-4xl
                        font-extrabold
                        text-blue-950
                      "
                    >
                      {model.name}
                    </h3>
                  </div>

                  {/* LUCRO */}
                  <div
                    className="
                      mt-8
                      rounded-2xl
                      bg-blue-950
                      p-5
                      text-white
                    "
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          w-11
                          h-11
                          rounded-full
                          bg-green-500
                          flex
                          items-center
                          justify-center
                        "
                      >
                        <FontAwesomeIcon icon={faPercent} />
                      </div>

                      <div>
                        <p className="text-xs text-slate-300">
                          Participação no resultado
                        </p>

                        <p className="text-2xl font-extrabold">
                          Lucro de{" "}
                          <span className="text-green-400">
                            {model.lucro}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-sm text-slate-300">
                        {model.royalties}
                      </p>
                    </div>
                  </div>

                  {/* PAGAMENTO */}
                  <div
                    className="
                      mt-6
                      flex
                      items-start
                      gap-4
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
                          text-xs
                          text-slate-500
                          uppercase
                          tracking-wide
                          font-bold
                        "
                      >
                        Forma de pagamento
                      </p>

                      <p
                        className="
                          mt-1
                          text-sm
                          text-blue-950
                          font-bold
                          leading-relaxed
                        "
                      >
                        {model.pagamento}
                      </p>
                    </div>
                  </div>

                  {/* ACESSOS */}
                  <div
                    className="
                      mt-6
                      py-4
                      border-y
                      border-slate-100
                      flex
                      items-center
                      justify-between
                    "
                  >
                    <span className="text-sm text-slate-500">
                      Plataforma Fortiva
                    </span>

                    <span
                      className="
                        bg-green-500/10
                        text-green-700
                        text-sm
                        font-bold
                        px-3
                        py-1.5
                        rounded-full
                      "
                    >
                      {model.acessos}
                    </span>
                  </div>

                  {/* PRIMEIROS BENEFÍCIOS */}
                  <div className="mt-6 space-y-3">
                    {model.itens.slice(0, 4).map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="
                          flex
                          items-start
                          gap-3
                        "
                      >
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="
                            text-green-500
                            mt-1
                            shrink-0
                          "
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

                  {/* RESTANTE DOS BENEFÍCIOS */}
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
                            className="
                              flex
                              items-start
                              gap-3
                            "
                          >
                            <FontAwesomeIcon
                              icon={faCircleCheck}
                              className="
                                text-green-500
                                mt-1
                                shrink-0
                              "
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
                    </div>
                  </div>

                  {/* VER MAIS */}
                  {model.itens.length > 4 && (
                    <button
                      type="button"
                      onClick={() => toggleModelo(index)}
                      className="
                        mt-6
                        w-full
                        flex
                        items-center
                        justify-center
                        gap-2
                        text-blue-950
                        font-bold
                        text-sm
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
                          duration-300

                          ${estaAberto ? "rotate-180" : ""}
                        `}
                      />
                    </button>
                  )}

                  {/* CTA PARA O FORMULÁRIO */}
                  <a
                    href="#contato"
                    className="
                      mt-8
                      w-full
                      bg-green-500
                      text-white
                      font-bold
                      py-4
                      px-6
                      rounded-full
                      flex
                      items-center
                      justify-center
                      gap-3
                      hover:bg-green-600
                      hover:-translate-y-1
                      transition-all
                      duration-300
                      shadow-lg
                      shadow-green-500/20
                    "
                  >
                    Quero conhecer o {model.name}

                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-sm"
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* INFORMAÇÃO FINAL */}
        <div
          data-aos="fade-up"
          className="
            mt-16
            max-w-4xl
            mx-auto
            text-center
          "
        >
          <FontAwesomeIcon
            icon={faStar}
            className="text-green-400"
          />

          <p
            className="
              mt-4
              text-slate-300
              leading-relaxed
            "
          >
            Converse com nossa equipe para conhecer mais detalhes sobre os
            modelos de implantação e identificar a estrutura mais adequada para
            sua operação.
          </p>

          {/* CTA FINAL PARA O FORMULÁRIO */}
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