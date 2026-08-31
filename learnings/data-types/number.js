/* Arithmetic Operator
1. Tambah ( + ) = menjumlahkan
2. Kurang ( - ) = mengurangi
3. Kali ( * ) = mengalikan
4. Bagi ( / ) = membagi
5. Modulo ( % ) = menghitung sisa bagi
6. Eksponen ( ** ) = memangkatkan
7. Increment ( ++ ) = menambah nilai variabel sebanyak 1 angka
8. Decrement ( -- ) = mengurangi nilai variabel sebanyak 1 angka
*/

const a = 10;
const b = 5;
const floatingPoint = 0.5;
const penjumlahan = a + b;
const pengurangan = a - b;
const perkalian = a * b;
const pembagian = a / b;
const modulo = a % b;
const exponent = a ** b;

console.log(floatingPoint);
console.log(penjumlahan);
console.log(pengurangan);
console.log(perkalian);
console.log(pembagian);
console.log(modulo);
console.log(exponent);
console.log('');

/*Kamu penjual buah dengan list harga sbb:
Apel: Rp5.000
Pisang: Rp 10.000
Ada customer membeli 3 apel dan 2 pisang.
Dia juga punya kupon diskon1 Rp10.000 dan kupon diskon2 10%. Tidak dapat digunakan sekaligus. harus dengan transaksi yang berbeda.
Hitung dan log total harga!
*/

const priceApple = 5000;
const priceBanana = 10000;
const totalApple = 3;
const totalBanana = 2;
const discount1 = 10000; 
const discount2 = 0.1; //10%
const originalPrice = totalApple * priceApple + totalBanana * priceBanana;
const discount1Price = originalPrice - discount1; 
const discount2Price = originalPrice * (1 - discount2);

console.log(discount1Price);
console.log(discount2Price);