document.getElementById("doacao-sangue").addEventListener("submit", function (e) {
  e.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let idade = document.getElementById("idade").value;
  let peso = document.getElementById("peso").value;
  let tiposanguineo = document.getElementById("tiposanguineo").value;
  let telefone = document.getElementById("telefone").value;
  let cidade = document.getElementById("telefone").value;
  let estado = document.getElementById("estado").value;
  
  //Regras de validação

  

  document.getElementById("resultado").innerHTML = "Seu cadastro foi realizado com sucesso na nossa ONG !<br>" + "Nome: " + nome;

});