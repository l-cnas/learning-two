function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


console.log(rand(0, 100), 'nd 02');

let a1 = rand(1, 3);
let b1 = rand(1, 3);

const miniFun = function (a, b) {
    if (a < b) {
        return animal = 'Bebras'
    } else {
        if (a > b) {
            return animal = 'Barsukas'
        } else {
            return animal = 'Briedis'
        }

    }
};

console.log(miniFun(a1, b1));


// 2
const button1 = document.querySelector('button');
const btnEvent = document.querySelector('h2');


button1.addEventListener('click', function () {
    btnEvent.innerText = animal;
});