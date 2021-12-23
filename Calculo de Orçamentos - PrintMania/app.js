function calcularLucro() {
  let custo = document.getElementById("custo-prod").value;
  let lucro = document.getElementById("lucroPrice").value;
  let lucroFormat = parseFloat(lucro / 100);
  let percentil = 1 - lucroFormat;

  let precoDeVenda = custo / percentil;
  let totalHaLucrar = precoDeVenda - custo

  console.log(typeof precoDeVenda);
  console.log(
    precoDeVenda.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
  );

  window.alert(
    `Venda o produto a ${precoDeVenda.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })} você recebera ${totalHaLucrar.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })} de lucro!`
  );

  // return lucroFormat;
}

// calcularLucro()
