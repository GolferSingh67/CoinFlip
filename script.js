const heads="./Head.png"
const tails="./Tail.png"
function flipCoin() {
    let coin = document.getElementById("COIN");
    let coinImage = document.getElementById("CoinImg")
    let resultText = document.getElementById("ShowText")

    coin.style.display="block"
    coin.textContent = "🪙";
    coinImage.style.display="none"
    resultText.textContent=""
  
    coin.style.transform = "rotateY(0deg)";
    setTimeout(() => {
    coin.style.transform = "rotateY(720deg)";
       
     
    }, 100);

    setTimeout(() => {
        let result = Math.random() < 0.5 ? "Heads" : "Tails";
        coinImage.style.display="block"
        coin.style.display="none"

        if (result==="Heads"){
            coinImage.src=heads
             resultText.textContent="Heads"
        }
        else{
            coinImage.src=tails
            resultText.textContent="Tails"
        }
    }, 500);
}


