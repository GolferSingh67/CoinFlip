function flipCoin() {
    let coin = document.getElementById("COIN");
    coin.style.transform = "rotateY(0deg)";
    coin.innerText = "🪙";

    let timeout = 1000; 

    setTimeout(() => {
        let result = Math.random() < 0.5 ? "Heads" : "Tails";
        coin.style.transform ="rotateY(720deg)";
        setTimeout(() => {
            coin.innerText=result==="Heads"? "🪙HEADS!":"🪙TAILS"
        }, 500);
    }, 800);
}

