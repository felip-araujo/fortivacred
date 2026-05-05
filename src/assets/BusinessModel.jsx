import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollarSign,
  faChartColumn,
  faChartLine,
  faRocket,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function BusinessModel() {
  const models = [
    {
      name: "Home",
      investment: "R$ 20.900,00",
      revenue: "R$ 30.000,00",
      profit: "R$ 22.500,00",
      roi: "Prazo de Retorno (ROI) 2 Meses",
      available: true,
    },
    {
      name: "Office",
      investment: "R$ 61.900,00",
      revenue: "R$ 105.000,00",
      profit: "R$ 80.500,00",
      roi: "Prazo de Retorno (ROI) 5 Meses",
      available: true,
    },
    {
      name: "Bank",
      available: false,
    },
  ];

  return (
    <section
      id="modelo-negocio"
      className="relative min-h-screen bg-blue-950 flex items-center overflow-hidden py-24"
    >
      {/* Fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.16),transparent_30%),radial-gradient(circle_at_90%_80%,rgba(56,189,248,0.12),transparent_30%),linear-gradient(135deg,#172554_0%,#0f172a_100%)]"></div>

      {/* Quadriculado fino */}
      <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.18)_1px,transparent_1px)] bg-[size:42px_42px]"></div>

      {/* Círculos */}
      <div className="absolute -top-52 left-1/2 -translate-x-1/2 w-[620px] h-[620px] border border-green-400/20 rounded-full"></div>
      <div className="absolute -bottom-52 -right-52 w-[580px] h-[580px] border border-green-400/20 rounded-full"></div>

      {/* Pontinhos */}
      <div className="absolute top-16 left-10 hidden md:grid grid-cols-4 gap-2">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
        ))}
      </div>

      <div className="absolute bottom-20 right-16 hidden md:grid grid-cols-5 gap-2">
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
        ))}
      </div>

      

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-6xl font-light text-white mb-4"
        >
          Modelo de{" "}
          <span className="font-extrabold text-green-400">Negócio</span>
        </h2>

        <div className="w-20 h-1 bg-green-400 mb-14"></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className={`relative rounded-3xl p-8 border transition-all duration-300 ${
                model.available
                  ? "bg-white/95 border-white/20 hover:-translate-y-2 hover:shadow-2xl"
                  : "bg-white/10 border-dashed border-green-400/40 backdrop-blur hover:bg-white/15"
              }`}
            >
              <p
                className={`text-center text-sm mb-2 ${
                  model.available ? "text-blue-950/70" : "text-white/70"
                }`}
              >
                Modelo de Implantação
              </p>

              <h3
                className={`text-center text-5xl md:text-6xl font-extrabold mb-4 ${
                  model.available ? "text-blue-950" : "text-white"
                }`}
              >
                {model.name}
              </h3>

              <div className="w-16 h-1 bg-green-500 mx-auto mb-8"></div>

              {model.available ? (
                <>
                  <div className="space-y-6">
                    <div className="grid grid-cols-[52px_1fr] gap-5 items-center">
                      <div className="w-12 h-12 rounded-full border border-green-500 text-green-600 flex items-center justify-center">
                        <FontAwesomeIcon icon={faDollarSign} />
                      </div>

                      <div>
                        <p className="text-blue-950/70 text-sm">
                          Investimento
                        </p>
                        <p className="text-blue-950 text-2xl font-extrabold">
                          {model.investment}
                        </p>
                      </div>
                    </div>

                    <div className="h-px bg-blue-950/10"></div>

                    <div className="grid grid-cols-[52px_1fr] gap-5 items-center">
                      <div className="w-12 h-12 text-green-600 flex items-center justify-center text-2xl">
                        <FontAwesomeIcon icon={faChartColumn} />
                      </div>

                      <div>
                        <p className="text-blue-950/70 text-sm">
                          Faturamento médio
                        </p>
                        <p className="text-blue-950 text-2xl font-extrabold">
                          {model.revenue}
                        </p>
                      </div>
                    </div>

                    <div className="h-px bg-blue-950/10"></div>

                    <div className="grid grid-cols-[52px_1fr] gap-5 items-center">
                      <div className="w-12 h-12 text-green-600 flex items-center justify-center text-2xl">
                        <FontAwesomeIcon icon={faChartLine} />
                      </div>

                      <div>
                        <p className="text-blue-950/70 text-sm">
                          Lucro líquido médio
                        </p>
                        <p className="text-blue-950 text-2xl font-extrabold">
                          {model.profit}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-center gap-2 text-blue-950">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="text-green-500 text-sm"
                    />
                    <span className="text-sm font-medium">{model.roi}</span>
                  </div>

                  <button className="mt-8 w-full bg-green-500 text-white font-bold py-4 rounded-full hover:bg-green-600 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-green-500/20">
                    Escolher modelo {model.name}
                  </button>
                </>
              ) : (
                <div className="min-h-[330px] flex flex-col items-center justify-center text-center">
                  <div className="w-28 h-28 rounded-full bg-green-400/10 text-green-400 flex items-center justify-center text-5xl mb-8">
                    <FontAwesomeIcon icon={faRocket} />
                  </div>

                  <p className="text-green-400 text-2xl font-extrabold">
                    Lançamento!
                  </p>

                  <p className="text-white/80 text-xl font-semibold mt-2">
                    Aguarde...
                  </p>

                  <button className="mt-10 w-full border border-green-400/40 text-green-400 font-bold py-4 rounded-full cursor-not-allowed opacity-70">
                    Em breve
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessModel;

