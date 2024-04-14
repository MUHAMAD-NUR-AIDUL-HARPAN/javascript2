console.log('===== PROGRAM MENGGUNAKAN IF =====');
const pendapatanHarian = 600000; 

let uangJasa;
let komisi;

if (pendapatanHarian <= 200000) {
    uangJasa = 10000;
    komisi = pendapatanHarian * 0.10;
} else if (pendapatanHarian > 200000 && pendapatanHarian <= 500000) {
    uangJasa = 20000;
    komisi = pendapatanHarian * 0.15;
} else if (pendapatanHarian > 500000) {
    uangJasa = 30000;
    komisi = pendapatanHarian * 0.20;
} else {
    console.log("Pendapatan tidak valid.");
}

// Output hasil
console.log("Uang Jasa: Rp." + uangJasa);
console.log("Komisi: Rp." + komisi);
console.log('\n')

console.log('===== PROGRAM MENGGUNAKAN SWITCH CASE =====')

const pendapatanHarian1 = 600000; 

let uangJasa1;
let komisi1;

switch (true) {
    case pendapatanHarian1 <= 200000:
        uangJasa1 = 10000;
        komisi1 = pendapatanHarian1 * 0.10;
        break;
    case pendapatanHarian1 > 200000 && pendapatanHarian1 <= 500000:
        uangJasa1 = 20000;
        komisi1 = pendapatanHarian1 * 0.15;
        break;
    case pendapatanHarian1 > 500000:
        uangJasa1 = 30000;
        komisi1 = pendapatanHarian1 * 0.20;
        break;
    default:
        console.log("Pendapatan tidak valid.");
}


console.log("Uang Jasa: Rp." + uangJasa1);
console.log("Komisi: Rp." + komisi1);
