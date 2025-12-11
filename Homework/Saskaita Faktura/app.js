

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

    //Numeris
    const pvmNr = document.createElement('p');
    pvmNr.innerText = `Numeris: ${pvmNrSk}`;
    topFaktura.appendChild(pvmNr);

    // Israsymo data
    const date = document.createElement('p');
    date.innerText = `Israsyta: ${pvmDate}`;
    topFaktura.appendChild(date);
};






fetch('https://in3.dev/inv/')
    .then(res => res.json())
    .then(stuff => {
        console.log(stuff);
        data = stuff;
        topData();
    });
