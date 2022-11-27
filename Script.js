let circuloA = document.getElementById("alfa");
let circuloB = document.getElementById("beta");
let circuloC = document.getElementById("gamma");
let state = 1;

setInterval(function(){
    switch (state) {
        case 3:
            circuloA.style.zIndex = 1;
            circuloB.style.zIndex = 3;
            circuloC.style.zIndex = 2;
        break;
        case 2:
            circuloB.style.zIndex = 1;
            circuloA.style.zIndex = 2;
            circuloC.style.zIndex = 3;
        break;
        case 1:
            circuloC.style.zIndex = 1;
            circuloA.style.zIndex = 3;
            circuloB.style.zIndex = 2;
        break;
        default:
            state = 1;
        break;
    }
    state++;
}, 5000);