function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

// https://docs.google.com/document/d/1l2bivj7gFF_qIR-uV6P3c086TNrW0IPNUIf466bqGvs/edit?tab=t.0
// https://in3.dev/nd/01/


// 1.
const h1 = document.querySelector('h1');
h1.innerText = 1;

const h2 = document.querySelector('h1 + h2');
h2.innerText = 2;

const h3 = document.querySelector('h1 + h2 + h3');
h3.innerText = 3;

const h4 = document.querySelector('h1 + h2 + h3 + h4');
h4.innerText = 4;


// 2.
const div = document.querySelector('div');

div.style.backgroundColor = 'blue';
div.style.height = '15px';
div.style.width = '15px';

const div2 = document.querySelector('div + div');

div2.style.backgroundColor = 'red';
div2.style.height = '15px';
div2.style.width = '15px';
div2.style.borderRadius = '50%';


// 3.

/// Randomai
let skaicius1 = rand(0, 4);
let skaicius2 = rand(0, 4);

/// mano varai (let arba const)

let didesnis = Math.max(skaicius1, skaicius2);
let mazesnis = Math.min(skaicius1, skaicius2);


/// Spanu reiksmes
const span1 = document.querySelector('#go3 span');
span1.innerText = didesnis;

const span2 = document.querySelector('#go3 span + span');
span2.innerText = mazesnis;

const span3 = document.querySelector('#go3 span + span +span');
span3.innerText = didesnis / mazesnis;


// 4.
let rng1 = rand(50, 200);
let rng2 = rand(50, 200);
let rng3 = rand(50, 200);

//pyp pyp pyp pyp pyp

let small;
let medium;
let big;

if (rng1 <= rng2 && rng1 <= rng3) {
    small = rng1;
    if (rng2 <= rng3) {
        medium = rng2;
        big = rng3;
    } else {
        medium = rng3;
        big = rng2;
    }
} else if (rng2 <= rng1 && rng2 <= rng3) {
    small = rng2;
    if (rng1 <= rng3) {
        medium = rng1;
        big = rng3;
    } else {
        medium = rng3;
        big = rng1;
    }
} else {
    small = rng3;
    if (rng1 <= rng2) {
        medium = rng1;
        big = rng2;
    } else {
        medium = rng2;
        big = rng1;
    }
}




const divas1 = document.querySelector('#go4 div');
divas1.style.height = small + 'px';
divas1.style.width = small + 'px';
divas1.style.borderRadius = '50%';
divas1.style.border = "3px solid black";


const divas2 = document.querySelector('#go4 div + div');
divas2.style.height = medium + 'px';
divas2.style.width = medium + 'px';
divas2.style.borderRadius = '50%';
divas2.style.border = "3px solid black";


const divas3 = document.querySelector('#go4 div + div + div');
divas3.style.height = big + 'px';
divas3.style.width = big + 'px';
divas3.style.borderRadius = '50%';
divas3.style.border = "3px solid black";
