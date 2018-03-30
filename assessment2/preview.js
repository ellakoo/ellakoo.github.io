/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/

//-----------------------LEVEL 3-------------------------------//

var hair = document.getElementById("hair");
var eyes = document.getElementById("eyes");
var nose = document.getElementById("nose");
var mouth = document.getElementById("mouth");
var num = 2;

function changeHair (){
    if(num > 3) {
        num = 1;
    } hair.src = "img/hair" + num + ".png";
    num += 1;
}

function changeEyes (){
    if(num > 3) {
        num = 1;
    } eyes.src = "img/eyes" + num + ".png";
    num += 1;
}

function changeNose (){
    if(num > 3) {
        num = 1;
    } nose.src = "img/nose" + num + ".png";
    num += 1;
}

function changeMouth (){
    if(num > 3) {
        num = 1;
    } mouth.src = "img/mouth" + num + ".png";
    num += 1;
}

hair.addEventListener("click", function(){
    changeHair();
})

eyes.addEventListener("click", function(){
    changeEyes();
});

nose.addEventListener("click", function(){
    changeNose();
})

mouth.addEventListener("click", function(){
    changeMouth();
})


