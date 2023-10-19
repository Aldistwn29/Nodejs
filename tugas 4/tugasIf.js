// Membuat Function
function perhitungan(pendapatan) {
    let uangJasa = 0;
    let persentasiKomisi = 0;

    // melakukan perbandingan dengan if, else if dan else
    if(pendapatan <= 200000){
        uangJasa = 10000;
        persentasiKomisi = 0.1;
    }else if(pendapatan <= 500000){
        uangJasa = 20000;
        persentasiKomisi = 0.15;
    }else{
        uangJasa = 30000;
        persentasiKomisi = 0.2;
    }

    const komisi = pendapatan * perhitungan;
    const totalKomisi = uangJasa + pendapatan;

    return totalKomisi;
}

// Input pendapatan
const pendapatanHariini = 200000;

const komisiSeles = perhitungan(pendapatanHariini);
console.log(`Komisi seles hari ini: Rp${komisiSeles}`)