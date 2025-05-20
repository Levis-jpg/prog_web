document.getElementById("product-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("product-name").value.trim();
  const preco = document.getElementById("product-price").value.trim();
  const descricao = document.getElementById("product-description").value.trim();

  if (nome && preco && descricao) {
    const lista = document.getElementById("product-list");

    const item = document.createElement("div");
    item.className = "product-item";
    item.innerHTML = `
      <strong>${nome}</strong><br />
      <span>Preço: €${parseFloat(preco).toFixed(2)}</span><br />
      <span>Descrição: ${descricao}</span>
    `;

    lista.appendChild(item);

    // Limpar os campos
    document.getElementById("product-name").value = "";
    document.getElementById("product-price").value = "";
    document.getElementById("product-description").value = "";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});
