///////////////////////Benutzer Gebuchte Termine Table////////////////////////////////////////////////////////
function initBenutzerGebuchteTermineTabelle() {
  let table_gebuchte_termine =
    "<table id='benutzergebuchtetermine-tabelle'><thead><tr><th>Gebuchte Termine</th></tr></thead><tbody>";
  let foundTermins = data.calendarTable.find(
    (element) =>
      (element.userId == data.userId) &
      ((element.roomId == $("#raum_dropdown_menu").text()) &
        (element.terminStatus == reservedTermin))
  );
  if (Array.isArray(foundTermins)) {
    foundTermins.forEach(
      (element) =>
        (table_gebuchte_termine =
          table_gebuchte_termine +
          "<tr><td rowspan='1' colspan='2'>" +
          element.roomId +
          ", Von: " +
          element.timePeriodFrom +
          ", Bis: " +
          element.timePeriodTo +
          ", Status: " +
          element.terminStatus +
          "</td><td>" +
          '<button type="button" onclick="benutzerRemoveGebuchtenTermin(' +
          "'" +
          foundTermins.roomId +
          "'" +
          ')">-</button><button type="button" id="benutzerEditGebuchtenterminButton" onclick="benutzerEditGebuchtenTermin(this, ' +
          "'" +
          foundTermins.roomId +
          "', '" +
          foundTermins.timePeriodFrom +
          "', '" +
          foundTermins.timePeriodTo +
          "'" +
          ')">Edit</button></td><td></td></tr>')
    );
  } else if (foundTermins != null) {
    table_gebuchte_termine =
      table_gebuchte_termine +
      "<tr><td rowspan='1' colspan='2'>" +
      foundTermins.roomId +
      ", Von: " +
      foundTermins.timePeriodFrom +
      ", Bis: " +
      foundTermins.timePeriodTo +
      ", Status: " +
      foundTermins.terminStatus +
      "</td><td>" +
      '<button type="button" onclick="benutzerRemoveGebuchtenTermin(' +
      "'" +
      foundTermins.roomId +
      "'" +
      ')">-</button><button type="button" id="benutzerEditGebuchtenterminButton" onclick="benutzerEditGebuchtenTermin(this, ' +
      "'" +
      foundTermins.roomId +
      "', '" +
      foundTermins.timePeriodFrom +
      "','" +
      foundTermins.timePeriodTo +
      "'" +
      ')">Edit</button></td><td></td></tr>';
  }
  table_gebuchte_termine = table_gebuchte_termine + "</tbody></table>";
  $("#benutzer_table_gebuchte_termine").html(table_gebuchte_termine);
}
function benutzerEditGebuchtenTermin(wtf, roomId, timeFrom, timeTo) {
  $(wtf).attr("disabled", "disabled");
  let terminneu = $("#benutzergebuchtetermine-tabelle tbody").children();
  let htmlString =
    "<tr id='gebuchtetermine-zeile-" +
    terminneu.length +
    "'><td colspan='2'> \
    <div class='d-flex flex-wrap bd-highlight mb-3'> \
    <div class='p-2 bd-highlight'> \
    <label>Von</label>" +
    '<input type="text" id="newGebuchterTerminInputFrom" value="' +
    timeFrom +
    '">' +
    "</div><div class='p-2 bd-highlight'> \
    <label>Bis</label>" +
    '<input type="text" id="newGebuchterTerminInputTo" value="' +
    timeTo +
    '">' +
    "</div></div><td>" +
    '<button onclick="benutzerSaveGebuchtenTermin(' +
    "'" +
    roomId +
    "','" +
    timeFrom +
    "','" +
    timeTo +
    "'" +
    ')">OK</button>' +
    "<button onclick='benutzerAbortGebuchtenTerminEdit(this)'>Ne</button></tr>";
  $($(wtf).parent().parent()).before(htmlString);
}
function benutzerSaveGebuchtenTermin(roomId, timeFrom, timeTo) {
  let found = data.calendarTable.find((element) => element.roomId == roomId);
  console.log(
    data.calendarTable[data.calendarTable.indexOf(found)].timePeriodFrom ===
      $("#newGebuchterTerminInputFrom").val()
  );
  console.log(
    data.calendarTable[data.calendarTable.indexOf(found)].timePeriodTo ===
      $("#newGebuchterTerminInputTo").val()
  );
  if (
    data.calendarTable[data.calendarTable.indexOf(found)].timePeriodFrom ===
      $("#newGebuchterTerminInputFrom").val() &&
    data.calendarTable[data.calendarTable.indexOf(found)].timePeriodTo ===
      $("#newGebuchterTerminInputTo").val()
  ) {
    $("#newGebuchterTerminInputFrom").addClass(
      "alert-danger border-danger border-1"
    );
    $("#newGebuchterTerminInputTo").addClass(
      "alert-danger border-danger border-1"
    );
  } else {
    $("#newGebuchterTerminInput").removeClass(
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
    initBenutzerGebuchteTermineTabelle();
    initBenutzerTerminanfragenTabelle();
  }
}
function benutzerAbortGebuchtenTerminEdit(wtf) {
  $($(wtf).parent().parent()).remove();
  $("#benutzerEditGebuchtenterminButton").removeAttr("disabled");
}
function benutzerRemoveGebuchtenTermin(wtf) {
  let found = data.calendarTable.find((element) => element.roomId == wtf);
  data.calendarTable.splice(data.calendarTable.indexOf(found), 1);
  initBenutzerGebuchteTermineTabelle();
}
///////////////////////Benutzer Gebuchte Termine Table////////////////////////////////////////////////////////
