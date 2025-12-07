const timerElement = document.getElementById("timer");
const startKnopf = document.getElementById("start-knopf");
const stopKnopf = document.getElementById("stop-knopf");
const resetKnopf = document.getElementById("reset-knopf");

let zeit = 25 * 60;
let interval = null;

function zeigeZeit(){
    const minuten = Math.floor(zeit / 60);
    const sekunden = zeit % 60;
    const sekundenText  = sekunden.toString().padStart(2, "0"); //Füllt vor der Zahl mit Strings
    

    timerElement.textContent = `${minuten}:${sekundenText}`
}   
    
startKnopf.addEventListener("click", () => {
    if (interval) return;                   //Wenn intervall Nicht Null ist dann STOP

    interval = setInterval(() => {
        zeit--;
        zeigeZeit();
        
        if (zeit <= 0) {
            clearInterval(interval);        //Stopt Intervall
            interval = null;
            alert("Zeit vorbei!")
        }

    }, 1000);                               //Funktionen wird pro 1 Sek ausgeführt
});

stopKnopf.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

resetKnopf.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;

    zeit = 25 * 60;
    zeigeZeit();

});

zeigeZeit();