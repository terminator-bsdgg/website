///////////////////////ADMIN MODERATOR TABLE////////////////////////////////////////////////////////
function initModeratorTabelle() {
    let anzahlModeratoen = administrator_moderatoren.length;
    let sortModeratoren = administrator_moderatoren;
    sortModeratoren.sort();
    let table_moderatoren =
      "<table id='moderatoren-tabelle'><thead><tr><th>Moderatoren</th></tr></thead><tbody>";
    sortModeratoren.forEach(
      (element, index) =>
        (table_moderatoren =
          table_moderatoren +
          "<tr><td rowspan='1' colspan='2'>" +
          element +
          "</td><td>" +
          "<button type='button' onclick='removeModerator(" +
          index +
          ")'>-</button></td></tr>")
    );
    table_moderatoren =
      table_moderatoren +
      "<tr id='moderator-zeile-" +
      (anzahlModeratoen + 1) +
      "'><td colespan='2'><button type='button' onclick='addNewModerator(this)' id='addNewModeratorButton'>+</button></td><td></td></tr>";
    table_moderatoren = table_moderatoren + "</tbody></table>";
    $("#administrator_moderatoren").html(table_moderatoren);
  }
  function removeModerator(wtf) {
    administrator_moderatoren.splice(wtf, 1);
    initModeratorTabelle();
  }
  function abortNewModerator(wtf) {
    $($(wtf).parent().parent()).remove();
    $("#addNewModeratorButton").removeAttr("disabled");
  }
  function addNewModerator(wtf) {
    $(wtf).attr("disabled", "disabled");
    let moderatorneu = $("#moderatoren-tabelle tbody").children();
    $($(wtf).parent().parent()).before(
      "<tr id='moderator-zeile-" +
        moderatorneu.length +
        "'><td colspan='2'><input type='text' id='newModeratorNameInput'></td><td><button onclick='saveNewModerator()'>OK</button><button onclick='abortNewModerator(this)'>Ne</button></tr>"
    );
  }
  function saveNewModerator() {
    $("#newModeratorNameInput").removeClass(
      "alert-danger border-danger border-1"
    );
    if (
      !administrator_moderatoren.includes($("#newModeratorNameInput").val())
    ) {
      administrator_moderatoren.push($("#newModeratorNameInput").val());
      initModeratorTabelle();
    } else {
      $("#newModeratorNameInput").addClass(
        "alert-danger border-danger border-1"
      );
    }
  }
  ///////////////////////ADMIN MODERATOR TABLE////////////////////////////////////////////////////////