var jmlangkot = prompt('Masukan Jumlah Angkot : ');
var angkotBeroperasi = prompt('Masukan Angkot Yang Beroperasi: ');


// var jmlangkot = 10;
// var angkotBeroperasi = 5;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
noAngkot++;
}

for (noAngkot; noAngkot <= jmlangkot; noAngkot++) {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
}