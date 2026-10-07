const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nilai angka: ", (input) => {
    let nilai = Number(input);

    // Validasi input harus berupa angka
    if (isNaN(nilai)) {
        console.log("Input tidak valid! Masukkan nilai berupa angka.");
    } 
    else if (nilai >= 85) {
        console.log("Nilai huruf: A");
    } 
    else if (nilai >= 70) {
        console.log("Nilai huruf: B");
    } 
    else if (nilai >= 55) {
        console.log("Nilai huruf: C");
    } 
    else if (nilai >= 40) {
        console.log("Nilai huruf: D");
    } 
    else {
        console.log("Nilai huruf: E");
    }

    rl.close();
});