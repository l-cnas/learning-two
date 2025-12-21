// 1. 

class kibiras1 {
    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
    }

    kiekPririnktaAkmenu() {
        console.log(`Akemnu pririnkta: ${this.akmenuKiekis}`)
    }

}

const kibiras = new kibiras1();

kibiras.prideti1Akmeni();
kibiras.kiekPririnktaAkmenu();
kibiras.pridetiDaugAkmenu(55);
kibiras.kiekPririnktaAkmenu();

// 2. 

class pinigine {
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    }

    ideti(kiekis) {
        kiekis <= 2 ? this.metaliniaiPinigai += kiekis : this.popieriniaiPinigai += kiekis;
    }

    skaiciuoti() {
        console.log(`Is viso pinigu: ${(this.metaliniaiPinigai + this.popieriniaiPinigai)}`)
    }
}

const rudaPinigine = new pinigine();

rudaPinigine.ideti(2);
rudaPinigine.skaiciuoti();
rudaPinigine.ideti(4);
rudaPinigine.skaiciuoti();

// 3.

class Troleibusas {
    constructor () {
        this.keleiviuSkaicius = 0;
        this.ghost = 0;
    }

    ilipa(keleivis){
        this.keleiviuSkaicius += keleivis;
    }

    islipa(keleivis) {
        this.keleiviuSkaicius -= keleivis;
    }

    vaziuoja() {
        if (this.keleiviuSkaicius >= 0) {
            console.log(`Vaziiuoja siuo metu: ${this.keleiviuSkaicius}`)
        } else if (this.keleiviuSkaicius < 0) {
            this.ghost += Math.abs(this.keleiviuSkaicius);
            this.keleiviuSkaicius = 0;
            console.log(`Siuo metu vaziuoja ${this.keleiviuSkaicius} ir ${this.ghost} smeklu.\n Laikas zegnotis.`)
        }
    }
}

const troleibusas = new Troleibusas();

troleibusas.ilipa(15);
troleibusas.vaziuoja();
troleibusas.islipa(16);
troleibusas.vaziuoja();