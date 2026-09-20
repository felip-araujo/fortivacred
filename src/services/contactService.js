export async function enviarContato(dados) {
  const response = await fetch("/api/send-contact", {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(dados),
  });

  const texto = await response.text();

  let data = {};

  if (texto) {
    try {
      data = JSON.parse(texto);
    } catch (error) {
      console.error("Resposta inválida da API:", texto);

      throw new Error(
        "O servidor retornou uma resposta inválida."
      );
    }
  }

  if (!response.ok) {
    throw new Error(
      data.message ||
        `Erro ao enviar formulário. Código: ${response.status}`
    );
  }

  return data;
}