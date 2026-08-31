/* if = 'jika'
else = 'kalau nggak'
*/

const isSoldOut = false;

if (isSoldOut) {
    console.log('Produk sudah habis');
} else {
    console.log('Produk masih tersedia');
}

/* Selanjutnya tentang else ef
*/
const color = 'merah';

//versi 1 -> panjang (tanpa else if) -> jauh dari ideal. kode terlalu panjang dan sulit dibaca
if (color === 'merah') {
    console.log('Berhenti');
} else {
    if (color === 'kuning') {
        console.log('Tetap berhenti kalau bisa');
    } else {
        if (color === 'hijau') {
            console.log('Go!');            
        } else {
            console.log('Warna tidak valid!');
        }
    }    
}

//versi 2 -> diperpendek (menggunakan else if) - ideal dan lebih nyaman dipahami
if (color === 'merah') {
    console.log ('Berhenti');
} else if (color === 'kuning') {
    console.log('Tetap berhenti kalau bisa');
} else if (color === 'hijau') {
    console.log('Go!');
} else {
    console.log('Warna tidak valid!');
}

/*if statement membaca kode dari kiri ke kanan, lalu dari atas ke bawah.
jika jawaban telah ditemukan, pembacaan kode langsung dihentikan dan diprint kesimpulannya.
maka dalam menyusun kode, pastikan urutannya sesuai dengan kebutuhan expected output-nya
*/