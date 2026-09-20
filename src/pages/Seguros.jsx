import { useState } from "react";

const servicos = [
  {
    id: "seguros",
    numero: "01",
    titulo: "Seguros",
    chamada: "Cuide do que você conquistou. Proteja o que vem pela frente.",
    descricao:
      "A FORTIVA CRED oferece soluções em seguros para você seguir seus planos com mais tranquilidade, proteção e confiança. Seguros para você, sua família e seu patrimônio.",
    imagem: "seguros.jpg",
    itens: [
      {
        titulo: "Seguro Auto",
      },
      {
        titulo: "Seguro Residencial",
      },
      {
        titulo: "Seguro de Vida",
      },
      {
        titulo: "Seguro Viagem",
      },
      {
        titulo: "Seguro Empresarial",
      },
      {
        titulo: "Proteção Financeira",
      },
    ],
  },

  {
    id: "consignados",
    numero: "02",
    titulo: "Consignados",
    chamada: "Crédito com praticidade para diferentes perfis.",
    descricao:
      "Na FORTIVA CRED, você encontra soluções em crédito consignado para organizar suas finanças, realizar projetos ou buscar novas possibilidades. Oferecemos atendimento personalizado para identificar as opções mais adequadas ao seu perfil e às suas necessidades.",
    imagem: "consignados.jpg",
    itens: [
      {
        titulo: "Consignado INSS",
        descricao:
          "Crédito destinado a aposentados e pensionistas elegíveis, com parcelas descontadas diretamente do benefício.",
      },
      {
        titulo: "Consignado para Servidores Públicos",
        descricao:
          "Soluções de crédito para servidores de órgãos conveniados, com pagamento das parcelas por meio de desconto em folha.",
      },
      {
        titulo: "Consignado CLT",
        descricao:
          "Crédito destinado a trabalhadores com carteira assinada, com parcelas descontadas diretamente na folha de pagamento. Por meio da plataforma FORTIVA, a modalidade atende empregados do setor privado elegíveis, incluindo trabalhadores domésticos e rurais.",
      },
      {
        titulo: "Consignado Federal",
        descricao:
          "Solução de crédito consignado voltada a servidores públicos federais elegíveis, com pagamento das parcelas por desconto em folha. Uma alternativa para quem busca crédito com praticidade e condições adequadas ao seu vínculo funcional.",
      },
      {
        titulo: "Consignado SIAPE",
        descricao:
          "Crédito consignado destinado a servidores públicos federais vinculados ao SIAPE, com parcelas descontadas diretamente na folha de pagamento. Oferece praticidade na contratação e opções conforme a margem disponível e as condições das instituições financeiras parceiras.",
      },
    ],
  },

  {
    id: "emprestimos",
    numero: "03",
    titulo: "Empréstimo Pessoal",
    chamada: "Crédito para transformar planos em realidade.",
    descricao:
      "Crédito para ajudar você a transformar planos em realidade, organizar a vida financeira ou lidar com imprevistos. Na FORTIVA CRED, você encontra diferentes opções de empréstimo, de acordo com seu perfil e necessidade.",
    imagem: "emprestimos.jpg",
    itens: [
      {
        titulo: "Empréstimo Pessoal",
        descricao:
          "Crédito de uso livre para você utilizar conforme suas necessidades, com opções de valores, prazos e condições de acordo com a análise da instituição financeira.",
      },
      {
        titulo: "Empréstimo com Garantia de Veículo",
        descricao:
          "Modalidade de crédito que utiliza um veículo elegível como garantia da operação, oferecendo uma alternativa para quem precisa de recursos e possui um bem que pode ser utilizado na contratação.",
      },
      {
        titulo: "Empréstimo com Garantia de Imóvel",
        descricao:
          "Crédito que utiliza um imóvel elegível como garantia, indicado para quem busca uma solução financeira utilizando seu patrimônio como parte da operação.",
      },
      {
        titulo: "Antecipação de Recebíveis",
        descricao:
          "Solução que possibilita antecipar determinados valores a receber, proporcionando acesso a recursos antes da data originalmente prevista.",
      },
    ],
  },

  {
    id: "financiamentos",
    numero: "04",
    titulo: "Financiamentos",
    chamada: "Veículos e imóveis para seus próximos projetos.",
    descricao:
      "Realize seus projetos com soluções de financiamento para aquisição de veículos e imóveis. Na FORTIVA CRED, ajudamos você a encontrar opções de crédito de acordo com seu perfil, objetivo e capacidade financeira.",
    imagem: "financiamentos.jpg",
    itens: [
      {
        titulo: "Financiamento de Veículos",
        descricao:
          "Crédito destinado à aquisição de veículos, com opções para diferentes perfis e condições definidas conforme a instituição financeira e a análise da operação. O financiamento de veículos é uma modalidade amplamente oferecida na plataforma da FORTIVA CRED.",
      },
      {
        titulo: "Financiamento de Imóveis",
        descricao:
          "Solução de crédito para quem deseja adquirir um imóvel e realizar o projeto da casa própria ou investir em patrimônio.",
      },
      {
        titulo: "Financiamento de Motos",
        descricao:
          "Opções de financiamento para aquisição de motocicletas novas ou usadas, de acordo com as condições disponibilizadas pelas instituições financeiras parceiras.",
      },
      {
        titulo: "Financiamento de Imóveis Comerciais",
        descricao:
          "Alternativa para quem busca crédito para aquisição de imóvel destinado a atividades comerciais, conforme disponibilidade, análise e condições especiais da FORTIVA CRED.",
      },
      {
        titulo: "Refinanciamento de Veículos e Imóveis",
        descricao:
          "Feito para o cliente voltar a respirar financeiramente. Transforme o patrimônio em uma oportunidade de crédito. Com o refinanciamento de veículos ou imóveis, você renegocia um bem elegível e pode usar como garantia para obter recursos e realizar seus projetos, organizar suas finanças ou investir em novos planos, conforme análise e condições da instituição financeira parceira.",
      },
    ],
  },

  {
    id: "consorcios",
    numero: "05",
    titulo: "Consórcios",
    chamada: "Planejamento para suas próximas conquistas.",
    descricao:
      "Planeje suas próximas conquistas com soluções de consórcio para diferentes objetivos. Na FORTIVA CRED, você encontra alternativas para aquisição de imóveis, veículos, máquinas, equipamentos e serviços, além de opções voltadas às necessidades de empresas e produtores rurais.",
    imagem: "consorcios.jpg",
    itens: [
      {
        titulo: "Consórcio Tradicional",
        descricao:
          "Ideal para quem deseja planejar uma aquisição, participando de um grupo e aguardando a contemplação conforme as regras estabelecidas pela administradora.",
      },
      {
        titulo: "Consórcio Contemplado",
        descricao:
          "Opção para quem busca adquirir uma cota já contemplada, com possibilidade de utilização da carta de crédito após o cumprimento das condições e procedimentos da administradora.",
      },
      {
        titulo: "Consórcio de Veículos",
        descricao:
          "Voltado à aquisição planejada de automóveis e outros veículos, de acordo com a categoria e as regras da carta contratada.",
      },
      {
        titulo: "Consórcio de Imóveis",
        descricao:
          "Solução para quem deseja planejar a aquisição de imóveis utilizando uma carta de crédito imobiliária.",
      },
      {
        titulo: "Consórcio de Máquinas Agrícolas",
        descricao:
          "Uma alternativa para produtores e empresas que desejam planejar a aquisição de máquinas agrícolas, tratores e outros equipamentos elegíveis, preservando recursos para outras necessidades do negócio.",
      },
      {
        titulo: "Consórcio de Veículos Pesados e Equipamentos",
        descricao:
          "Voltado à aquisição de caminhões, veículos de carga, equipamentos rodoviários e outros bens elegíveis, incluindo diferentes categorias de bens móveis previstas no sistema.",
      },
      {
        titulo: "Consórcio Empresarial | Preservação de Capital de Giro",
        descricao:
          "Uma solução para empresas que desejam adquirir imóveis, veículos, máquinas ou equipamentos de maneira planejada, evitando utilizar recursos próprios destinados ao caixa da operação. O consórcio tradicional não funciona como uma linha de capital de giro de livre utilização. A carta deve ser utilizada de acordo com o objeto e as regras do contrato.",
      },
      {
        titulo: "Consórcio de Serviços",
        descricao:
          "Alternativa para contratação planejada de serviços elegíveis, conforme a categoria da carta e as condições estabelecidas pela administradora.",
      },
    ],
  },

  {
    id: "obras",
    numero: "06",
    titulo: "Obras e Construções",
    chamada: "Transforme projetos em empreendimentos.",
    descricao:
      "Soluções de crédito para transformar projetos em empreendimentos. Na FORTIVA CRED, conectamos clientes, construtoras e incorporadoras a alternativas de financiamento para construção, desenvolvimento e execução de projetos imobiliários, conforme o perfil e a necessidade de cada operação.",
    imagem: "construcao.jpg",
    itens: [
      {
        titulo: "Crédito para Construtoras e Incorporadoras",
        descricao:
          "Soluções voltadas à produção de empreendimentos imobiliários, apoiando construtoras e incorporadoras na estruturação financeira de seus projetos.",
      },
      {
        titulo: "Financiamento de Empreendimentos Imobiliários",
        descricao:
          "Crédito para viabilizar a construção de empreendimentos, com condições e liberação de recursos definidas conforme análise da instituição financeira, documentação e evolução da obra. Em geral, os recursos são liberados conforme medição da engenharia e cronograma da obra.",
      },
      {
        titulo: "Financiamento para Construção Individual",
        descricao:
          "Alternativa para pessoa física que deseja construir sua residência em terreno próprio ou adquirir o terreno e construir, conforme as condições da instituição financeira.",
      },
      {
        titulo: "Aquisição de Terreno + Construção",
        descricao:
          "Solução para quem deseja unir em uma mesma operação a aquisição do terreno e a construção do imóvel.",
      },
      {
        titulo: "Financiamento para Obras em Andamento",
        descricao:
          "Alternativas de crédito para apoiar a continuidade e conclusão de projetos, conforme o estágio da obra, documentação, garantias e critérios da instituição financeira.",
      },
    ],
  },

  {
    id: "saude",
    numero: "07",
    titulo: "Planos de Saúde",
    chamada: "Cuidar da saúde é investir em tranquilidade.",
    descricao:
      "Na FORTIVA CRED, você encontra opções de planos de saúde para pessoas, famílias e empresas, com diferentes possibilidades de cobertura, acomodação, abrangência e rede de atendimento, conforme o plano contratado.",
    imagem: "saude.jpg",
    itens: [
      {
        titulo: "Plano de Saúde Individual | Pessoa Física",
        descricao:
          "Opção contratada por pessoa física para cuidar da própria saúde, com cobertura definida conforme o contrato e o Rol de Procedimentos aplicável.",
      },
      {
        titulo: "Plano de Saúde Familiar",
        descricao:
          "Alternativa para quem deseja contratar um plano individual ou familiar, reunindo a proteção da família de acordo com as condições e possibilidades oferecidas pela operadora.",
      },
      {
        titulo: "Plano de Saúde Empresarial | Pessoa Jurídica",
        descricao:
          "Solução voltada às empresas que desejam oferecer assistência à saúde aos seus colaboradores elegíveis.",
      },
      {
        titulo: "Plano de Saúde para Empresário Individual",
        descricao:
          "Opção para empresários individuais que buscam contratação na modalidade coletiva empresarial, observados os critérios e condições estabelecidos para esse tipo de contrato.",
      },
      {
        titulo: "Plano Coletivo por Adesão",
        descricao:
          "Destinado a pessoas que possuem vínculo elegível com associação profissional, sindicato ou entidade equivalente, conforme as regras da contratação coletiva por adesão.",
      },
    ],
  },

  {
    id: "agro",
    numero: "08",
    titulo: "Produtos Agro",
    chamada: "Soluções financeiras para quem movimenta o campo.",
    descricao:
      "Na FORTIVA CRED, o agro encontra soluções financeiras para apoiar a produção, modernizar a propriedade, adquirir máquinas e equipamentos e proteger o patrimônio. Trabalhamos para conectar produtores rurais e empresas do setor às alternativas mais adequadas para cada projeto e momento do negócio.",
    imagem: "/agro.jpg",
    itens: [
      {
        titulo: "Crédito e Financiamento Rural",
        descricao:
          "Soluções para apoiar as necessidades da atividade agropecuária, desde despesas de produção até projetos de investimento e expansão.",
      },
      {
        titulo: "Financiamento de Máquinas e Equipamentos Agrícolas",
        descricao:
          "Crédito para aquisição de tratores, máquinas e equipamentos destinados à modernização e ao aumento da capacidade produtiva no campo.",
      },
      {
        titulo: "Crédito para Custeio Rural",
        descricao:
          "Recursos destinados às despesas da produção agrícola e pecuária, incluindo sementes, fertilizantes, serviços veterinários e outros bens e serviços utilizados na produção.",
      },
      {
        titulo: "Crédito para Investimento e Infraestrutura Rural",
        descricao:
          "Soluções para projetos de melhoria e expansão da propriedade, incluindo investimentos em máquinas, equipamentos e obras relacionadas à produção.",
      },
      {
        titulo: "Crédito via CPR",
        descricao:
          "Alternativas de crédito estruturadas por meio de instrumentos ligados ao agronegócio, incluindo operações formalizadas por CPR Financeira para públicos elegíveis.",
      },
      {
        titulo: "Consórcio de Máquinas Agrícolas",
        descricao:
          "Alternativa para planejar a aquisição de tratores, colheitadeiras, implementos e outros equipamentos elegíveis.",
      },
      {
        titulo: "Consórcio de Veículos e Equipamentos Pesados",
        descricao:
          "Solução planejada para aquisição de caminhões, veículos de carga, máquinas e equipamentos utilizados na operação do agronegócio.",
      },
      {
        titulo: "Consórcio de Imóveis Rurais",
        descricao:
          "Alternativa para aquisição planejada de imóveis elegíveis por meio de carta de crédito, observadas as regras e condições da administradora.",
      },
      {
        titulo: "Seguros para o Agronegócio",
        descricao:
          "Soluções de proteção para diferentes necessidades do produtor e da atividade rural, conforme produtos e coberturas disponibilizados pelas seguradoras parceiras.",
      },
      {
        titulo: "Soluções para Empresas e Cooperativas do Agro",
        descricao:
          "Crédito para apoiar investimentos e necessidades financeiras de empresas e cooperativas ligadas ao agronegócio.",
      },
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="w-5 h-5"
      stroke="currentColor"
      strokeWidth="2.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12.5 9.2 17 19 7"
      />
    </svg>
  );
}

function ArrowIcon({ aberto }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`
        w-5
        h-5
        transition-transform
        duration-300
        ${aberto ? "rotate-180" : ""}
      `}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m6 9 6 6 6-6"
      />
    </svg>
  );
}

