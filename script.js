// Nomes fictícios de clientes
const nomesClientes = [
  "Cliente A",
  "Cliente B",
  "Cliente C",
  "Cliente D",
  "Cliente E",
  "Cliente F"
];

// Serviços oferecidos
const servicos = [
  "Criação de logotipo",
  "Design de cartão de visita",
  "Design de banner",
  "Design de flyer",
  "Criação de identidade visual"
];

// Função para gerar um número aleatório entre dois valores
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para gerar pedido de serviço ao clicar no botão
function gerarPedidoServico() {
  // Gerar índices aleatórios para os nomes e serviços
  const indiceCliente = gerarNumeroAleatorio(0, nomesClientes.length - 1);
  const indiceServico = gerarNumeroAleatorio(0, servicos.length - 1);
  
  // Gerar data de entrega (prazo de 5 a 15 dias a partir da data atual)
  const prazoEntrega = gerarNumeroAleatorio(5, 15);
  const dataEntrega = new Date();
  dataEntrega.setDate(dataEntrega.getDate() + prazoEntrega);
  
  // Construir a string do pedido
  const pedido = `
    Cliente: ${nomesClientes[indiceCliente]}<br>
    Serviço: ${servicos[indiceServico]}<br>
    Data de Entrega: ${dataEntrega.toLocaleDateString()}
  `;
  
  // Exibir o resultado na página
  document.getElementById("resultado").innerHTML = pedido;
}

// Adicionar o evento de clique ao botão "Gerar Cliente"
document.getElementById("gerarCliente").addEventListener("click", gerarPedidoServico);
