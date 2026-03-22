const spendeJSON = sessionStorage.getItem("spendenDaten");

if (spendeJSON) {
  const spende = JSON.parse(spendeJSON);
  const ausgabeElement = document.getElementById("ausgabe");
  let inhalt = "<h3>Zusammenfasssung deiner Spenden:</h3>";
  inhalt +=
    "<ul class='list-unstyled'><li>Abgabe: " +
    spende.Abgabe +
    "</li><li>Krisengebiet: " +
    spende.Krisengebiet +
    "</li><li>Vorname: " +
    spende.Vorname +
    "</li><li>Nachname: " +
    spende.Nachname +
    "</li><li>E-Mail-Adresse: " +
    spende.EMailAdresse +
    "</li>";
  //Bei Abholung Adresse hinzufügen
  if (spende.Abgabe === "Abholung") {
    inhalt +=
      "</li><li>Straße: " +
      spende.Adresse[0].Straße +
      "</li><li>Hausnummer: " +
      spende.Adresse[0].Hausnummer +
      "</li><li>Postleitzahl: " +
      spende.Adresse[0].Postleitzahl +
      "</li><li>Stadt: " +
      spende.Adresse[0].Stadt +
      "</li><li>Datum: " +
      spende.Adresse[0].Datum +
      "</li><li>Zeit: " +
      spende.Adresse[0].Zeit +
      "</li>";
  }
  inhalt += "</ul><strong>Kleider:</strong><ul class='list-unstyled'>";
  //Kleidungsstücke hinzufügen
  spende.Kleider.forEach(function (zeile) {
    inhalt +=
      "<li>Kleiderart: " +
      zeile.Kleidung +
      " Größe: " +
      zeile.Größe +
      " Anzahl: " +
      zeile.Anzahl +
      "</li>";
  });
  inhalt += "</ul>";
  inhalt += "<div class='col-auto'><a href='index.html'><button class='btn btn-primary'>Home</button></a></div>"
  ausgabeElement.innerHTML = inhalt;
} else {
  alert("Keine Daten gefunden!");
}
