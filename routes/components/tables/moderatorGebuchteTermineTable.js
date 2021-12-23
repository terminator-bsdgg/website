///////////////////////Moderator Gebuchte Termine Table////////////////////////////////////////////////////////
function initModeratorGebuchteTermineTabelle() {
    let table_gebuchte_termine =
      "<table><thead><tr><th>Gebuchte Termine</th></tr></thead><tbody>";
    moderator_gebuchteTermine.forEach(
      (element, index) =>
        (table_gebuchte_termine =
          table_gebuchte_termine +
          "<tr><td rowspan='1' colspan='2'>" +
          element +
          "</td><td>" +
          "<button type='button' onclick='moderatorRemoveTermin(" +
          index +
          ")'>-</button></td></tr>")
    );
    table_gebuchte_termine = table_gebuchte_termine + "</tbody></table>";
    $("#moderator_table_gebuchte_termine").html(table_gebuchte_termine);
  }
  function moderatorRemoveTermin(wtf) {
    moderator_gebuchteTermine.splice(wtf, 1);
    initModeratorGebuchteTermineTabelle();
  }
  ///////////////////////Moderator Gebuchte Termine Table////////////////////////////////////////////////////////