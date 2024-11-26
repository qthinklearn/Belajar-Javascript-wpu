// REKURSIF
//adalah sebuah function yang memanggil dirinya sendiri.


//contoh menampilkan angka dari 10 sampai 1

//jika menggunakan for
// for(var i = 10; i >= 1; i--) {
//     console.log(i);
// }

//jika menggunakan funtion rekursif
// function cetakAngka(n) {
//     if ( n === 0) {    //base case
//         return;
//     }
//     console.log(n);
//     cetakAngka(n-1);
// }
// cetakAngka(10);

//contoh lain basic penggunaan rekursif adalah menghitung faktorial(!)
//5! adalah 5 x 4 x 3 x 2 x 1
function faktorial(n) {
    if (n === 0) return 1;
    console.log(n);
    return n * faktorial(n-1);    
}
console.log(faktorial(7));