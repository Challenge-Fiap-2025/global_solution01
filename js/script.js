// contato
document.addEventListener("DOMContentLoaded", () => {
  const contatoForm = document.getElementById("form-contato");
  if (contatoForm) {
    contatoForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const assunto = document.getElementById("assunto").value;
      const mensagem = document.getElementById("mensagem").value.trim();
      const preferencia = document.querySelector('input[name="preferencia"]:checked')?.value;

      if (!nome || !email || !mensagem) {
        alert("Por favor, preencha os campos obrigatórios: Nome, E-mail e Mensagem.");
        return;
      }

      console.log("Formulário de Contato enviado com sucesso!");
      console.log({
        nome,
        email,
        telefone,
        assunto,
        preferencia,
        mensagem
      });

      alert("Mensagem enviada com sucesso! Obrigado por entrar em contato. 😊");

      contatoForm.reset();
    });
  }
   // cadastro
  const cadastroForm = document.getElementById("form-cadastro");
  if (cadastroForm) {
    cadastroForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const cpf = document.getElementById("cpf").value.trim();
      const nome = document.getElementById("nome").value.trim();
      const telefone = document.getElementById("telefone").value.trim();
      const email = document.getElementById("email").value.trim();
      const sexo = document.getElementById("sexo").value;

      if (!cpf || !nome || !telefone || !email || !sexo) {
        alert("Por favor, preencha todos os campos do cadastro.");
        return;
      }

      console.log("Cadastro realizado com sucesso!");
      console.log({
        cpf,
        nome,
        telefone,
        email,
        sexo
      });

      alert("Cadastro realizado com sucesso! 🎉");

      cadastroForm.reset();
    });
  }

  // blog
  const newsletterForm = document.querySelector("aside form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = newsletterForm.querySelector("input[type='email']").value.trim();
      if (!email) {
        alert("Por favor, insira um e-mail.");
        return;
      }

      console.log("Newsletter cadastrada:", email);
      alert("Cadastrado com sucesso!");

      newsletterForm.reset();
    });
  }
});