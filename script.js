document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const submitButton = document.getElementById("submitButton");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const cpf = document.getElementById("cpf").value;
    const rg = document.getElementById("rg").value;
    const dataNascimento = document.getElementById("nascimento").value;
    const mensagem = document.getElementById("mensagem").value;

    const data = {
      nome: nome,
      email: email,
      cpf: cpf,
      rg: rg,
      nascimento: dataNascimento,
      mensagem: mensagem,
    };

    console.log("Dados do Formulário:", data);

    submitButton.disabled = true;
    submitButton.textContent = "Enviado";

    contactForm.reset();

    setTimeout(function () {
      submitButton.disabled = false;
      submitButton.textContent = "Enviar";
    }, 60000);
  });
});
