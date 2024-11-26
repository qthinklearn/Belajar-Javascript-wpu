var tanya = true;
while(tanya) {
    alert('game tebak angka \nkamu punya 3 kesempatan');
    var comp = Math.round(Math.random()*10);
    alert(comp);
    for(var kesempatan = 3; kesempatan > 0; kesempatan--) {
        var user = prompt('masukan angka tebakan');
        var percobaan = kesempatan - 1;
        if (user == '') {
            alert('kamu belum memasukan angka..!');
            
        }
    }





tanya = confirm('main lagi?');    
}
alert('terima kasih sudah bermain..');