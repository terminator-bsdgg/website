///////////////////////Moderator Gebuchte Termine Table////////////////////////////////////////////////////////
function initModeratorGebuchteTermineTabelle() {
  let table_gebuchte_termine =
    "<table><thead><tr><th>Gebuchte Termine</th></tr></thead><tbody>";
  data.calendarTable.forEach(element => {
    if (
      (element.terminStatus === reservedTermin) &
      (element.roomId === $("#raum_dropdown_menu").text())
    ) {
      table_gebuchte_termine =
        table_gebuchte_termine +
        "<tr><td rowspan='1' colspan='2'>" +
        "Person: " +
        element.userId +
        ", Von: " +
        element.timePeriodFrom +
        ", Bis: " +
        element.timePeriodTo +
        "</td><td>" +
        '<button type="button" onclick="moderatorRemoveTermin(' +
        "'" +
        element.timePeriodFrom +
        "', '" +
        element.timePeriodTo +
        "'" +
        ')">-</button></td></tr>';
    }
  });
  table_gebuchte_termine = table_gebuchte_termine + "</tbody></table>";
  $("#moderator_table_gebuchte_termine").html(table_gebuchte_termine);
}
function moderatorRemoveTermin(timeFrom, timeTo) {
  console.log("Hallo");
  data.calendarTable.splice(
    data.calendarTable.indexOf(
      data.calendarTable.find(
        (element) =>
          (element.timePeriodFrom === timeFrom) &
          (element.timePeriodTo === timeTo)
      )
    ),
    1
  );
  initTables();
}
///////////////////////Moderator Gebuchte Termine Table////////////////////////////////////////////////////////
