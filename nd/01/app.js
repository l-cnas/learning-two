const h1 = document.querySelector('h1');
h1.innerText = 1;

const h2 = document.querySelector('h1 + h2');
h2.innerText = 2;

const h3 = document.querySelector('h1 + h2 + h3');
h3.innerText = 3;

const h4 = document.querySelector('h1 + h2 + h3 + h4');
h4.innerText = 4;

const div = document.querySelector('div');

div.style.backgroundColor = 'blue';