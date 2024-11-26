// var x = 12;
// console.log("Hello JavaScript");
// console.log('Isi dari variable \"x" adalah' + " = " + (x));
// alert('Isi dari variable "x" adalah' + ' ' + (x));


var nama = prompt('Masukan Nama Anda :');
var konfirmasi = confirm('Yakin Mau Belajar JavaScript?');
if (konfirmasi === true) {
    alert('Semangat Belajar Javascript ' + nama);
} else {
    while (konfirmasi === false){
        konfirmasi = confirm('Ayo Coba Terus ' + nama);
    }
        
    alert('...Tetap Semangat Ya Belajarnya ' + nama);
}

// var tes = confirm('Kamu Yakin?');
// if (tes === true ) {
//     alert('user menekan OK!');
// } else {
//     alert('user menekan CANCEL!');
// }

// alert('Mulai');
// for(var i = 0; i < 5; i++) {
//     alert('Hello World!');
// }
// alert('Selesai');