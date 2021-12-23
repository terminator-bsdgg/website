///////////////////////Moderator Termin Anfragen Table////////////////////////////////////////////////////////
function initModeratorTerminanfragenTabelle() {
    let table_terminanfragen =
      "<table><thead><tr><th>Terminanfragen</th></tr></thead><tbody>";
    moderator_terminanfragen.forEach((element) => {
      table_terminanfragen = table_terminanfragen.concat(
        "<tr><td rowspan='1' colspan='2'>"
      );
      table_terminanfragen = table_terminanfragen.concat(element);
      table_terminanfragen = table_terminanfragen.concat("</td><td>");
      table_terminanfragen = table_terminanfragen.concat(
        '<button type="button" onclick="moderatorConfirmedTermin(\''
      );
      table_terminanfragen = table_terminanfragen.concat(element);
      table_terminanfragen = table_terminanfragen.concat(
        '\')">J</button><button type="button" onclick="moderatorDeclineTermin(\''
      );
      table_terminanfragen = table_terminanfragen.concat(element);
      table_terminanfragen = table_terminanfragen.concat(
        "')\">N</button></td></tr>"
      );
    });
    table_terminanfragen = table_terminanfragen + "</tbody></table>";
    $("#moderator_table_terminanfragen").html(table_terminanfragen);
  }
  function moderatorDeclineTermin(wtf) {
    moderator_terminanfragen.splice(
      moderator_terminanfragen.indexOf(wtf),
      1
    );
    initModeratorTerminanfragenTabelle();
  }
  function moderatorConfirmedTermin(wtf) {
    moderator_terminanfragen.splice(
      moderator_terminanfragen.indexOf(wtf),
      1
    );
    moderator_gebuchteTermine.push(wtf);
    initModeratorTerminanfragenTabelle();
    initModeratorGebuchteTermineTabelle();
    // initBenutzerGebuchteTermineTabelle();
  }
  ///////////////////////Moderator Termin Anfragen Table////////////////////////////////////////////////////////