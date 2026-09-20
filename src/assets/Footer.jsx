function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 text-white">
      {/* Detalhes de fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.10),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(30,64,175,0.12),transparent_35%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-14">
        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            md:items-start
            justify-between
            gap-10
          "
        >
          {/* Logo / Marca */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/fortiva-cred.png"
              alt="Fortiva Cred"
              className="w-36 object-contain brightness-0 invert"
            />

            <p className="mt-5 text-slate-400 text-sm max-w-sm text-center md:text-left leading-relaxed">
              Soluções inteligentes para o mercado de seguros e créditos.
            </p>
          </div>

          {/* Contato */}
          <div className="text-center md:text-left">
            <span className="text-green-500 text-xs font-bold uppercase tracking-[0.2em]">
              Fale com a Fortiva
            </span>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="tel:08002998000"
                className="
                  text-xl
                  md:text-2xl
                  font-bold
                  text-white
                  hover:text-green-400
                  transition-colors
                  duration-300
                "
              >
                0800 299 8000
              </a>

              <a
                href="mailto:sac@fortivabrasil.com.br"
                className="
                  text-slate-300
                  hover:text-green-400
                  transition-colors
                  duration-300
                "
              >
                sac@fortivabrasil.com.br
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div className="text-center md:text-left">
            <span className="text-green-500 text-xs font-bold uppercase tracking-[0.2em]">
              Navegação
            </span>

            <nav className="mt-5 flex flex-col gap-3 text-sm">
              <a
                href="#produtos"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Produtos
              </a>

              <a
                href="#quem-somos"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Quem somos
              </a>

              <a
                href="#servicos"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Serviços
              </a>

              <a
                href="#modelo-negocio"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Modelo de negócio
              </a>

              <a
                href="#contato"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Contato
              </a>
            </nav>
          </div>
        </div>

        {/* Linha inferior */}
        <div
          className="
            mt-12
            pt-6
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Fortiva Cred. Todos os direitos
            reservados.
          </p>

          <a
            href="#inicio"
            className="
              text-sm
              font-semibold
              text-slate-400
              hover:text-green-400
              transition-colors
            "
          >
            Voltar ao topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;