// var jmlangkot = prompt('Masukan Jumlah Angkot : ');
// var angkotBeroperasi = prompt('Masukan Angkot yang beroperasi : ');

var jmlangkot = 10;
var angkotBeroperasi = 6;


for (var noAngkot = 1; noAngkot <= jmlangkot; noAngkot++) {
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
    }
}