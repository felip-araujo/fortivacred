import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { enviarContato } from "../services/contactService";

function Contato() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    investimento: "",
  });

  const [enviando, setEnviando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validarFormulario = () => {
    if (!form.nome.trim()) {
      toast.warning("Digite seu nome completo.");
      return false;
    }

    if (!form.email.trim()) {
      toast.warning("Digite seu e-mail.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      toast.warning("Digite um e-mail válido.");
      return false;
    }

    if (!form.investimento) {
      toast.warning("Selecione o valor de investimento disponível.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validarFormulario()) {
      return;
    }

    const toastId = toast.loading("Enviando seu cadastro...");

    try {
      setEnviando(true);

      await enviarContato({
        nome: form.nome.trim(),
        email: form.email.trim(),
        investimento: form.investimento,
      });

      toast.update(toastId, {
        render: "Cadastro enviado com sucesso!",
        type: "success",
        isLoading: false,
        autoClose: 2500,
        closeOnClick: true,
      });

      setForm({
        nome: "",
        email: "",
        investimento: "",
      });

      setTimeout(() => {
        navigate("/falar-com-consultor");
      }, 1200);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);

      toast.update(toastId, {
        render:
          error.message ||
          "Não foi possível enviar seu cadastro. Tente novamente.",
        type: "error",
        isLoading: false,
        autoClose: 4000,
        closeOnClick: true,
      });
    } finally {
      setEnviando(false);
    }
  };

  const opcoesInvestimento = [
    "R$ 10.000,00",
    "R$ 25.000,00 a R$ 30.000,00",
    "Acima de R$ 90.000,00",
  ];

  return (
    <section
      id="contato"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        md:py-32
      "
    >
      {/* Fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.12),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(30,64,175,0.08),transparent_30%),linear-gradient(135deg,#ffffff_0%,#f8fafc_55%,#eef6ff_100%)]" />

      {/* Quadriculado */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.35]
          bg-[linear-gradient(to_right,rgba(15,23,42,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.07)_1px,transparent_1px)]
          bg-[size:42px_42px]
        "
      />

      {/* Elementos decorativos */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-green-400/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl" />

      <div
        className="
          relative
          z-10
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
        {/* ========================= */}
        {/* TEXTO */}
        {/* ========================= */}

        <div data-aos="fade-right">
          <span
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
              mb-6
            "
          >
            Faça parte da Fortiva
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-extrabold
              tracking-tight
              leading-[1.05]
              text-blue-950
            "
          >
            Dê o próximo passo

            <span className="block text-green-500">
              com a Fortiva Cred.
            </span>
          </h2>

          <p
            className="
              mt-7
              text-lg
              md:text-xl
              text-slate-600
              leading-relaxed
              max-w-xl
            "
          >
            Preencha seus dados e nossa equipe entrará em contato para
            apresentar mais detalhes sobre o modelo de negócio da Fortiva.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <div
              className="
                w-12
                h-12
                rounded-full
                bg-green-500
                flex
                items-center
                justify-center
                text-white
                font-bold
                shadow-lg
                shadow-green-500/20
              "
            >
              ✓
            </div>

            <div>
              <p className="font-bold text-blue-950">
                Atendimento personalizado
              </p>

              <p className="text-sm text-slate-500">
                Fale diretamente com nossa equipe.
              </p>
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* FORMULÁRIO */}
        {/* ========================= */}

        <div
          data-aos="fade-up"
          className="
            bg-white/80
            backdrop-blur-xl
            border
            border-blue-950/10
            shadow-2xl
            shadow-blue-950/10
            rounded-[32px]
            p-7
            md:p-10
          "
        >
          <div className="mb-8">
            <h3 className="text-2xl font-extrabold text-blue-950">
              Quero saber mais
            </h3>

            <p className="mt-2 text-slate-500">
              Preencha as informações abaixo.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NOME */}
            <div>
              <label
                htmlFor="nome"
                className="
                  block
                  mb-2
                  text-sm
                  font-bold
                  text-blue-950
                "
              >
                Nome completo
              </label>

              <input
                type="text"
                id="nome"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Digite seu nome completo"
                disabled={enviando}
                autoComplete="name"
                className="
                  w-full
                  h-14
                  px-5
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  text-blue-950
                  placeholder:text-slate-400
                  outline-none
                  transition-all
                  duration-300
                  focus:border-green-500
                  focus:ring-4
                  focus:ring-green-500/10
                  disabled:bg-slate-50
                  disabled:cursor-not-allowed
                "
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="
                  block
                  mb-2
                  text-sm
                  font-bold
                  text-blue-950
                "
              >
                E-mail
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="seuemail@exemplo.com"
                disabled={enviando}
                autoComplete="email"
                className="
                  w-full
                  h-14
                  px-5
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  text-blue-950
                  placeholder:text-slate-400
                  outline-none
                  transition-all
                  duration-300
                  focus:border-green-500
                  focus:ring-4
                  focus:ring-green-500/10
                  disabled:bg-slate-50
                  disabled:cursor-not-allowed
                "
              />
            </div>

            {/* INVESTIMENTO */}
            <div>
              <label
                className="
                  block
                  mb-3
                  text-sm
                  font-bold
                  text-blue-950
                "
              >
                Valor de investimento disponível
              </label>

              <div className="space-y-3">
                {opcoesInvestimento.map((opcao) => {
                  const selecionado = form.investimento === opcao;

                  return (
                    <label
                      key={opcao}
                      className={`
                        flex
                        items-center
                        gap-4
                        w-full
                        p-4
                        rounded-2xl
                        border
                        transition-all
                        duration-300

                        ${
                          enviando
                            ? "cursor-not-allowed opacity-60"
                            : "cursor-pointer"
                        }

                        ${
                          selecionado
                            ? "border-green-500 bg-green-500/5 shadow-sm shadow-green-500/10"
                            : "border-slate-200 bg-white hover:border-green-500/50 hover:bg-green-500/[0.02]"
                        }
                      `}
                    >
                      <input
                        type="radio"
                        name="investimento"
                        value={opcao}
                        checked={selecionado}
                        onChange={handleChange}
                        disabled={enviando}
                        className="
                          accent-green-500
                          w-4
                          h-4
                          cursor-pointer
                        "
                      />

                      <span className="font-semibold text-blue-950">
                        {opcao}
                      </span>

                      {selecionado && (
                        <span
                          className="
                            ml-auto
                            w-6
                            h-6
                            rounded-full
                            bg-green-500
                            text-white
                            text-xs
                            flex
                            items-center
                            justify-center
                          "
                        >
                          ✓
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </div>

            {/* BOTÃO */}
            <button
              type="submit"
              disabled={enviando}
              className="
                relative
                overflow-hidden
                w-full
                h-14
                bg-green-500
                text-white
                font-bold
                rounded-full
                shadow-lg
                shadow-green-500/25
                transition-all
                duration-300
                hover:bg-green-600
                hover:-translate-y-1
                disabled:opacity-70
                disabled:hover:translate-y-0
                disabled:cursor-not-allowed
              "
            >
              {enviando ? (
                <span className="flex items-center justify-center gap-3">
                  <span
                    className="
                      w-5
                      h-5
                      border-2
                      border-white/40
                      border-t-white
                      rounded-full
                      animate-spin
                    "
                  />

                  Enviando cadastro...
                </span>
              ) : (
                "Enviar cadastro"
              )}
            </button>

            <p className="text-xs text-center text-slate-400 leading-relaxed">
              Ao enviar seus dados, você autoriza o contato da equipe Fortiva
              Cred referente às informações solicitadas.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contato;