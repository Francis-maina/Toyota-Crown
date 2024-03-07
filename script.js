    var header = document.getElementById("header");
    var ms = document.getElementById("models");
    var m3 = document.getElementById("model3");
    var mx = document.getElementById("modelx");
    var my = document.getElementById("modely");
    var model = document.getElementById("model");


    ms.onclick = function(){
        header.style.backgroundImage = "url(Images/10101004_201510b.webp)";
        model.innerHTML = "Model S";
    }
    m3.onclick = function(){
        header.style.backgroundImage = "url(Images/1200px-Kokusai_Motorcars_Toyota_Crown_Majesta_S210.jpg)";
        model.innerHTML = "Model 3";
    }
    mx.onclick = function(){
        header.style.backgroundImage = "url(Images/IMG-20230409-WA0002.jpg)";
        model.innerHTML = "Model X";
    }
    my.onclick = function(){
        header.style.backgroundImage = "url(Images/mlp-img-ext-2024-crown.jpg)";
        model.innerHTML = "Model Y";
    }