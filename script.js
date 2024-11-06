// Temporizador de urgência
let timer = 300;
const countdown = document.getElementById("countdown");

setInterval(() => {
    if (timer > 0) {
        timer--;
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        countdown.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    } else {
        countdown.textContent = "Oferta expirada!";
    }
}, 1000);

// Notificações de Compras
const notificationBar = document.getElementById("notificationBar");
const onlineCount = document.getElementById("onlineCount");

setInterval(() => {
    onlineCount.textContent = Math.floor(Math.random() * 100) + 30;
}, 5000);

setInterval(() => {
    const messages = [
        "João comprou o Plano VIP!",
        "Maria recarregou o Plano Básico.",
        "Rafael adquiriu o Plano Master!",
        "Ana garantiu o Plano Ultimate."
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    notificationBar.textContent = randomMessage;
}, 4000);

// Carrossel Autom
