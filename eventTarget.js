for (let i=0; i<16; i++){
    let myDiv = document.createElement('div');
    document.body.appendChild(myDiv);
}

function random(num){
    return Math.floor(Math.random()*num);
}

function bgColor(){
    let newColor= 'rgb('+random(255)+','+random(255)+','+random(255)+','+0.5+')';
    return newColor;
}

let divs = document.querySelectorAll('div');

divs.forEach(div=> div.onclick=(e)=> e.target.style.backgroundColor = bgColor());