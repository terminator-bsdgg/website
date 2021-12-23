///////////////////////Benutzer Terminanfragen Table////////////////////////////////////////////////////////
function initBenutzerTerminanfragenTabelle() {
    let anzahlTerminanfragen = benutzer_terminanfragen.length;
    let table_terminanfragen =
      "<table id='benutzerterminanfragen-tabelle'><thead><tr><th>Terminanfragen</th></tr></thead><tbody>";
    benutzer_terminanfragen.forEach(
      (element, index) =>
        (table_terminanfragen =
          table_terminanfragen +
          "<tr><td rowspan='1' colspan='2'>" +
          element +
          "</td><td>" +
          "<button type='button' onclick=benutzerRemoveTerminanfrage(" +
          index +
          ")>-</button></td></tr>")
    );
    table_terminanfragen =
      table_terminanfragen +
      "<tr id='terminanfragen-zeile-" +
      (anzahlTerminanfragen + 1) +
      "'><td><button type='button' onclick='benutzerAddNewTermin(this)' id='benutzerNewTerminanfrageButton'>+</button></td></tr>";
    table_terminanfragen = table_terminanfragen + "</tbody></table>";
    $("#benutzer_table_terminanfragen").html(table_terminanfragen);
  }
  function benutzerRemoveTerminanfrage(wtf) {
    benutzer_terminanfragen.splice(wtf, 1);
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
        "'><td colspan='2'><input type='text' id='newTerminanfrageInput'></td><td><button onclick='benutzerSaveTerminanfrage()'>OK</button><button onclick='benutzerAbortTerminanfrage(this)'>Ne</button></tr>"
    );
  }
  function benutzerSaveTerminanfrage() {
    $("#newTerminanfrageInput").removeClass(
      "alert-danger border-danger border-1"
    );
    if (
      !benutzer_terminanfragen.includes($("#newTerminanfrageInput").val())
    ) {
      benutzer_terminanfragen.push($("#newTerminanfrageInput").val());
      initBenutzerTerminanfragenTabelle();
    } else {
      $("#newTerminanfrageInput").addClass(
        "alert-danger border-danger border-1"
      );
    }
  }
  ///////////////////////Benutzer Terminanfragen Table////////////////////////////////////////////////////////