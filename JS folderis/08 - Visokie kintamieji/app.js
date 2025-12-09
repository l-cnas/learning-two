// // 1. .length (savybė) - apskaičiuoja ir grąžina string'o ilgį
 
// const pasisveikinimas = 'Labas rytas';
// console.log(pasisveikinimas);
 
// console.log(pasisveikinimas.length); // 11


// // 2. Paieškos metodai
 
// // a) .indexOf() - ieško pirmo ieškomo fragmento pradžios indekso
// console.log(pasisveikinimas.indexOf('as')); // 1
 
// // b) .lastIndexOf() - ieško paskutinio ieškomo fragmento pradžios indekso
// console.log(pasisveikinimas.lastIndexOf('as')); // 9
 
// // c) .include() - ieško argumento reikšmės (grąžina true/false)
// console.log(pasisveikinimas.includes('rytas')); // true
// console.log(pasisveikinimas.includes('Rytas')); // false
 
// // d) .startsWith() - tikrina ar stringas prasideda argumento reikšme (grąžina true/false)
// console.log(pasisveikinimas.startsWith('Labas')); // true
// console.log(pasisveikinimas.startsWith('labas')); // false
 
// // d) .endsWith() - tikrina ar stringas baigiasi argumento reikšme (grąžina true/false)
// console.log(pasisveikinimas.endsWith('rytas')); // true
// console.log(pasisveikinimas.endsWith('Rytas')); // false

// // .startsWith() ir .endsWith() yra labai naudingi tikrinant pvz:
// // - ar failo pavadinimas baigiasi .jpg
// // - ar URL prasideda https://
// // - ar sakinys prasideda specifine fraze
 

// 3. String'o (case) pakeitimo metodai:
 
console.log(pasisveikinimas);
 
// a) .toUpperCase() - pakeičia visas raides didžiosiomis
console.log(pasisveikinimas.toUpperCase());
 
// b) .toLowerCase() - pakeičia visas raides mažosiomis
console.log(pasisveikinimas.toLowerCase());

// // 4. Teksto keitimo metodai
 
// // a) .replace(ieškoma reikšmė, kuo keičiam) - suranda PIRMĄ ieškomą reikšmę ir ją pakeičia
// console.log(pasisveikinimas.replace('as', 'AS')); // LabAS rytas
 
// // b) .replaceAll(ieškoma reikšmė, kuo keičiam) - suranda visas ieškomas reikšmes ir jas pakeičia
// console.log(pasisveikinimas.replaceAll('as', 'AS')); // LabAS rytAS

// // 5. String'o dalių paėmimas
 
// slice(start, end) - Geriausias ir moderniausias būdas kirpti string'ą
// substring(start, end)
// substr(start, length) - nebenaudojamas, bet dokumentacijoj sutiksit
 
 
// // slice(start, end) - grąžina string'o dalį nuo start iki end (start įtraukiamas, end neįtraukiamas)
 
// const diena = "Šiandien gera diena";
// console.log(diena.slice(0, 8));
 
// // Praleisite antrąjį parametrą (end), metodas iškirps likusią eilutės dalį:
// console.log(diena.slice(8)); // gera diena
 
// console.log(diena.slice(-3)); // priima neigiamą skaičių kaip argumentą
 
// console.log(diena.slice(-diena.length)); //Šiandien gera diena
 
// function sum(a, b) {
//     return a + b;
// }
 
// console.log(diena.slice(sum(6, 2))); // gera diena
 
// console.log(diena.slice(diena.indexOf('gera'))); //gera diena
 
// // .substring(start, end) - veikia kaip .slice() bet nepriima neigiamų reikšmių
// console.log(diena.substring(0, 8));
// console.log(diena.substring(8));
// // neigiamas reikšmes vertina kaip 0  
// console.log(diena.substring(-3));


// // 6. Teksto tvarkymo metodai
 
// const stringasTrim = '  Labas rytas   '
 
// // .trim() - nuima tarpus priekyje ir gale
// console.log(stringasTrim.trim()); // 'Labas rytas'
 
// // .trimStart() - nuima tarpus priekyje
// console.log(stringasTrim.trimStart()); // 'Labas rytas  '
 
// // .trimEnd() - nuima tarpus gale
// console.log(stringasTrim.trimEnd()); // '  Labas rytas'

// // 7. Kūrimo / generavimo metodai
 
// // Kartojimas .repeat(keik kartų kartoti)
 
// const kartoti = 'alio ';
 
// console.log(kartoti.repeat(3)); // 'alio alio alio '
 
// console.log(kartoti.repeat(3).trimEnd()); //'alio alio alio'
 
// // Generavimas - simbolių pridėjimas pradžioje ir gale
 
// const agentas = '7'
 
// // .padStart(kokio ilgio turi gautis stringas, kokie simboliai)
// console.log(agentas.padStart(3, '0')); // 007
 
// // .padEnd(kokio ilgio turi gautis stringas, kokie simboliai)
// console.log(agentas.padEnd(5, '0')); // 70000