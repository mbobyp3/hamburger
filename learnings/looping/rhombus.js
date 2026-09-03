const readline = require('readline-sync');
const sizeStar = Number(readline.question('Enter size: '));

// --- BAGIAN ATAS (Piramida Normal) ---
for (let baris = 1; baris <= sizeStar; baris++) {
    let cetakBaris = '';
    for (let spasi = 1; spasi <= sizeStar - baris; spasi++) {
        cetakBaris += ' ';
    }
    for (let bintang = 1; bintang <= (baris * 2) - 1; bintang++) {
        cetakBaris += '*';
    }
    console.log(cetakBaris);
}

// --- BAGIAN BAWAH (Piramida Terbalik) ---
// Dimulai dari "sizeStar - 1" agar baris tengah yang paling lebar tidak dicetak dua kali
for (let baris = sizeStar - 1; baris >= 1; baris--) {
    let cetakBaris = '';
    
    // Loop Spasi: Semakin ke bawah, spasi bertambah lebar
    for (let spasi = 1; spasi <= sizeStar - baris; spasi++) {
        cetakBaris += ' ';
    }
    
    // Loop Bintang: Tetap memakai rumus deret ganjil
    for (let bintang = 1; bintang <= (baris * 2) - 1; bintang++) {
        cetakBaris += '*';
    }
    
    console.log(cetakBaris);
}