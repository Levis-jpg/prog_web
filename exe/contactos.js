document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const Contato = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    assunto: document.getElementById("assunto").value,
    mensagem: document.getElementById("mensagem").value,
  };

  alert(
    `Mensagem enviada!\n\nNome: ${Contato.nome}\nEmail: ${Contato.email}\nAssunto: ${Contato.assunto}\nMensagem: ${Contato.mensagem}`
  );
});