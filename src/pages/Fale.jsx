function Fale() {
  const whatsappNumber = "5592999999999";

  const mensagem =
    "Olá! Acabei de preencher o formulário no site da Fortiva Cred e gostaria de falar com um consultor.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    mensagem
  )}`;

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
      "
    >
      {/* Fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_85%_35%,rgba(30,64,175,0.10),transparent_30%),linear-gradient(135deg,#ffffff_0%,#f8fafc_55%,#eef6ff_100%)]" />

      {/* Quadriculado */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.45]
          bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.08)_1px,transparent_1px)]
          bg-[size:42px_42px]
        "
      />

      {/* Detalhes decorativos */}
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] bg-green-400/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[520px] h-[520px] bg-blue-900/10 rounded-full blur-3xl" />

      <div
        data-aos="fade-up"
        className="
          relative
          z-10
          w-full
          max-w-2xl
          mx-auto
          text-center
        "
      >
        {/* Logo */}
        <img
          src="/fortiva-cred.png"
          alt="Fortiva Cred"
          className="
            w-36
            md:w-40
            mx-auto
            mb-10
            object-contain
          "
        />

        {/* Card */}
        <div
          className="
            bg-white/80
            backdrop-blur-xl
            border
            border-blue-950/10
            rounded-[36px]
            shadow-2xl
            shadow-blue-950/10
            px-7
            py-12
            md:px-14
            md:py-14
          "
        >
          {/* Check */}
          <div
            className="
              w-20
              h-20
              mx-auto
              rounded-full
              bg-green-500
              flex
              items-center
              justify-center
              text-white
              text-3xl
              font-bold
              shadow-xl
              shadow-green-500/25
            "
          >
            ✓
          </div>

          <h1
            className="
              mt-8
              text-4xl
              md:text-5xl
              font-extrabold
              tracking-tight
              leading-tight
              text-blue-950
            "
          >
            Cadastro enviado
            <span className="block text-green-500">
              com sucesso!
            </span>
          </h1>

          <p
            className="
              mt-6
              text-lg
              text-slate-600
              leading-relaxed
              max-w-xl
              mx-auto
            "
          >
            Recebemos suas informações e nossa equipe poderá entrar em contato
            com você em breve.
          </p>

          <p
            className="
              mt-5
              text-lg
              text-blue-950
              font-bold
            "
          >
            Quer agilizar seu atendimento?
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-9
              inline-flex
              items-center
              justify-center
              gap-3
              bg-green-500
              text-white
              font-extrabold
              text-sm
              md:text-base
              tracking-wide
              px-8
              md:px-10
              py-5
              rounded-full
              shadow-xl
              shadow-green-500/30
              hover:bg-green-600
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            FALAR AGORA COM UM CONSULTOR
          </a>

          <p className="mt-5 text-sm text-slate-400">
            Você será direcionado para o WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Fale;