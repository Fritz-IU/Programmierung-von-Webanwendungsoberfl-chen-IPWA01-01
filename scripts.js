document.getElementById('kleiderArt').addEventListener('change',function() {
    if(this.value == 1 || this.value == 2 || this.value == 3) {
        document.getElementById('größen1').classList.remove('d-none');
        document.getElementById('größen2').classList.add('d-none');
        document.getElementById('größen3').classList.add('d-none');
    } else if(this.value == 4) {
        document.getElementById('größen1').classList.add('d-none');
        document.getElementById('größen2').classList.remove('d-none');
        document.getElementById('größen3').classList.add('d-none');
    } else if(this.value == 5) {
        document.getElementById('größen1').classList.add('d-none');
        document.getElementById('größen2').classList.add('d-none');
        document.getElementById('größen3').classList.remove('d-none');
    }
})