const spendeJSON = sessionStorage.getItem("spendenDaten");

if (spendeJSON) {
  const spende = JSON.parse(spendeJSON);
  const ausgabeElement = document.getElementById("ausgabe");
  let person =
    "<strong>Persönliche Angaben:</strong><ul class='list-unstyled'><li id='ort'></li><li id='krisengebiet'></li><li id='vorname'></li><li id='nachname'></li><li id='email'></li></ul>";
  //Bei Abholung Adresse hinzufügen

  let adresse =
    "<strong>Abholadresse:</strong><ul class='list-unstyled'><li id='straße'></li><li id='hausnr'></li><li id='plz'></li><li id='stadt'></li><li id='datum'></li><li id='zeit'></li></ul>";

  //Tabelle für die Kleider erstellen/vorbereiten
  let kleiderTabelle2 = document.createElement("table");
  kleiderTabelle2.className = "table table-striped";
  let thead = document.createElement("thead");
  let thr = document.createElement("tr");
  let thArt = document.createElement("th");
  thArt.innerText = "Art der Kleidung";
  let thGröße = document.createElement("th");
  thGröße.innerText = "Größe";
  let thAnzahl = document.createElement("th");
  thAnzahl.innerText = "Menge";
  thr.appendChild(thArt);
  thr.appendChild(thGröße);
  thr.appendChild(thAnzahl);
  thead.appendChild(thr);
  kleiderTabelle2.appendChild(thead);
  let tbody = document.createElement("tbody");

  //Kleidungsstücke hinzufügen
  spende.Kleider.forEach(function (zeile) {
    let tr = document.createElement("tr");
    let tdArt = document.createElement("td");
    tdArt.innerText = zeile.Kleidung;
    let tdgröße = document.createElement("td");
    tdgröße.innerText = zeile.Größe;
    let tdAnzahl = document.createElement("td");
    tdAnzahl.innerText = zeile.Anzahl;

    tr.appendChild(tdArt);
    tr.appendChild(tdgröße);
    tr.appendChild(tdAnzahl);
    tbody.appendChild(tr);
  });

  kleiderTabelle2.appendChild(tbody);
  ausgabeElement.innerHTML =
    "<h3>Zusammenfasssung deiner Spenden:</h3>" + person;
  //Bei Abholung Adresse hinzufügen
  if (spende.Abgabe === "Abholung") {
    ausgabeElement.innerHTML += adresse;
  }
  ausgabeElement.appendChild(kleiderTabelle2);
  ausgabeElement.innerHTML +=
    "<div class='col-auto'><a href='index.html'><button class='btn btn-primary'>Home</button></a></div>";
  document.getElementById("ort").innerText = "Abgabe: " + spende.Abgabe;
  document.getElementById("krisengebiet").innerText =
    "Krisengebiet: " + spende.Krisengebiet;
  document.getElementById("vorname").innerText = "Vorname: " + spende.Vorname;
  document.getElementById("nachname").innerText =
    "Nachname: " + spende.Nachname;
  document.getElementById("email").innerText =
    "E-Mail-Adresse: " + spende.EMailAdresse;
  //Bei Abholung Adresse hinzufügen
  if (spende.Abgabe === "Abholung") {
    document.getElementById("straße").innerText =
      "Straße: " + spende.Adresse[0].Straße;
    document.getElementById("hausnr").innerText =
      "Hausnummer: " + spende.Adresse[0].Hausnummer;
    document.getElementById("plz").innerText =
      "Postleitzahl: " + spende.Adresse[0].Postleitzahl;
    document.getElementById("stadt").innerText =
      "Stadt: " + spende.Adresse[0].Stadt;
    document.getElementById("datum").innerText =
      "Datum: " + spende.Adresse[0].Datum;
    document.getElementById("zeit").innerText =
      "Zeit: " + spende.Adresse[0].Zeit;
  }
} else {
  alert("Keine Daten gefunden!");
}
