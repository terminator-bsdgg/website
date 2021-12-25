///////////////////////Benutzer Gebuchte Termine Table////////////////////////////////////////////////////////
function initBenutzerGebuchteTermineTabelle() {
  let table_gebuchte_termine =
    "<table id='benutzergebuchtetermine-tabelle'><thead><tr><th>Gebuchte Termine</th></tr></thead><tbody>";
  data.calendarTable.forEach((element) => {
    if (
      (element.terminStatus === reservedTermin) &
      (element.roomId === $("#raum_dropdown_menu").text()) &
      (element.userId === data.userId)
    ) {
      table_gebuchte_termine =
        table_gebuchte_termine +
        "<tr><td rowspan='1' colspan='2'>" +
        "Von: " +
        element.timePeriodFrom +
        ", Bis: " +
        element.timePeriodTo +
        "</td><td>" +
        '<button type="button" onclick="benutzerRemoveGebuchtenTermin(' +
        "'" +
        element.roomId +
        "'" +
        ')">-</button> \
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" \
        data-bs-target="#fullScreenModal" id="benutzerNewTerminanfrageButton"' +
        // + "data-bs-whatever='" + data + "'"
        ' id="benutzerEditGebuchtenterminButton" onclick="benutzerEditGebuchtenTermin(' +
        "'" +
        element.timePeriodFrom +
        "','" +
        element.timePeriodTo +
        "'" +
        "), modalSelector=" +
        "'gebuchte'" +
        '">Bearbeiten</button>' +
        "</td><td></td></tr>";
    }
  });
  table_gebuchte_termine = table_gebuchte_termine + "</tbody></table>";
  $("#benutzer_table_gebuchte_termine").html(table_gebuchte_termine);
}
function benutzerEditGebuchtenTermin(timeFrom, timeTo) {
  $("benutzerEditGebuchtenterminButton").attr("disabled", "disabled");
  let terminneu = $("#benutzergebuchtetermine-tabelle tbody").children();
  $("#modal-content-div").html(
    "<tr id='gebuchtetermine-zeile-" +
      terminneu.length +
      "'><td colspan='2'>" +
      '<div class="d-flex flex-wrap bd-highlight mb-3"> \
      <div class="p-2 bd-highlight"><label>Von:</label><input type="text" id="newGebuchterTerminInputFrom" value="' +
      timeFrom +
      '">' +
      '</div> \
      <div class="p-2 bd-highlight"><label>Bis:</label><input type="text" id="newGebuchterTerminInputTo" value="' +
      timeTo +
      '">' +
      "</div>" +
      "</td><td></tr>"
  );
}
function benutzerSaveGebuchtenTermin() {
  let found = data.calendarTable.find((element) => element.roomId == $("#raum_dropdown_menu").text());
  if (
    data.calendarTable[data.calendarTable.indexOf(found)].timePeriodFrom ===
      $("#newGebuchterTerminInputFrom").val() &&
    data.calendarTable[data.calendarTable.indexOf(found)].timePeriodTo ===
      $("#newGebuchterTerminInputTo").val()
  ) {
    console.log("if");
    $("#newGebuchterTerminInputFrom").addClass(
      "alert-danger border-danger border-1"
    );
    $("#newGebuchterTerminInputTo").addClass(
      "alert-danger border-danger border-1"
    );
  } else {
    console.log("else");
    $("#newGebuchterTerminInputFrom").removeClass(
      "alert-danger border-danger border-1"
    );
    $("#newGebuchterTerminInputTo").removeClass(
      "alert-danger border-danger border-1"
    );
    data.calendarTable[data.calendarTable.indexOf(found)].timePeriodFrom = $(
      "#newGebuchterTerminInputFrom"
    ).val();
    data.calendarTable[data.calendarTable.indexOf(found)].timePeriodTo = $(
      "#newGebuchterTerminInputTo"
    ).val();
    data.calendarTable[data.calendarTable.indexOf(found)].terminStatus =
      openTermin;
    initTables();
  }
}
function benutzerAbortGebuchtenTerminEdit() {
  $($("modal-content-div").next()).remove();
  $("#benutzerEditGebuchtenterminButton").removeAttr("disabled");
}
function benutzerRemoveGebuchtenTermin(wtf) {
  let found = data.calendarTable.find((element) => element.roomId == wtf);
  data.calendarTable.splice(data.calendarTable.indexOf(found), 1);
  initBenutzerGebuchteTermineTabelle();
}
///////////////////////Benutzer Gebuchte Termine Table////////////////////////////////////////////////////////
