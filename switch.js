var konfirm = true;

while (konfirm) {
    var item = prompt('Masukan Nama Makanan / Minuman : \n (cth: nasi, daging, susu, hamburger, softdrink');
    switch (item) {
    case 'nasi':
        alert('SEHAT');
        break;
    case 'daging':
        alert('SEHAT');
        break;
    case 'softdrink':
        alert('TIDAK SEHAT');
        break;
    default:
        alert('salah makan');
        break;
    }
    konfirm = confirm('Mau Coba Cari Lain?');
}
alert('Terima Kasih');
