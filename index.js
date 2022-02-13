let randomNumber1 = Math.floor (Math.random()* 6) + 1 // 1-6

let randomeDiceImage = "dice" + randomNumber1 + ".png" // dice1.png - dice6.png

let randomImageSource = "images/" + randomeDiceImage  // images/dice1.png - images/dice6.png

let image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", randomImageSource)


let randomNumber2 = Math.floor (Math.random()* 6) + 1

let randomImageSource2 = "images/dice" + randomNumber2 + ".png"

let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player number 1 wins!"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player number 2 wins!"
} else {
    document.querySelector("h1").innerHTML = "It's a tie! Play again!"
}

const reloadtButton = document.querySelector("#reload");

function reload() {
    reload = location.reload();
}
