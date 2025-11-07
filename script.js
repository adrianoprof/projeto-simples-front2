async function chamarAPI() {
  const resposta = await fetch("https://projeto-simples-back.onrender.com/")
  const dados = await resposta.json()
  document.getElementById("resposta").textContent = dados.message
}