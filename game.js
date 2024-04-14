//mengangkap pilihan player
let player = prompt('Pilih pilan anda : kertas, gunting, batu')

//menangkap pilihan computer
//membandingkan

let computer = Math.random();
if (computer < 0.34) {
computer = 'kertas'
}else if(computer > 0.34 && computer < 0.67){
    computer = 'gunting'
}else{
    computer = 'batu'
}
   
//menampilkan
let hasil = '';
if(player == computer){
    hasil = 'seri'
}else if(player == 'kertas'){
    if(computer == 'gunting'){
        hasil = 'anda menang'
    }
}else if (player == 'batu'){
    if(computer == 'gunting'){
        hasil = 'anda menang'
    }
}else if (player == 'kertas'){
    if(computer == 'batu'){
        hasil = 'anda menang'
        }
}else if(player == 'kertas'){
    if(computer == 'batu'){
        hasil = 'anda menang'
    }
}else{
    hasil = 'output yang anda memasukan tidak sesuai'
}


if(computer == player){
    hasil = 'seri'
}else if(computer == 'batu'){
    if(player == 'gunting'){
        hasil = 'anda kalah'
    }
}else if(computer == 'kertas'){
    if(player == 'batu'){
        hasil = 'anda kalah'
    }
}else if(computer == 'gunting'){
    if(player == 'kertas'){
        hasil = 'anda kalah'
    }
}else if (computer == 'kertas'){
    if(player == 'batu'){
        hasil = 'anda kalah'
    }
}else if (computer == 'batu'){
    if(player == 'kertas'){
        hasil = 'anda menang'
    }
}
else{
    hasil = 'output yang anda masukan salah'
}

alert('Anda memelih : ' + player + ' dan ' + 'Computer' + ' melilih ' + computer + ' hasilnya adalah ' + hasil)
