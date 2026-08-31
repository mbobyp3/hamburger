/* membandingkan 2 nilai di dalam Javascript -> Comparison operator -> 
1. Sama dengan ( === )
2. Tidak sama dengan ( !== )
3. Lebih dari ( > )
4. Kurang dari ( < )
5. Lebih dari atau sama dengan ( >= )
6. Kurang dari atau sama dengan ( <= )
*/

const stock = 10;

if (stock === 0) {
    console.log('Produk sudah habis');
} else {
    console.log('Produk masih tersedia');
}

const comparison1 = 10 > 5; //Expected output -> true
const comparison2 = 8 < 4; //Expected output -> false
const comparison3 = -1 >= 2; //Expected output -> false
const comparison4 = 0.5 <= 0; //Expected output -> false

console.log(comparison1);
console.log(comparison2);
console.log(comparison3);
console.log(comparison4);