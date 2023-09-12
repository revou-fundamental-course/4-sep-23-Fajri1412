function Luas() {
    let Sisi = document.getElementById("Sisi").value;
    Sisi = parseInt(Sisi);
    let Luas = Sisi * Sisi
    document.getElementById("Luas").value = Luas;
}

function Keliling() {
    let Sisi = document.getElementById("Sisi").value;
    Sisi = parseInt(Sisi);
    let Keliling = 4 * Sisi
    document.getElementById("Keliling").value = Keliling;
}

function Reset() {
    let Sisi = document.getElementById("Sisi").value;
    Sisi = parseInt(Sisi);
    let Reset= 0 * Sisi
    document.getElementById("Luas").value = Luas;
    document.getElementById("Keliling").value = Keliling;
}