///////////////////////Moderator Termin Anfragen Table////////////////////////////////////////////////////////
function initModeratorTerminanfragenTabelle() {
  let table_terminanfragen =
    "<table><thead><tr><th>Terminanfragen</th></tr></thead><tbody>";
  data.calendarTable.forEach((element) => {
    if (
      element.terminStatus === openTermin &&
      element.roomId === $("#raum_dropdown_menu").text()
    ) {
      table_terminanfragen = table_terminanfragen.concat(
        "<tr><td rowspan='1' colspan='2'>"
      );

      table_terminanfragen = table_terminanfragen.concat(
        "Person: " +
          element.userId +
          ", Von: " +
          element.timePeriodFrom +
          ", Bis: " +
          element.timePeriodTo
      );
      table_terminanfragen = table_terminanfragen.concat("</td><td>");
      table_terminanfragen = table_terminanfragen.concat(
        '<button type="button" onclick="moderatorConfirmedTermin(\''
      );
      table_terminanfragen = table_terminanfragen.concat(element.userId);
      table_terminanfragen = table_terminanfragen.concat("', '");
      table_terminanfragen = table_terminanfragen.concat(
        element.timePeriodFrom
      );
      table_terminanfragen = table_terminanfragen.concat("', '");
      table_terminanfragen = table_terminanfragen.concat(element.timePeriodTo);
      table_terminanfragen = table_terminanfragen.concat(
        '\')">J</button><button type="button" onclick="moderatorDeclineTermin(\''
      );
      table_terminanfragen = table_terminanfragen.concat(element.userId);
      table_terminanfragen = table_terminanfragen.concat("', '");
      table_terminanfragen = table_terminanfragen.concat(
        element.timePeriodFrom
      );
      table_terminanfragen = table_terminanfragen.concat("', '");
      table_terminanfragen = table_terminanfragen.concat(element.timePeriodTo);
      table_terminanfragen = table_terminanfragen.concat(
        "')\">N</button></td></tr>"
      );
    }
  });
  table_terminanfragen = table_terminanfragen + "</tbody></table>";
  $("#moderator_table_terminanfragen").html(table_terminanfragen);
}
function moderatorDeclineTermin(person, timeFrom, timeTo) {
  data.calendarTable.splice(
    data.calendarTable.indexOf(
      data.calendarTable.find(
        (element) =>
          (element.userId === person) &
          (element.timePeriodFrom === timeFrom) &
          (element.timePeriodTo === timeTo)
      )
    ),
    1
  );
  initModeratorTerminanfragenTabelle();
}
function moderatorConfirmedTermin(person, timeFrom, timeTo) {
  data.calendarTable[
    data.calendarTable.indexOf(
      data.calendarTable.find(
        (element) =>
          element.userId === person &&
          element.timePeriodFrom === timeFrom &&
          element.timePeriodTo === timeTo
      )
    )
  ].terminStatus = reservedTermin;
  initModeratorTerminanfragenTabelle();
  initModeratorGebuchteTermineTabelle();
  initBenutzerGebuchteTermineTabelle();
}
///////////////////////Moderator Termin Anfragen Table////////////////////////////////////////////////////////
