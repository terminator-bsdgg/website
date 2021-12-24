///////////////////////Benutzer Terminanfragen Table////////////////////////////////////////////////////////
function initBenutzerTerminanfragenTabelle() {
  let foundTerminanfragen = data.calendarTable.filter(
    (element) =>
      (element.userId == data.userId) & (element.terminStatus == openTermin) & (element.roomId === $("#raum_dropdown_menu").text())
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
    "'><td><button type='button' onclick='benutzerAddNewTermin(this)' id='benutzerNewTerminanfrageButton'>+</button></td></tr>";
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
  $($(wtf).parent().parent()).remove();
  $("#benutzerNewTerminanfrageButton").removeAttr("disabled");
}
function benutzerAddNewTermin(wtf) {
  $(wtf).attr("disabled", "disabled");
  let terminneu = $("#benutzerterminanfragen-tabelle tbody").children();
  $($(wtf).parent().parent()).before(
    "<tr id='terminanfragen-zeile-" +
      terminneu.length +
      "'><td colspan='2'>" +
      '<div class="d-flex flex-wrap bd-highlight mb-3"> \
      <div class="p-2 bd-highlight"><label>Von:</label><input type="text" id="newTerminanfrageInputFrom"></div> \
      <div class="p-2 bd-highlight"><label>Bis:</label><input type="text" id="newTerminanfrageInputTo"></div>' +
      "</td><td><button onclick='benutzerSaveTerminanfrage()'>OK</button><button onclick='benutzerAbortTerminanfrage(this)'>Ne</button></tr>"
  );
}
function benutzerSaveTerminanfrage() {
  console.log("Hallo");
  $("#newTerminanfrageInput").removeClass(
    "alert-danger border-danger border-1"
  );
  let roomTermins = data.calendarTable.filter(
    (element) =>
      (element.roomId == $("#raum_dropdown_menu").text()) &
      (element.userId == data.userId)
  );
  console.log(roomTermins);
  if (Array.isArray(roomTermins)) {
    console.log("isArray");
    roomTermins.forEach((element) => {
      // if (
      //   (element.timePeriodFrom < $("#newTerminanfrageInputTo").val()) |
      //   (element.timePeriodTo > $("#newTerminanfrageInputFrom").val())
      // ) {
      //   console.log("error1");
      //   $("#newTerminanfrageInputFrom").addClass(
      //     "alert-danger border-danger border-1"
      //   );
      //   $("#newTerminanfrageInputTo").addClass(
      //     "alert-danger border-danger border-1"
      //   );
      // } else if (
      //   (element.timePeriodFrom == $("#newTerminanfrageInputFrom").val()) |
      //   (element.timePeriodTo == $("#newTerminanfrageInputTo").val())
      // ) {
      //   console.log("error2");
      //   $("#newTerminanfrageInputFrom").addClass(
      //     "alert-danger border-danger border-1"
      //   );
      //   $("#newTerminanfrageInputTo").addClass(
      //     "alert-danger border-danger border-1"
      //   );
      // } else {
      console.log("push");
      data.calendarTable.push({
        userId: data.userId,
        roomId: $("#raum_dropdown_menu").text(),
        timePeriodFrom: $("#newTerminanfrageInputTo").val(),
        timePeriodTo: $("#newTerminanfrageInputFrom").val(),
        reference: "",
        contactMail: "",
        terminStatus: openTermin,
      });
      // }
    });
  }
  initBenutzerTerminanfragenTabelle();
}
///////////////////////Benutzer Terminanfragen Table////////////////////////////////////////////////////////
