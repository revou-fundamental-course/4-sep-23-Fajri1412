function Hitung() {
    let Sisi = document.getElementById("Sisi").value;
    Sisi = parseInt(Sisi);
    let Luas = Sisi * Sisi
    document.getElementById("Luas").value = Luas;
}