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


// 3. 


const grazinaRaides = function (_) {
    if (_.length > 3) {
        return (_[0] + _[1] + _[2]);
    } else {
        return _;
    }

}

console.log(grazinaRaides('bebras'), '-grazin is bebro');
console.log(grazinaRaides('haha'), '-grazina is haha');

// 4.

const ketvirtas = function (_) {
    if (_.length % 2 == 0) {
        return ('Simbolių skaičius lyginis');
    } else {
        return _[(Math.floor(_.length / 2))];
    }
}

console.log(ketvirtas('zodis'));

// 5.

const calc = function (a, b, c) {
    if (c == '*' && b == 0 || a == 0) {
        return 'Is nulio nesidaugina!';
    } else if (c == '/' && b == 0 || a == 0) {
        return 'Is nulio nesidalina!';
    } else if (c == '-') {
        return (a - b);
    } else if (c == '+') {
        return (a + b);
    } else if (c == '*') {
        return (a * b);
    } else if (c == '/') {
        return (a / b);
    }

}

console.log(calc(15, 3, '/'));
