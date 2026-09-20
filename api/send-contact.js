import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Método não permitido.",
    });
  }

  try {
    const { nome, email, investimento } = req.body || {};

    if (!nome || !email || !investimento) {
      return res.status(400).json({
        success: false,
        message: "Todos os campos são obrigatórios.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,

      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Testa conexão SMTP
    await transporter.verify();

    console.log("SMTP conectado com sucesso");

    // Envia o e-mail
    const info = await transporter.sendMail({
      from: `"Site Fortiva Cred" <${process.env.SMTP_USER}>`,

      to: process.env.CONTACT_EMAIL,

      replyTo: email,

      subject: `Novo cadastro - ${nome}`,

      text: `
Novo cadastro recebido pelo site da Fortiva Cred.

Nome: ${nome}
E-mail: ${email}
Investimento disponível: ${investimento}
      `,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            max-width: 600px;
            margin: 0 auto;
            color: #172554;
          "
        >
          <div
            style="
              background: #22c55e;
              padding: 20px 25px;
              border-radius: 12px 12px 0 0;
              color: white;
            "
          >
            <h2 style="margin: 0;">
              Novo cadastro - Fortiva Cred
            </h2>
          </div>

          <div
            style="
              border: 1px solid #e2e8f0;
              border-top: none;
              padding: 30px 25px;
              border-radius: 0 0 12px 12px;
            "
          >
            <p>
              Um novo contato foi enviado através do site.
            </p>

            <p>
              <strong>Nome:</strong><br />
              ${nome}
            </p>

            <p>
              <strong>E-mail:</strong><br />
              ${email}
            </p>

            <p>
              <strong>Investimento disponível:</strong><br />
              ${investimento}
            </p>
          </div>
        </div>
      `,
    });

    console.log("========== EMAIL ==========");
    console.log("Destinatário:", process.env.CONTACT_EMAIL);
    console.log("Message ID:", info.messageId);
    console.log("Accepted:", info.accepted);
    console.log("Rejected:", info.rejected);
    console.log("Response:", info.response);
    console.log("===========================");

    return res.status(200).json({
      success: true,
      message: "Cadastro enviado com sucesso.",
    });
  } catch (error) {
    console.error("ERRO AO ENVIAR EMAIL:", error);

    return res.status(500).json({
      success: false,
      message: "Não foi possível enviar o cadastro.",
      error: error.message,
    });
  }
}