//gaya penulisan lama
const name = 'Pisang';
const weight = 5;
const isSoldOut = false;

//disusun menjadi properti. fungsinya, saat variabel serupa, tidak terjadi error. sebelumnya dipelajari agar variabel harus unik agar tidak error.
const product = {
    name: 'Pisang',
    weight: 5,
    isSoldOut: false
};

const person = {
    name: 'Boby',
    age: 30,
    birthYear: '1996',
    isEmployed: 'true'
};
console.log(person);

/**Accessing Properties
 * 1. Dot notation (.)
 * 2. Bracket notation ([])
 */

console.log(person.name);

/**Challenge
 * Menggunakan object person seblumnya, log text dengan format:
 * "____ lahir pada tahun ____"
 */

const text1 = person.name + ' lahir pada tahun ' + person.birthYear + '.';
console.log(text1);

const usernames = [
    'yandi',
    'dimas',
    'mita'
];
const text2 = 'Ada total ' + usernames.length + ' username.';
console.log(text2);

/**Challenge
 * Gunakan array usernames di atas.
 * Buat variable 'newUserName' yaitu string.
 * Jika 'newUserName' sudah ada di dalam array usernames,
 * log "Username sudah digunakan",
 * Kalau nggak log "Username tersedia"
 */
const inputUserName = 'Boby';
const newUserName = usernames.includes(inputUserName);

if (newUserName) {
    console.log('Username ' + inputUserName + ' sudah digunakan')
} else {
    console.log('Username ' + inputUserName + ' tersedia')
};

/** */