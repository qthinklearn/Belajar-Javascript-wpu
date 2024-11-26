var tanya = true;
while (tanya) {
	alert('tebak angka 1 - 10 \nkamu punya 3 kesempatan');
	var comp = Math.round (Math.random() * 10);
    console.log(comp);
	for (var kesempatan = 3; kesempatan > 0; kesempatan--) {
		var user = prompt('Masukkan Angka tebakan!');
		var percobaan = kesempatan - 1;
		if (user == '') {
			alert('Yang anda masukkan bukan angka');
			//kesempatan = 0;
			percobaan = kesempatan + 1;
		} else if (user == null) {
			//kesempatan = 0;
			percobaan = kesempatan + 1;	
		} else {
			if (user == comp) {
				alert('Anda BENAR!\nAngka yang dicari adalah ' + comp);
				kesempatan = 0;
			} else if (user < comp) {
				if (percobaan == 0) {
					alert('Anda GAGAL!\nAngka yang dicari adalah ' + comp);
				} else {
					alert('Terlalu RENDAH!\nAyo masih ada ' + percobaan + ' kesempatan');
				}
			} else if (user > comp) {
				if (percobaan == 0) {
					alert('Anda GAGAL!\nAngka yang dicari adalah ' + comp);
				} else {
					alert('Terlalu TINGGI!\nAyo masih ada ' + percobaan + ' kesempatan');
				}
			} else {
				alert('Yang anda masukkan bukan angka');
				i = 0;
			}
		}
	}
	tanya = confirm('Main lagi?');
}
alert('Terima kasih.');