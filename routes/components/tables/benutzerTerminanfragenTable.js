///////////////////////Benutzer Terminanfragen Table////////////////////////////////////////////////////////
function initBenutzerTerminanfragenTabelle() {
  let foundTerminanfragen = data.calendarTable.filter(
    (element) =>
      (element.userId == data.userId) &
      (element.terminStatus == openTermin) &
      (element.roomId === $("#raum_dropdown_menu").text())
  );
  let table_terminanfragen =
    "<table id='benutzerterminanfragen-tabelle'><thead><tr><th>Terminanfragen</th></tr></thead><tbody>";
  if (Array.isArray(foundTerminanfragen)) {
    foundTerminanfragen.forEach(
      (element, index) =>
        (table_terminanfragen =
          table_terminanfragen +
          "<tr><td rowspan='1' colspan='2'>" +
          "Von: " +
          element.timePeriodFrom +
          " Bis: " +
          element.timePeriodTo +
          "</td><td>" +
          '<button type="button" onclick="benutzerRemoveTerminanfrage(' +
          "'" +
          element.timePeriodFrom +
          "','" +
          element.timePeriodTo +
          "'" +
          ')">-</button></td></tr>')
    );
  }
  table_terminanfragen =
    table_terminanfragen +
    "<tr id='terminanfragen-zeile-" +
    (foundTerminanfragen.length + 1) +
    "'><td> \
    <button type='button' class='btn btn-primary' data-bs-toggle='modal' \
    data-bs-target='#fullScreenModal' id='benutzerNewTerminanfrageButton'" +
    // + "data-bs-whatever='" + data + "'"
    " onclick='benutzerAddNewTermin(), modalSelector=" +
    '"anfrage"' +
    "'> \
    Neuer Termin \
  </button>" +
    // + "<button type='button'  id='benutzerNewTerminanfrageButton'>+</button>"
    "</td></tr>";
  table_terminanfragen = table_terminanfragen + "</tbody></table>";
  $("#benutzer_table_terminanfragen").html(table_terminanfragen);
}
function benutzerRemoveTerminanfrage(timeFrom, timeTo) {
  data.calendarTable.splice(
    data.calendarTable.indexOf(
      data.calendarTable.find(
        (element) =>
          (element.timePeriodFrom == timeFrom) &
          (element.timePeriodTo == timeTo)
      )
    ),
    1
  );
  initBenutzerTerminanfragenTabelle();
}
function benutzerAbortTerminanfrage(wtf) {
  $($("modal-content-div").next()).remove();
  $("#benutzerNewTerminanfrageButton").removeAttr("disabled");
}
function benutzerAddNewTermin() {
  $("benutzerNewTerminanfrageButton").attr("disabled", "disabled");
  let terminneu = $("#benutzerterminanfragen-tabelle tbody").children();
  $("#modal-content-div").html(
    "<tr id='terminanfragen-zeile-" +
      terminneu.length +
      "'><td colspan='2'>" +
      '<div class="d-flex flex-wrap bd-highlight mb-3"> \
      <div class="p-2 bd-highlight"><label>Von:</label><input type="text" id="newTerminanfrageInputFrom"></div> \
      <div class="p-2 bd-highlight"><label>Bis:</label><input type="text" id="newTerminanfrageInputTo"></div>' +
      "</td><td></tr>"
  );
}
function benutzerSaveTerminanfrage() {
  $("#newTerminanfrageInputFrom").removeClass(
    "alert-danger border-danger border-1"
  );
  $("#newTerminanfrageInputTo").removeClass(
    "alert-danger border-danger border-1"
  );
  let roomTermins = data.calendarTable.filter(
    (element) =>
      (element.roomId == $("#raum_dropdown_menu").text()) &
      (element.userId == data.userId)
  );
  data.calendarTable.push({
    userId: data.userId,
    roomId: $("#raum_dropdown_menu").text(),
    timePeriodFrom: $("#newTerminanfrageInputFrom").val(),
    timePeriodTo: $("#newTerminanfrageInputTo").val(),
    reference: "",
    contactMail: "",
    terminStatus: openTermin,
  });
  initTables();
}
///////////////////////Benutzer Terminanfragen Table////////////////////////////////////////////////////////
