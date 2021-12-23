///////////////////////Benutzer Gebuchte Termine Table////////////////////////////////////////////////////////
function initBenutzerGebuchteTermineTabelle() {
    let table_gebuchte_termine =
      "<table id='benutzergebuchtetermine-tabelle'><thead><tr><th>Gebuchte Termine</th></tr></thead><tbody>";
    benutzer_gebuchteTermine.forEach(
      (element, index) =>
        (table_gebuchte_termine =
          table_gebuchte_termine +
          "<tr><td rowspan='1' colspan='2'>" +
          element +
          "</td><td>" +
          "<button type='button' onclick='benutzerRemoveGebuchtenTermin(" +
          index +
          ")'>-</button><button type='button' id='benutzerEditGebuchtenterminButton' onclick='benutzerEditGebuchtenTermin(this, " +
          index +
          ")'>Edit</button></td><td></td></tr>")
    );
    table_gebuchte_termine = table_gebuchte_termine + "</tbody></table>";

    $("#benutzer_table_gebuchte_termine").html(table_gebuchte_termine);
  }
  function benutzerEditGebuchtenTermin(wtf, lol) {
    $(wtf).attr("disabled", "disabled");
    let terminneu = $("#benutzergebuchtetermine-tabelle tbody").children();
    $($(wtf).parent().parent()).before(
      "<tr id='gebuchtetermine-zeile-" +
        terminneu.length +
        "'><td colspan='2'><input type='text' id='newGebuchterTerminInput'></td><td><button onclick='benutzerSaveGebuchtenTermin(" +
        lol +
        ")'>OK</button><button onclick='benutzerAbortGebuchtenTerminEdit(this)'>Ne</button></tr>"
    );
  }
  function benutzerSaveGebuchtenTermin(lol) {
    $("#newGebuchterTerminInput").removeClass(
      "alert-danger border-danger border-1"
    );
    if (
      true
      //   !benutzer_gebuchteTermine.includes($("#newGebuchterTerminInput").val())
    ) {
      benutzer_gebuchteTermine[lol] = $("#newGebuchterTerminInput").val();
      initBenutzerGebuchteTermineTabelle();
    } else {
      $("#newGebuchterTerminInput").addClass(
        "alert-danger border-danger border-1"
      );
    }
  }
  function benutzerAbortGebuchtenTerminEdit(wtf) {
    $($(wtf).parent().parent()).remove();
    $("#benutzerEditGebuchtenterminButton").removeAttr("disabled");
  }
  function benutzerRemoveGebuchtenTermin(wtf) {
    benutzer_gebuchteTermine.splice(wtf, 1);
    initBenutzerGebuchteTermineTabelle();
  }
  ///////////////////////Benutzer Gebuchte Termine Table////////////////////////////////////////////////////////