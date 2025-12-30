console.log('OOP');

class car { // deklaruojam klase
    constructor(brand, year) { // spec.funkcija, kuri pasileidžia visada
        this.brand = brand;
        this.year = year;
    }

    getInfo() { // metodas, veiksmas kurį padaro objektas
        console.log(`${this.brand}, ${this.year}`)
    }
}

let myFirstCar = new car('Audi', 2005); // kuriam objektą

myFirstCar.getInfo();


class BankAccount {
    constructor(money) {
        this.balance = money;
    }

    idetiPinigu(kiekis) {
        this.balance += kiekis;
    }

    isimtiPinigu(kiekis) {
        kiekis > this.balance ? console.log(`You broke bruh, in account only ${this.balance}`) : this.balance -= kiekis;
    }

    saskaitosLikutis() {
        this.balance == 0 ? console.log(`You broke.`) : console.log(`Jusus saskaitoje siuo metu yra ${this.balance} pnigu.`);
    }
}

let saskaita = new BankAccount(785533);

saskaita.saskaitosLikutis();
saskaita.isimtiPinigu(999999);





class Student {
    constructor (vardas, gimimoMetai) {
        this.vardas = vardas;
        this.year = gimimoMetai;
        this.grades = [];
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    addGradeToFirstPlace(grade) {
        this.grades.unshift(grade);
    }
}

let Petras = new Student ('Petras', 2007);
console.log(Petras);

Petras.addGrade(6);
Petras.addGrade(6);
Petras.addGrade(9);
Petras.addGrade(10);
console.log(Petras);

