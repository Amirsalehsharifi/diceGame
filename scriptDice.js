let randNumber1 =Math.floor((Math.random()*6)+1);
let randNumber2 =Math.floor((Math.random()*6)+1);

document.querySelector(".img1").setAttribute("src", "images/dice" + randNumber1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randNumber2 + ".png")
if (randNumber1 > randNumber2){
    document.querySelector(".winner").innerHTML="Player 1 wins"
}
else if(randNumber1 === randNumber2) {
    document.querySelector(".winner").innerHTML="It's a tie"
}
else{
    document.querySelector(".winner").innerHTML="Player 2 wins"
}