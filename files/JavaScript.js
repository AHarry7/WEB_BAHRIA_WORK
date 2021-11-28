var a = "";
var b = "";
var c = "";
function num(i) {

    document.getElementById("screen").value += i;

}

function op(p) {

    a = document.getElementById("screen").value;
    document.getElementById("screen").value = "";
    if (p == "+")
        c = 1;
    else if (p == "-")
        c = 2;
    else if (p == "/")
        c = 3;
    else if (p == "*")
        c = 4;
}

function result() {
    b = document.getElementById("screen").value;
    document.getElementById("screen").value = "";
    switch (c)
    {
        case 1: document.getElementById("screen").value = parseInt(a) + parseInt(b);
            break;
        case 2: document.getElementById("screen").value = parseInt(a) - parseInt(b);
            break;
        case 3: document.getElementById("screen").value = parseInt(a) / parseInt(b);
            break;
        case 4: document.getElementById("screen").value = parseInt(a) * parseInt(b);
            break;
    }
    
}



function clr() {

    document.getElementById("screen").value = "";
  
}