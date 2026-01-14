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
                initProductsList();
            })
            .catch(err => {
                console.error('Klaida kuriant prekę:', err);
            });
    });
}

const initProductsList = _ => {
    // Surandam prekių sąrašo vietą ir šabloną
    const productsListEl = document.querySelector('[data-products-list]');
    productsListEl.innerHTML = ''; // išvalom esamą turinį
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
                    initDeleteModal(product);
                    // čia bus trynimo kodas
                });

                const editBtn = productEl.querySelector('[data-edit-btn]');
                editBtn.addEventListener('click', e => {
                    e.preventDefault();
                    initEditModal(product);
                });


                // Pridedam šabloną su prekėm į sąrašą
                productsListEl.appendChild(productEl);
            });
        })
        .catch(err => {
            console.error('Klaida gaunant prekes:', err);
        });
}

const initDeleteModal = product => {
    const deleteModal = document.querySelector('[data-delete-modal]');
    // čia bus modalo atidarymo logika

    // Randame elementą, kuriame bus rodomas prekės pavadinimas
    const productNameSpan = deleteModal.querySelector('[data-delete-product-name]');

    // Įdedame prekės pavadinimą į modalą
    productNameSpan.textContent = product.productName;
    deleteModal.style.display = 'block';

    const destroyBtn = deleteModal.querySelector('[data-destroy-btn]');

    const destroyFunction = e => {

        // čia bus prekės ištrynimo logika
        e.preventDefault();
        // užklausos pvz.: http://localhost/items/15 perdavimas per parametrą
        axios.delete(`${serverUrl}/${product.id}`) // užklausos metodas DELETE
            .then(res => {
                console.log('Prekė ištrinta sėkmingai:', res);
                deleteModal.style.display = 'none'; // uždarom modalą
                // Papildomai reikėtų atnaujinti prekių sąrašą, kad ištrinta prekė nebebūtų matoma
                initProductsList();
            })
            .catch(err => {
                console.error('Klaida trinant prekę:', err);
            });
    }

    // Pridedam mygtuko paspaudimo eventą
    destroyBtn.addEventListener('click', destroyFunction);
}

const initEditModal = product => {
    const editModal = document.querySelector('[data-edit-modal]');
    // čia bus modalo atidarymo logika
    editModal.style.display = 'block';
    // užpildome formą esamais duomenimis
    const form = editModal.querySelector('form');
    form.productName.value = product.productName;
    form.productPrice.value = product.productPrice;
    form.productQuantity.value = product.productQuantity;
    form.productDescription.value = product.productDescription;

    const updateBtn = editModal.querySelector('[data-update-btn]'); // surandam save mygtuką

    const updateFunction = e => {
        e.preventDefault();
        // čia bus prekės atnaujinimo logika
        const updatedData = {
            productName: form.productName.value,
            productPrice: form.productPrice.value,
            productQuantity: form.productQuantity.value,
            productDescription: form.productDescription.value
        };

        axios.put(`${serverUrl}/${product.id}`, updatedData) // užklausos metodas PUT
            .then(res => {
                console.log('Prekė atnaujinta sėkmingai:', res);
                editModal.style.display = 'none'; // uždarom modalą
                // nuimam išklausytoją, kad paspaudus kitą kartą neveiktų sena funkcija
                updateBtn.removeEventListener('click', updateFunction);
                // Papildomai reikėtų atnaujinti prekių sąrašą, kad matytųsi atnaujinti duomenys
                initProductsList();
            })
            .catch(err => {
                console.error('Klaida atnaujinant prekę:', err);
            });
    }

    updateBtn.addEventListener('click', updateFunction);
}

initApp();