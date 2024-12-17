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

function policka(){
    let checkboxy1 = document.querySelectorAll("vyber");
    let checkboxy2 = document.querySelectorAll("vyber2");
    let checkboxy3 = document.querySelectorAll("vyber3");
    let pocet1 = 0;
    let pocet2 = 0;
    let pocet3 = 0;
    checkboxy1.forEach(polozka => {
        if (polozka.checked == false){
            pocet1++;
        }
    });

    checkboxy2.forEach(polozka => {
        if (polozka.checked == false){
            pocet2++
        }
    });

    checkboxy3.forEach(element => {
        if (polozka.checked == false){
            pocet3
        }
    });

    if (pocet1 > 1 || pocet2 > 1 || pocet3 > 1 || pocet1 == 0 || pocet2 == 0 || pocet3 == 0){
        document.getElementById("p").innerText = "Neplatny vstup!";
    }
    else{
        document.getElementById("p").innerText = "OK";
    }
}