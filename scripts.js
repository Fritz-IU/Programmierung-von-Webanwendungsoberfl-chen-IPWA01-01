

document.getElementById("kleiderArt").addEventListener("change", function () {
  if (
    this.value === "Hose" ||
    this.value === "T-Shirt" ||
    this.value === "Pullover"
  ) {
    document.getElementById("größen1").classList.remove("d-none");
    document.getElementById("größen2").classList.add("d-none");
    document.getElementById("größen3").classList.add("d-none");
  } else if (this.value === "Schuhe") {
    document.getElementById("größen1").classList.add("d-none");
    document.getElementById("größen2").classList.remove("d-none");
    document.getElementById("größen3").classList.add("d-none");
  } else if (this.value === "Handschuhe") {
    document.getElementById("größen1").classList.add("d-none");
    document.getElementById("größen2").classList.add("d-none");
    document.getElementById("größen3").classList.remove("d-none");
  }
});

document.getElementById("button1").addEventListener("click", function () {
  const kleiderArt = document.getElementById("kleiderArt").value;
  const anzahl = document.getElementById("anazhl").value;
  let größe = "M";
  if (
    kleiderArt === "Hose" ||
    kleiderArt === "T-Shirt" ||
    kleiderArt === "Pulloveer"
  ) {
     größe = document.getElementById("normalegröße").value;
  } else if (kleiderArt === "Schuhe") {
     größe = document.getElementById("schuhgröße").value;
  } else if (kleiderArt === "Handschuhe") {
     größe = document.getElementById("handschuhgröße").value;
  }
  if (kleiderArt && anzahl && größe) {
    const tableBody = document.querySelector('#kleiderTabelle tbody');
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td>${kleiderArt} <input type="hidden" name="kleiderArt[]" value="${kleiderArt}"</td>
    <td>${größe} <input type="hidden" name="größe[]" value="${größe}"</td>
    <td>${anzahl} <input type="hidden" name="anazhl[]" value="${anzahl}"</td>
    <td><button type="button" class="btn btn-sm btn-danger remove-btn">Löschen</button></td>`;
    tableBody.appendChild(newRow);
    document.getElementById("kleiderArt").value = "";
    document.getElementById("anazhl").value = "";
    document.getElementById("normalegröße").value = "";
    document.getElementById("schuhgröße").value = "";
    document.getElementById("handschuhgröße").value = "";
  } else {
    alert("Bitte alle Angaben zu den Kleidern ausfüllen!")
  }
});

document.querySelector("#kleiderTabelle").addEventListener("click", function(e) {
    if(e.target.classList.contains("remove-btn")) {
        e.target.closest("tr").remove();
    }
})