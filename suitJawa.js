//Game Suit Jawa

//menangkap pilihan player
var berMain = true;
while (berMain) {
    var p = prompt('Pilih : gajah, orang, semut');

    //menangkap pilihan komputer dengan
    //memmbangkitkan bilangan random
    var comp = Math.random();
    if (comp < 0.34){
        comp = 'semut';
    } else if ( comp >= 0.34 && comp < 0.67){
        comp = 'gajah';
    } else {
        comp = 'orang';
    }

    //menentukan rules
    var hasil = '';
    if (p == comp) {
        hasil = 'SERI';
    } else if (p == 'gajah') {
        if (comp == 'orang') {
            hasil = 'MENANG';
        } else {
            hasil = 'KALAH';
        }
    } else if (p == 'orang') {
        if (comp == 'semut') {
            hasil = 'MENANG';
        } else {
            hasil = 'KALAH';
        }
    } else if (p == 'semut') {
        if (comp == 'orang') {
            hasil = 'KALAH';
        } else {
            hasil = 'MENANG';
        }
    } else {
        hasil = 'Kamu Memasukan Pilhan Yang Salah..';
    }

//tampilkan di layar hasilnya (menang, kalah, seri)
    alert ('Kamu Memilih: ' + p + ' dan Komputer Memilih: ' + comp + '\nMaka Hasilnya Adalah Kamu ' + hasil);
    berMain = confirm ('Mau Main Lagi...?');
}
alert('Terima Kasih Sudah Bermain....');
