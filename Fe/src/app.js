import axios from 'axios';

/*
    Prekės pavadinimas;
    Kaina;
    Kiekis sandėlyje;
    Trumpas aprašymas;
    ---Nuotrauka.
*/

const serverUrl = 'http://localhost/items';

const initApp = _ => {
    console.log('App started');
    initCreateForm();
    initProductsList();

    const allCloseBtns = document.querySelectorAll('[data-bs-dismiss="modal"]');
    allCloseBtns.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            const modal = btn.closest('.modal');
            modal.style.display = 'none';
        });
    });

}


const initCreateForm = _ => {
    // Randam formą ir mygtuką
    const form = document.querySelector('[data-create-form]');
    const createBtn = form.querySelector('[data-create-btn]');

    // Pridedam mygtuko paspaudimo eventą
    createBtn.addEventListener('click', _ => {
        // Surandam visus inputus su name atributu
        const allInputs = form.querySelectorAll('[name]');
        // Sukuriam tuščią objektą prekės duomenims laikyti
        const itemData = {};

        // Einam per visus inputus ir įdedam jų reikšmes į objektą
        allInputs.forEach(input => {
            const name = input.getAttribute('name'); // pavadinimas, kaina, kiekis, aprasymas
            const value = input.value; // input reikšmė
            itemData[name] = value; // itemData['pavadinimas'] = 'Tokia tai prekė'
        });

        axios.post(serverUrl, itemData)
            .then(res => {
                console.log('Prekė sukurta sėkmingai:', res.data);
                // Išvalom formą
                form.reset();
            })
            .catch(err => {
                console.error('Klaida kuriant prekę:', err);
            });
    });
}

const initProductsList = _ => {
    // Surandam prekių sąrašo vietą ir šabloną
    const productsListEl = document.querySelector('[data-products-list]');
    const productItemTemplate = document.querySelector('[data-product-template]');
    axios.get(serverUrl)
        .then(res => {
            const products = res.data.items; // gaunam prekių masyvą (items) iš serverio atsakymo (data)
            products.forEach(product => { // einame per visas prekes
                // Kuriam naują prekę iš šablono
                // klonuojam tuščią šabloną
                const productEl = productItemTemplate.content.cloneNode(true);
                // užpildom duomenis
                // productEl.querySelector('[data-name]') - suranda elementą su data-name atributu klonuotame šablone
                // product.productName - prekės pavadinimas iš serverio
                // .textContent - įterpia tekstą į elementą
                productEl.querySelector('[data-name]').textContent = product.productName;
                productEl.querySelector('[data-price]').textContent = `Kaina: ${product.productPrice} EUR`;
                productEl.querySelector('[data-quantity]').textContent = `Kiekis sandėlyje: ${product.productQuantity}`;
                productEl.querySelector('[data-description]').textContent = product.productDescription;

                const delBtn = productEl.querySelector('[data-delete-btn]');
                delBtn.addEventListener('click', e => {
                    e.preventDefault();
                    initDeleteModal(product.id);
                    // čia bus trynimo kodas
                });


                // Pridedam šabloną su prekėm į sąrašą
                productsListEl.appendChild(productEl);
            });
        })
        .catch(err => {
            console.error('Klaida gaunant prekes:', err);
        });
}

const initDeleteModal = id => {
    const deleteModal = document.querySelector('[data-delete-modal]');
    // čia bus modalo atidarymo ir uždarymo logika
    deleteModal.style.display = 'block';
}

initApp();