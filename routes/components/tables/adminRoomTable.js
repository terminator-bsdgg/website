///////////////////////ADMIN ROOM TABLE////////////////////////////////////////////////////////
function initRaumTabelle() {
  let sortRaeume = data.roomTable;
  sortRaeume.sort(function (a, b) {
    if (a.roomId < b.roomId) {
      return -1;
    }
    if (a.roomId > b.roomId) {
      return 1;
    }
    return 0;
  });

  let table_raeume =
    "<table id='raum-tabelle'><thead><tr><th>Räume</th></tr></thead><tbody>";
  sortRaeume.forEach(
    (element) =>
      (table_raeume =
        table_raeume +
        "<tr><td rowspan='1' colspan='2'>" +
        element.roomId +
        "</td><td>" +
        '<button type="button" onclick="removeRoom(' +
        "'" +
        element.roomId +
        "'" +
        ')">-</button></td></tr>')
  );
  table_raeume =
    table_raeume +
    "<tr id='raum-zeile-" +
    (data.roomTable.length + 1) +
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
    '<tr id="raum-zeile-' +
      '"' +
      raumneu.length +
      '"' +
      '"><td colspan="2"><div class="d-flex flex-wrap bd-highlight mb-3"> \
      <div class="p-2 bd-highlight"></label><label>Raum</label><input type="text" id="newRoomNameInput" /></div> \
      <div class="p-2 bd-highlight"><label>IP</label><input type="text" id="newRoomIpInput" /></div> \
      <div class="p-2 bd-highlight"><label>Device Id</label><input type="text" id="newRoomDeviceIdInput" /></div></div> \
      </td><td><button onclick="saveNewRoom()">OK</button><button onclick="abortNewRoom(this)">Ne</button></tr>'
  );
}

function saveNewRoom() {
  $("#newRoomNameInput").removeClass("alert-danger border-danger border-1");
  if (
    data.roomTable.filter(
      (element) => element.roomId == "Raum " + $("#newRoomNameInput").val()
    ) == 0 &&
    $("#newRoomNameInput").val() != ""
  ) {
    data.roomTable.push({
      roomId: "Raum " + $("#newRoomNameInput").val(),
      ipAdress: $("#newRoomIpInput").val(),
      deviceId: $("#newRoomDeviceIdInput").val(),
      lastRead: "",
    });
    initRaumTabelle();
    initRaumDropdown();
  }
  else {
    $("#newRoomNameInput").addClass("alert-danger border-danger border-1");
  }
}
function removeRoom(wtf) {
  let found = data.roomTable.find((element) => element.roomId == wtf);
  data.roomTable.splice(data.roomTable.indexOf(found), 1);
  initRaumTabelle();
}
///////////////////////ADMIN ROOM TABLE////////////////////////////////////////////////////////
