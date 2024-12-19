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

let nul = 0;
let i = 1;
function Save(){
    let hodnota = document.getElementById("select1").value;
    let hodnota2 = document.getElementById("select2").value;
    let hodnota3 = document.getElementById("select3").value
    let obraz;
    let ven;
    if (hodnota == "Empty"){
        nul = 1;
        jakyJeToObrazek(hodnota, obraz, ven, nul);
    }
    else{
        if (hodnota == "Infinus"){
            nul = 0;
            jakyJeToObrazek(hodnota, obraz, ven, nul);
        }
        else{
            if (hodnota == "Titan"){
                nul = 0;
                jakyJeToObrazek(hodnota, obraz, ven, nul);
            }
        }
    }

    if (hodnota2 == "Empty"){
        nul = 2;
        jakyJeToObrazek(hodnota2, obraz, ven, nul);
    }
    else{
        if (hodnota2 == "Stryfe"){
            nul = 0;
            jakyJeToObrazek(hodnota2, obraz, ven, nul);
        }
        else{
            if (hodnota2 == "HyperFire"){
                nul = 0;
                jakyJeToObrazek(hodnota2, obraz, ven, nul);
            }
        }
    }

    if (hodnota3 == "Empty"){
        nul = 3;
        jakyJeToObrazek(hodnota3, obraz, ven, nul);
    }
    else{
        if (hodnota3 == "FireStrike"){
            nul = 0;
            jakyJeToObrazek(hodnota3, obraz, ven, nul);
        }
        else{
            if (hodnota3 == "Disruptor"){
                nul = 0;
                jakyJeToObrazek(hodnota3, obraz, ven, nul);
            }
        }
    }
}
   


function jakyJeToObrazek(hodnota, obraz, ven, nul){
    obraz = "images/" + hodnota + ".png";
    sessionStorage.setItem("key1", obraz);
    ven = sessionStorage.getItem("key1");
    if (nul == 0){
        if (hodnota == "Infinus" || hodnota == "Titan"){
            document.getElementById("obrazek1").src = ven;
            document.getElementById("jmeno1").textContent = hodnota;
        }
        else{
            if (hodnota == "Stryfe" || hodnota == "HyperFire"){
                document.getElementById("obrazek2").src = ven;
                document.getElementById("jmeno2").textContent = hodnota;
            }
            else{
                if (hodnota == "FireStrike" || hodnota == "Disruptor"){
                    document.getElementById("obrazek3").src = ven;
                    document.getElementById("jmeno3").textContent = hodnota;
                }
            }
        }
    }
    else{
        if (nul == 1){
            document.getElementById("obrazek1").src = ven;
            document.getElementById("jmeno1").textContent = hodnota;
        }
        else{
            if (nul == 2){
                document.getElementById("obrazek2").src = ven;
                document.getElementById("jmeno2").textContent = hodnota;
            }
            else{
                if (nul == 3){
                    document.getElementById("obrazek3").src = ven;
                    document.getElementById("jmeno3").textContent = hodnota;
                }
            }
        }
    }
    StranaVybava();
}