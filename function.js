// function jumlahDuaKubus(a, b) {
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;

//     return total;
// }
// alert(jumlahDuaKubus(12, 15));



// function tambah(a,b) {  // a dan b sebagai parameter 
//     return a + b;
// }
// var a = parseInt(prompt('ini nilai ke 1'));
// var b = parseInt(prompt('isi nilai ke 2'));
// alert(tambah(a*2,b*2));  // a dan b sebagai argument


// function tambah(a,b) {
//     return a + b;
// }
// function kali(a,b) {
//     return a * b;
// }
// var a = parseInt(prompt('isi angka ke 1'));
// var b = parseInt(prompt('isi angka ke 2'));
// var hasil = tambah(kali(a,b),kali(a,b));
// alert(hasil);

// function tambah() {
//     return arguments;
// }
// var coba = tambah(5,10,20,'hello',false);
// console.log(coba);


// //contoh argumen yang tanpa memperdulikan parameter
// function tambah() {
//     var hasil = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         hasil += arguments[i];
//     }
//     return hasil;
// }
// alert(tambah(5,7,5));

//scope
var i = 10;
function tulis()