export default function Seguros() {
  const [servicoAtivo, setServicoAtivo] = useState(0);
  const [itemAberto, setItemAberto] = useState(0);

  const servico = servicos[servicoAtivo];

  const selecionarServico = (index) => {
    setServicoAtivo(index);
    setItemAberto(0);

    setTimeout(() => {
      document.getElementById("detalhes-servico")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  };

  const toggleItem = (index) => {
    setItemAberto(itemAberto === index ? null : index);
  };

  return (
    <main className="bg-white">
      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section  id="servicos" className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_85%_35%,rgba(30,64,175,0.10),transparent_30%),linear-gradient(135deg,#ffffff_0%,#f8fafc_55%,#eef6ff_100%)]" />

        <div className="absolute inset-0 opacity-[0.5] bg-[linear-gradient(to_right,rgba(15,23,42,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.07)_1px,transparent_1px)] bg-[size:42px_42px]" />

        <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-green-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-4xl">
            <span
              data-aos="fade-up"
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                bg-green-500/10
                text-green-600
                text-sm
                font-bold
                mb-7
              "
            >
              Soluções Fortiva Cred
            </span>

            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="
                text-5xl
                md:text-7xl
                lg:text-8xl
                font-extrabold
                tracking-tight
                leading-[0.95]
                text-blue-950
              "
            >
              Conheça nossos
              <span className="block text-green-500">serviços.</span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="
                mt-8
                text-lg
                md:text-2xl
                text-slate-600
                leading-relaxed
                max-w-3xl
              "
            >
              Soluções financeiras, proteção, crédito e planejamento para
              pessoas, empresas e produtores.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* SELETOR DE SERVIÇOS */}
      {/* ================================================= */}

      <section className="relative py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            data-aos="fade-up"
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-4
              gap-4
            "
          >
            {servicos.map((item, index) => {
              const ativo = servicoAtivo === index;

              return (
                <button
                  key={item.id}
                  onClick={() => selecionarServico(index)}
                  className={`
                    group
                    relative
                    overflow-hidden
                    text-left
                    min-h-[190px]
                    rounded-[28px]
                    border
                    p-6
                    transition-all
                    duration-500

                    ${
                      ativo
                        ? "bg-blue-950 border-blue-950 text-white shadow-2xl shadow-blue-950/20 -translate-y-1"
                        : "bg-white border-slate-200 text-blue-950 hover:border-green-500/40 hover:-translate-y-1 hover:shadow-xl"
                    }
                  `}
                >
                  <span
                    className={`
                      text-xs
                      font-extrabold
                      tracking-[0.2em]

                      ${ativo ? "text-green-400" : "text-green-500"}
                    `}
                  >
                    {item.numero}
                  </span>

                  <h3
                    className="
                      mt-7
                      text-xl
                      font-extrabold
                      leading-tight
                      max-w-[220px]
                    "
                  >
                    {item.titulo}
                  </h3>

                  <div
                    className={`
                      absolute
                      right-5
                      bottom-5
                      w-10
                      h-10
                      rounded-full
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300

                      ${
                        ativo
                          ? "bg-green-500 text-white"
                          : "bg-slate-100 text-blue-950 group-hover:bg-green-500 group-hover:text-white"
                      }
                    `}
                  >
                    →
                  </div>

                  <div
                    className={`
                      absolute
                      -right-16
                      -top-16
                      w-40
                      h-40
                      rounded-full
                      blur-2xl
                      transition-opacity

                      ${
                        ativo
                          ? "bg-green-500/20 opacity-100"
                          : "bg-green-500/10 opacity-0 group-hover:opacity-100"
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* SERVIÇO SELECIONADO */}
      {/* ================================================= */}

      <section
        id="detalhes-servico"
        className="relative scroll-mt-28 py-24 md:py-32 overflow-hidden"
      >
        <div className="absolute -right-64 top-20 w-[520px] h-[520px] bg-green-500/[0.06] rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          {/* IMAGEM + TEXTO */}

          <div
            key={servico.id}
            className="
              grid
              grid-cols-1
              lg:grid-cols-2
              gap-14
              lg:gap-20
              items-center
            "
          >
            <div data-aos="fade-right" className="relative">
              <div
                className="
                  absolute
                  -left-5
                  -bottom-5
                  w-full
                  h-full
                  rounded-[38px]
                  bg-green-500/10
                "
              />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[38px]
                  min-h-[420px]
                  md:min-h-[560px]
                  shadow-2xl
                  shadow-blue-950/10
                "
              >
                <img
                  src={servico.imagem}
                  alt={servico.titulo}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/10 to-transparent" />

                <div className="absolute left-7 bottom-7 right-7">
                  <span className="text-green-400 text-sm font-bold">
                    {servico.numero}
                  </span>

                  <h3 className="mt-2 text-white text-3xl md:text-4xl font-extrabold">
                    {servico.titulo}
                  </h3>
                </div>
              </div>
            </div>

            <div data-aos="fade-left">
              <span
                className="
                  text-green-500
                  text-sm
                  uppercase
                  tracking-[0.2em]
                  font-extrabold
                "
              >
                {servico.numero} — Fortiva Cred
              </span>

              <h2
                className="
                  mt-5
                  text-4xl
                  md:text-5xl
                  lg:text-6xl
                  text-blue-950
                  font-extrabold
                  tracking-tight
                  leading-[1.05]
                "
              >
                {servico.chamada}
              </h2>

              <p
                className="
                  mt-7
                  text-lg
                  text-slate-600
                  leading-relaxed
                "
              >
                {servico.descricao}
              </p>

              <div className="mt-9 flex items-center gap-4">
                <div
                  className="
                    w-11
                    h-11
                    shrink-0
                    rounded-full
                    bg-green-500
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <CheckIcon />
                </div>

                <p className="font-bold text-blue-950">
                  Atendimento personalizado para cada necessidade.
                </p>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* ACCORDION */}
          {/* ================================================= */}

          <div className="mt-24 md:mt-32 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-green-500 uppercase tracking-[0.2em] text-sm font-extrabold">
                Conheça as soluções
              </span>

              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-blue-950">
                {servico.titulo}
              </h2>
            </div>

            <div className="space-y-3">
              {servico.itens.map((item, index) => {
                const aberto = itemAberto === index;

                return (
                  <div
                    key={`${servico.id}-${index}`}
                    data-aos="fade-up"
                    data-aos-delay={Math.min(index * 40, 200)}
                    className={`
                      rounded-[22px]
                      border
                      overflow-hidden
                      transition-all
                      duration-300

                      ${
                        aberto
                          ? "border-green-500/30 bg-green-500/[0.035] shadow-lg shadow-green-500/5"
                          : "border-slate-200 bg-white hover:border-green-500/30"
                      }
                    `}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className="
                        w-full
                        flex
                        items-center
                        gap-4
                        text-left
                        p-5
                        md:p-6
                      "
                    >
                      <div
                        className={`
                          w-10
                          h-10
                          shrink-0
                          rounded-full
                          flex
                          items-center
                          justify-center
                          transition-all

                          ${
                            aberto
                              ? "bg-green-500 text-white"
                              : "bg-green-500/10 text-green-600"
                          }
                        `}
                      >
                        <CheckIcon />
                      </div>

                      <span
                        className="
                          flex-1
                          text-blue-950
                          font-bold
                          text-base
                          md:text-lg
                        "
                      >
                        {item.titulo}
                      </span>

                      {item.descricao && (
                        <div
                          className={`
                            shrink-0
                            transition-colors

                            ${
                              aberto
                                ? "text-green-500"
                                : "text-slate-400"
                            }
                          `}
                        >
                          <ArrowIcon aberto={aberto} />
                        </div>
                      )}
                    </button>

                    {item.descricao && (
                      <div
                        className={`
                          grid
                          transition-all
                          duration-500

                          ${
                            aberto
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }
                        `}
                      >
                        <div className="overflow-hidden">
                          <p
                            className="
                              px-6
                              md:px-[82px]
                              pb-7
                              text-slate-600
                              leading-relaxed
                            "
                          >
                            {item.descricao}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* CTA */}
      {/* ================================================= */}

      <section className="px-6 md:px-12 pb-24 md:pb-32">
        <div
          data-aos="fade-up"
          className="
            relative
            overflow-hidden
            max-w-7xl
            mx-auto
            rounded-[40px]
            bg-blue-950
            px-7
            py-14
            md:px-14
            md:py-20
          "
        >
          <div className="absolute -right-24 -top-24 w-[380px] h-[380px] rounded-full bg-green-500/20 blur-3xl" />

          <div className="absolute -left-32 -bottom-40 w-[440px] h-[440px] rounded-full bg-blue-500/10 blur-3xl" />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              lg:flex-row
              lg:items-center
              justify-between
              gap-10
            "
          >
            <div className="max-w-3xl">
              <span className="text-green-400 text-sm font-extrabold uppercase tracking-[0.2em]">
                Fale com a Fortiva
              </span>

              <h2 className="mt-5 text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Encontre uma solução adequada aos seus objetivos.
              </h2>

              <p className="mt-5 text-slate-300 text-lg leading-relaxed">
                Nossa equipe está pronta para entender sua necessidade e
                apresentar as alternativas disponíveis.
              </p>
            </div>

            <a
              href="/#contato"
              className="
                shrink-0
                inline-flex
                items-center
                justify-center
                bg-green-500
                text-white
                px-8
                py-4
                rounded-full
                font-bold
                shadow-xl
                shadow-green-500/20
                hover:bg-green-600
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              Falar com um consultor
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}