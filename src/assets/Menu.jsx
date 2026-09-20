import { useState } from "react";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  const menuItems = [
    {
      nome: "Produtos",
      link: "#produtos",
    },
    {
      nome: "Quem somos",
      link: "#quem-somos",
    },
    {
      nome: "Serviços",
      link: "#servicos",
    },
    {
      nome: "Modelo de negócio",
      link: "#modelo-negocio",
    },
    {
      nome: "Seguros",
      link: "/seguros",
    },
    {
      nome: "Contato",
      link: "#contato",
    },
  ];

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        border-b
        border-blue-950/5
        bg-white/80
        backdrop-blur-xl
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          md:px-12
          h-[86px]
          flex
          items-center
          justify-between
        "
      >
        {/* LOGO */}
        <a
          href="#inicio"
          onClick={fecharMenu}
          className="
            relative
            z-50
            flex
            items-center
          "
        >
          <img
            src="/fortiva-cred.png"
            alt="Fortiva Cred"
            className="
              w-28
              md:w-32
              object-contain
            "
          />
        </a>

        {/* MENU DESKTOP */}
        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-1
          "
        >
          {menuItems.map((item) => (
            <a
              key={item.nome}
              href={item.link}
              className={`
                relative
                font-semibold
                text-sm
                xl:text-[15px]
                transition-all
                duration-300
                
                ${
                  item.nome === "Contato"
                    ? `
                      ml-3
                      px-6
                      py-3
                      rounded-full
                      bg-green-500
                      text-white
                      shadow-lg
                      shadow-green-500/20
                      hover:bg-green-600
                      hover:-translate-y-0.5
                    `
                    : `
                      px-4
                      py-3
                      rounded-full
                      text-blue-950
                      hover:text-green-500
                      hover:bg-green-500/5
                    `
                }
              `}
            >
              {item.nome}
            </a>
          ))}
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setMenuAberto(!menuAberto)}
          className="
            relative
            z-50
            lg:hidden
            w-11
            h-11
            rounded-full
            border
            border-blue-950/10
            bg-white/80
            flex
            items-center
            justify-center
            text-blue-950
            transition-all
            duration-300
            hover:border-green-500
            hover:text-green-500
          "
        >
          <div className="relative w-5 h-4">
            <span
              className={`
                absolute
                left-0
                top-0
                w-5
                h-[2px]
                bg-current
                rounded-full
                transition-all
                duration-300
                ${
                  menuAberto
                    ? "translate-y-[7px] rotate-45"
                    : ""
                }
              `}
            />

            <span
              className={`
                absolute
                left-0
                top-[7px]
                w-5
                h-[2px]
                bg-current
                rounded-full
                transition-all
                duration-300
                ${
                  menuAberto
                    ? "opacity-0 scale-0"
                    : ""
                }
              `}
            />

            <span
              className={`
                absolute
                left-0
                bottom-0
                w-5
                h-[2px]
                bg-current
                rounded-full
                transition-all
                duration-300
                ${
                  menuAberto
                    ? "-translate-y-[7px] -rotate-45"
                    : ""
                }
              `}
            />
          </div>
        </button>
      </div>

      {/* MENU MOBILE */}
      <div
        className={`
          lg:hidden
          absolute
          top-[86px]
          left-0
          w-full
          overflow-hidden
          bg-white/95
          backdrop-blur-xl
          border-b
          border-blue-950/5
          shadow-xl
          shadow-blue-950/5
          transition-all
          duration-500
          ${
            menuAberto
              ? "max-h-[500px] opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }
        `}
      >
        <nav
          className="
            px-6
            py-7
            flex
            flex-col
            gap-2
          "
        >
          {menuItems.map((item) => (
            <a
              key={item.nome}
              href={item.link}
              onClick={fecharMenu}
              className={`
                font-semibold
                transition-all
                duration-300

                ${
                  item.nome === "Contato"
                    ? `
                      mt-3
                      bg-green-500
                      text-white
                      text-center
                      py-4
                      px-6
                      rounded-full
                      shadow-lg
                      shadow-green-500/20
                      hover:bg-green-600
                    `
                    : `
                      text-blue-950
                      text-lg
                      px-4
                      py-3
                      rounded-xl
                      hover:text-green-500
                      hover:bg-green-500/5
                    `
                }
              `}
            >
              {item.nome}
            </a>
          ))}
        </nav>

        {/* DECORAÇÃO MOBILE */}
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>
    </header>
  );
}

export default Header;