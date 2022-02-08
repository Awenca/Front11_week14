function Askname() {
    let name = document.getElementById('yourName').value;
    const result = 'Привет, ' + name +'!';
    document.getElementById('greetings').innerHTML=result;
}

const sum =() => {
    let x = document.getElementById('number1').value;
    let y = document.getElementById('number2').value;
    const result = +x + +y;
    document.getElementById('answer').innerHTML=result;
}

const subtract =() => {
    let x = document.getElementById('number1').value;
    let y = document.getElementById('number2').value;
    const result = +x - +y;
    document.getElementById('answer').innerHTML=result;
};

function multiply(){
    let x = document.getElementById('number1').value;
    let y = document.getElementById('number2').value;
    const result = +x * +y;
    document.getElementById('answer').innerHTML=result;
};

function divide (){
    let x = document.getElementById('number1').value;
    let y = document.getElementById('number2').value;
    const result = Number (x) / Number (y);
    document.getElementById('answer').innerHTML=result;
};

function changeColor1 (){
    let elem1 = document.getElementById('fon1');
    elem1.style.background ='red';
}

function changeColor2 (){
    let elem2 = document.getElementById('fon2')
    elem2.style.background = 'blue';
}

function next(){
    let currentImg = document.getElementsByTagName('img')[0].value = 0;
    currentImg++;
    currentImg.style.borderColor = "green";
}