const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tanya(pertanyaan) {
    return new Promise((resolve) => {
        rl.question(pertanyaan, resolve);
    });
}

async function main() {
    let totalKalori = 0;

    let jumlahAktivitas = parseInt(
        await tanya("Masukkan jumlah aktivitas: ")
    );

    for (let i = 1; i <= jumlahAktivitas; i++) {
        console.log(`\nAktivitas ke-${i}`);
        console.log("1. Lari");
        console.log("2. Push-up");
        console.log("3. Plank");

        let olahraga = await tanya("Pilih olahraga (1/2/3): ");
        let waktu = parseFloat(
            await tanya("Masukkan lama olahraga (menit): ")
        );

        let kalori = 0;

        if (olahraga === "1") {
            // Lari: 60 kalori setiap 5 menit
            kalori = waktu * 60 / 5;
        } 
        else if (olahraga === "2") {
            // Push-up: 200 kalori setiap 30 menit
            kalori = waktu * 200 / 30;
        } 
        else if (olahraga === "3") {
            // Plank: 5 kalori setiap 1 menit
            kalori = waktu * 5;
        } 
        else {
            console.log("Pilihan olahraga tidak valid!");
            i--;
            continue;
        }

        totalKalori += kalori;

        console.log(`Kalori terbakar: ${kalori} kalori`);
    }

    console.log("\n==============================");
    console.log(`Total kalori terbakar: ${totalKalori} kalori`);
    console.log("==============================");

    rl.close();
}

main();