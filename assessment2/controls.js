var colorInput = document.getElementById("colorInput"),
    previewDisp = document.getElementById("preview"),
    numButton = document.getElementById("numberB"),
    rangeButton = document.getElementById("rangeB"),
    range1 = document.getElementById("range1"),
    range2 = document.getElementById("range2"),
    range3 = document.getElementById("range3"),
    range4 = document.getElementById("range4"),
    add = document.getElementById("addB");

//------------------------LEVEL 2b---------------------------//

colorInput.addEventListener("change", function(){
   previewDisp.style.backgroundColor = colorInput.value;
});

numButton.addEventListener("click", function(){
   changeType("number");
});

rangeButton.addEventListener("click", function(){
   changeType("range");
});


range1.addEventListener("change", function(){
    document.getElementById("hair").style.width = range1.value + "%";
});

range2.addEventListener("change", function(){
    document.getElementById("eyes").style.width = range2.value + "%";
});

range3.addEventListener("change", function(){
    document.getElementById("nose").style.width = range3.value + "%";
});

range4.addEventListener("change", function(){
    document.getElementById("mouth").style.width = range4.value + "%";
});

//--------------------------LEVEL 4a------------------------------//

add.addEventListener("click", function(){
    createFace();
});

//--------------------------LEVEL 4b------------------------------//

var random = document.getElementById("randomB");
var controls = document.getElementById("controls");
var r = 255;
var g = 255;
var b = 255;

random.addEventListener("click", function (){
    randomFace();
});

//---------------------------LEVEL 5a-----------------------------//

function createFace() {
    
    var newDiv = document.createElement("div");
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.id = "preview";
    newDiv.style.backgroundColor = previewDisp.style.backgroundColor;
    newDiv.style.display = "inline-block";
    document.getElementById("display").appendChild(newDiv);
    
    var hairImage = document.createElement("img");
    hairImage.src = hair.src;
    hairImage.className = "items";
    hairImage.id = "hair";
    hairImage.style.width = hair.style.width;
    hairImage.style.top = hair.style.top;
    newDiv.appendChild(hairImage);
    
    var eyesImage = document.createElement("img");
    eyesImage.src = eyes.src;
    eyesImage.className = "items";
    eyesImage.id = "eyes";
    eyesImage.style.width = eyes.style.width;
    eyesImage.style.top = eyes.style.top;
    newDiv.appendChild(eyesImage);
    
    var noseImage = document.createElement("img");
    noseImage.src = nose.src;
    noseImage.className = "items";
    noseImage.id = "nose";
    noseImage.style.width = nose.style.width;
    noseImage.style.top = nose.style.top;
    newDiv.appendChild(noseImage);
    
    var mouthImage = document.createElement("img");
    mouthImage.src = mouth.src;
    mouthImage.className = "items";
    mouthImage.id = "mouth";
    mouthImage.style.width = mouth.style.width;
    mouthImage.style.top = mouth.style.top;
    newDiv.appendChild(mouthImage);
}

function randomFace(){
   r = Math.round(Math.random()*255);
   g = Math.round(Math.random()*255);
   b = Math.round(Math.random()*255);
   hair.src = "img/hair" + Math.floor((Math.random() * 3) +1) + ".png";
   eyes.src = "img/eyes" + Math.floor((Math.random() * 3) +1) + ".png";
   nose.src = "img/nose" + Math.floor((Math.random() * 3) +1) + ".png";
   mouth.src = "img/mouth" + Math.floor((Math.random() * 3) +1) + ".png";
   previewDisp.style.backgroundColor = "rgb("+r+","+g+","+b+")";
   hair.style.width = range1.value + "%";
   range1.value = Math.floor(Math.random()*70);
   eyes.style.width = range2.value + "%";
   range2.value = Math.floor(Math.random()*70);
   nose.style.width = range3.value + "%";
   range3.value = Math.floor(Math.random()*70);
   mouth.style.width = range4.value + "%";
   range4.value = Math.floor(Math.random()*70);
}


//--------------------------LEVEL 5b----------------------------//

function changeType(type) {
  range1.type = type;
  range2.type = type;
  range3.type = type;
  range4.type = type; 
} 

//--------------------------LEVEL 6-----------------------------//

var auto = document.getElementById("AutoCreate");
var stopAuto = document.getElementById("StopAutoCreate");
var interval;

auto.addEventListener("click", function(){

    interval = setInterval(function(){
                randomFace();
                createFace()
                }, 500);
});

stopAuto.addEventListener("click", function(){

    clearInterval(interval)
});
    