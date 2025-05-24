function refreshButton(){
var randomNumber = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randImg1 = "dice" + randomNumber + ".png";
var randImg2 = "dice" + randomNumber2 + ".png";

document.querySelector(".dice .img1").setAttribute("src", randImg1);
document.querySelector(".dice .img2").setAttribute("src", randImg2);

if(randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = ("🚩 Player 1 Wins!")
}else if(randomNumber < randomNumber2){
    document.querySelector("h1").innerHTML = ("Player 2 Wins!🚩")
}else{
    document.querySelector("h1").innerHTML = ("Draw!")
}
}