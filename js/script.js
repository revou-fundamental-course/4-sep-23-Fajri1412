function Hitung() {
    let Sisi = document.getElementById("Sisi").value;
    Sisi = parseInt(Sisi);
    let Luas = Sisi * Sisi
    let Keliling = 4 * Sisi
    document.getElementById("Luas").value = Luas;
    document.getElementById("Keliling").value = Keliling;
}

function Reset() {
    let Sisi = document.getElementById("Sisi").value;
    Sisi = parseInt(Sisi);
    let reset = 0 * Sisi
    document.getElementById("Luas").value = Luas;
    document.getElementById("Keliling").value = Keliling;
}
