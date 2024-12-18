if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function StranaVybava(){
    document.getElementById("main").className = "strana_viditelna";
    document.getElementById("second").className = "strana_vypnuta";
}

function StranaNastaveni(){
    document.getElementById("main").className = "strana_vypnuta";
    document.getElementById("second").className = "strana_viditelna";
}

let pocet_stisku = 0
let pocet = 0;
function policka(){
    pocet_stisku++;
    //detekce kolikrat byl zmacknuty checkbox
    if (pocet_stisku % 2 == 0){
        pocet = 0;
    }
    else{
        pocet++;
    }
    
    if (pocet > 1 || pocet == 0){
        document.getElementById("p").innerText = "Neplatny pocet";
    }
    else{
        document.getElementById("p").innerText = "";
    }
}

