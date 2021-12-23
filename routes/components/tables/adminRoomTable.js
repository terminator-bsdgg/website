///////////////////////ADMIN ROOM TABLE////////////////////////////////////////////////////////
function initRaumTabelle() {
    let anzahlRaeume = raeume.length;
    let sortRaeume = raeume;
    sortRaeume.sort(function (a, b) {
      let aNumber = a.toString().slice(5);
      let bNumber = b.toString().slice(5);
      return parseInt(aNumber) - parseInt(bNumber);
    });

    let table_raeume =
      "<table id='raum-tabelle'><thead><tr><th>Räume</th></tr></thead><tbody>";
    sortRaeume.forEach(
      (element, index) =>
        (table_raeume =
          table_raeume +
          "<tr><td rowspan='1' colspan='2'>" +
          element +
          "</td><td>" +
          "<button type='button' onclick='removeRoom(" +
          index +
          ")'>-</button></td></tr>")
    );
    table_raeume =
      table_raeume +
      "<tr id='raum-zeile-" +
      (anzahlRaeume + 1) +
      "'><td colspan='2'><button type='button' onclick='addRoom(this)' id='addNewRoomButton'>+</button></td><td></td></tr>";
    table_raeume = table_raeume + "</tbody></table>";
    $("#administrator_raeume").html(table_raeume);
  }
  function abortNewRoom(lol) {
    $($(lol).parent().parent()).remove();
    $("#addNewRoomButton").removeAttr("disabled");
  }
  function addRoom(lol) {
    $(lol).attr("disabled", "disabled");
    let raumneu = $("#raum-tabelle tbody").children();
    $($(lol).parent().parent()).before(
      "<tr id='raum-zeile-" +
        raumneu.length +
        "'><td colspan='2'><input type='text' id='newRoomNameInput'></td><td><button onclick='saveNewRoom()'>OK</button><button onclick='abortNewRoom(this)'>Ne</button></tr>"
    );
  }

  function saveNewRoom() {
    $("#newRoomNameInput").removeClass(
      "alert-danger border-danger border-1"
    );
    if (
      !raeume.includes("Raum " + $("#newRoomNameInput").val()) &&
      $("#newRoomNameInput").val() != ""
    ) {
      raeume.push("Raum " + $("#newRoomNameInput").val());
      initRaumTabelle();
      initRaumDropdown();
    } else {
      $("#newRoomNameInput").addClass(
        "alert-danger border-danger border-1"
      );
    }
  }
  function removeRoom(wtf) {
    raeume.splice(wtf, 1);
    initRaumTabelle();
  }
  ///////////////////////ADMIN ROOM TABLE////////////////////////////////////////////////////////