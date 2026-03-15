document.getElementById('kleiderArt').addEventListener('change',function() {
    if(this.value === "Hose" || this.value === "T-Shirt" || this.value === "Pullover") {
        document.getElementById('größen1').classList.remove('d-none');
        document.getElementById('größen2').classList.add('d-none');
        document.getElementById('größen3').classList.add('d-none');
    } else if(this.value === "Schuhe") {
        document.getElementById('größen1').classList.add('d-none');
        document.getElementById('größen2').classList.remove('d-none');
        document.getElementById('größen3').classList.add('d-none');
    } else if(this.value === "Handschuhe") {
        document.getElementById('größen1').classList.add('d-none');
        document.getElementById('größen2').classList.add('d-none');
        document.getElementById('größen3').classList.remove('d-none');
    }
})

document.getElementById('button1').addEventListener('click', function() {
    const kleiderArt = document.getElementById('kleiderArt').value;
    const anzahl = document.getElementById('anazhl').value;
    //if()
})