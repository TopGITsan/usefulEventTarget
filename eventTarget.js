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

// form validation
const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
let para = document.querySelector('#warning');

// prevent default if form field empty
form.onsubmit =(e)=>{
    if (fname.value === '' || lname.value === ''){
        e.preventDefault();
        para.textContent = 'Please fill in both names!';
    }
};


// video

const btn = document.querySelector('button');
const videoBox = document.querySelector('header');
const video = document.querySelector('video');


btn.onclick = ()=>{ videoBox.setAttribute('class', 'showing');
};

videoBox.onclick = ()=>{ videoBox.setAttribute('class', 'hidden')};

video.onclick = (e)=>{ 
    e.stopPropagation();
    video.play();
};
