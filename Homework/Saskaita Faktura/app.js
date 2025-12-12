

let data; // Tuscias variable, kur sukisim viska gauta is API

// Prasitestinam, kisam viska i funkcija. 

function topData() {
    console.log('test loadinam', data.company.buyer.name);

    // kintamuju sekcija.

    const pvmNrSk = data.number;       // Musu fakturos numeriukas
    const pvmDate = data.date;         // fakturos israsymo data
    const pvmDueDate = data.due_date;  // iki kada susimoket

    // Top sekcija.
    const topFaktura = document.querySelector('#saskaitaNr');
    const pardavejas = document.querySelector('#pardavejas');
    const pirkejas = document.querySelector('#pirkejas');

    //Numeris
    const pvmNr = document.createElement('p');
    pvmNr.innerText = `Numeris: ${pvmNrSk}`;
    topFaktura.appendChild(pvmNr);

    // Israsymo data
    const date = document.createElement('p');
    date.innerText = `Israsyta: ${pvmDate}`;
    topFaktura.appendChild(date);

    // Pirkejas naudojant object.values, ima tik reiksmes.
    for (const value of Object.values(data.company.buyer)) {
        const p = document.createElement('p');
        p.innerText = value;
        pirkejas.appendChild(p);
    }

    //tas pats pardavejui
    for (const value of Object.values(data.company.seller)) {
        const p = document.createElement('p');
        p.innerText = value;
        pardavejas.appendChild(p);
    }

};






fetch('https://in3.dev/inv/')
    .then(res => res.json())
    .then(stuff => {
        console.log(stuff);
        data = stuff;
        topData();
    });
