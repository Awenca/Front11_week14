function Askname () {
    let name = prompt ('Как тебя зовут?')
    alert(`Привет, ${name}!`);
}

let sum =() => x+y
let x = document.getElementById('number1');
let y = document.getElementById('number2');
document.getElementById('answer').innerHTML=sum;

function subtract(){
    let x = document.getElementById('number1');
    let y = document.getElementById('number2');
    result = +x - +y;
    document.getElementById('answer').innerHTML=subtract();
};

function multiply(){
    let x = document.getElementById('number1');
    let y = document.getElementById('number2');
    result = +x * +y;
    document.getElementById('answer').innerHTML=multiply();
};

function divide (){
    let x = document.getElementById('number1');
    let y = document.getElementById('number2');
    result = Number (x) / Number (y);
    document.getElementById('answer').innerHTML=divide();
};