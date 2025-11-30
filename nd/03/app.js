function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


// 2.

const divAntras = document.querySelector('#antraUzduotis');

for (let i = 0; i < 44; i++) {
    let skaicius = rand(14, 44);
    if (skaicius % 4 === 0) {
        divAntras.innerHTML += `<span style="color:red">${skaicius}</span> `;
    } else {
        divAntras.innerHTML += `<span style="color:blue">${skaicius}</span> `;
    }
}

// 3.

const divTrecia = document.querySelector('#treciaUzduotis');
divTrecia.style.display = 'flex';

let tekstas = 0;

for (let i = 0; i < 14; i++) {
    let apskritimas = document.createElement('div');
    apskritimas.style.width = '25px';
    apskritimas.style.height = '25px';
    apskritimas.style.borderRadius = '50%';
    apskritimas.style.background = 'skyblue';
    apskritimas.style.margin = '5px';
    apskritimas.innerText = ++tekstas;

    divTrecia.appendChild(apskritimas);

}