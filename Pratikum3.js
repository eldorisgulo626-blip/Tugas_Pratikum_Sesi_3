const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nama atau kalimat: ", (teks) => {
    let hasil = "";

    for (let i = teks.length - 1; i >= 0; i--) {
        hasil += teks[i];
    }

    console.log("Hasil setelah dibalik: " + hasil);

    rl.close();
});