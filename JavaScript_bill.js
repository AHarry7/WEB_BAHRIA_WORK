

var i = document.getElementById("increment");
var d = document.getElementById("decrement");


var x = 0;

function increase() {

    ++x;

    document.getElementById("amount").value = x;


}

function decrease() {
    --x;
    document.getElementById("amount").value = x;
}


function calculateBill() {
    var food = document.getElementById("food").value;
    var amount = document.getElementById("amount").value;
    var price , uprice;
    var Coffee=30, Tea=25, Cola=50, Samosay=30, Pizza=400, Fries=90, Chaat=70, Cake=65, Burger=80;

    switch (food) {
        case 'Coffee':
            price = amount * Coffee;
            break;
        case 'Tea':
            price = amount * Tea;
            break;
        case 'Coca Cola':
            price = amount * Cola;
            break;
        case 'Samosay':
            price = amount * Samosay;
            break;
        case 'Pizza':
            price = amount * Pizza;
            break;
        case 'Fries':
            price = amount * Fries;
            break;
        case 'Channa Chaat':
            price = amount * Chaat;
            break;
        case 'Cake':
            price = amount * Cake;
            break;
        case 'Burger':
            price = amount * Burger;
            break;
    }

    uprice = price / amount;
    
    alert("Product : " + food + "\n Unit Price : " + uprice + "\n Amount : " + amount + "\n Price : " + price);
}