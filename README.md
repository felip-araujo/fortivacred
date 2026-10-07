# React + Vite

## Cadastro de contato

O formulário exige WhatsApp com DDD (celular brasileiro), aceitando também o prefixo +55. O número é validado pela API e incluído no e-mail do cadastro.

Configure a variável de ambiente `CONTACT_EMAIL` no servidor com todos os destinatários, separados por vírgula ou ponto e vírgula:

```env
CONTACT_EMAIL=comercial@exemplo.com,atendimento@exemplo.com,diretoria@exemplo.com
```

Um único endereço continua funcionando. Os destinatários são configurados no servidor; após alterar a variável no ambiente de hospedagem, faça um novo deploy para aplicar a configuração.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
