// Função para inicializar os jogos salvos do armazenamento local
function initializeSavedGames() {
  var savedGames = localStorage.getItem("games");

  if (savedGames) {
    var games = JSON.parse(savedGames);
    var gamesList = document.getElementById("gamesList");

    for (var i = 0; i < games.length; i++) {
      addGameToDOM(games[i], i);
    }
  }
}

// Função para salvar os jogos no armazenamento local
function saveGamesToLocalStorage(games) {
  localStorage.setItem("games", JSON.stringify(games));
}

// Adicionar um novo jogo ao DOM e ao armazenamento local
function addGame() {
  var gameInput = document.getElementById("newGame");
  var gameName = gameInput.value.trim();

  if (gameName !== "") {
    var gameDescriptionInput = document.getElementById("newGameDescription");
    var gameDescription = gameDescriptionInput.value.trim();

    var gamesList = document.getElementById("gamesList");

    // Salvar o novo jogo no armazenamento local
    var savedGames = localStorage.getItem("games");
    var games = [];

    if (savedGames) {
      games = JSON.parse(savedGames);
    }

    games.push({ name: gameName, description: gameDescription });
    saveGamesToLocalStorage(games);

    // Adiciona o novo jogo ao DOM
    addGameToDOM({ name: gameName, description: gameDescription }, games.length - 1);

    // Limpar os campos de entrada
    gameInput.value = "";
    gameDescriptionInput.value = "";
  }
}

// Adicionar um jogo ao DOM
function addGameToDOM(game, index) {
  var gamesList = document.getElementById("gamesList");
  var newGameItem = document.createElement("li");
  newGameItem.innerHTML =
    '<span class="game-name">' +
    game.name +
    '</span> - <span class="game-description">' +
    game.description +
    '</span><button class="delete-button" onclick="deleteGame(' +
    index +
    ')">Apagar</button>';
  gamesList.appendChild(newGameItem);
}

// Deletar um jogo
function deleteGame(index) {
  var gamesList = document.getElementById("gamesList");
  var games = JSON.parse(localStorage.getItem("games"));

  // Verifica se o índice é válido antes de deletar
  if (index >= 0 && index < games.length) {
    games.splice(index, 1);
    saveGamesToLocalStorage(games);

    // Remove o jogo do DOM
    gamesList.innerHTML = "";
    initializeSavedGames();
  }
}

// Gerar inspiração
function generateInspiration() {
  var gamesList = document.getElementById("gamesList");
  var games = gamesList.getElementsByTagName("li");
  var randomIndex1 = Math.floor(Math.random() * games.length);
  var randomIndex2 = Math.floor(Math.random() * games.length);

  while (randomIndex2 === randomIndex1) {
    randomIndex2 = Math.floor(Math.random() * games.length);
  }

  var game1 = games[randomIndex1].getElementsByClassName("game-name")[0].innerText;
  var game2 = games[randomIndex2].getElementsByClassName("game-name")[0].innerText;

  var inspirationContainer = document.getElementById("inspiration");
  inspirationContainer.innerHTML =
    "<h3>Inspire-se nos jogos:</h3><p><strong>" +
    game1 +
    "</strong></p><p><strong>" +
    game2 +
    "</strong></p>";
  inspirationContainer.classList.remove("hidden");
}

// Chamada da função para inicializar os jogos salvos
initializeSavedGames();
