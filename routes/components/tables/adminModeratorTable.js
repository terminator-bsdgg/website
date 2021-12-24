///////////////////////ADMIN MODERATOR TABLE////////////////////////////////////////////////////////
function initModeratorTabelle() {
  let sortModeratoren = [];
  data.administrationTable.forEach((element) => {
    if (
      (element.userPermission == permissionAdministrator) |
      (element.userPermission == permissionModerator)
    ) {
      sortModeratoren.push(element);
    }
  });
  let anzahlModeratoren = sortModeratoren.length;
  sortModeratoren.sort((a, b) => {
    if (a.userId < b.userId) {
      return -1;
    }
    if (a.userId > b.userId) {
      return 1;
    }
    return 0;
  });
  let table_moderatoren =
    "<table id='moderatoren-tabelle'><thead><tr><th>Moderatoren</th></tr></thead><tbody>";
  sortModeratoren.forEach(
    element =>
      (table_moderatoren =
        table_moderatoren +
        "<tr><td rowspan='1' colspan='2'>" +
        element.userId +
        "</td><td>" +
        '<button type="button" onclick="removeModerator(' + "'" + 
        element.userId + "'" + 
        ')">-</button></td></tr>')
  );
  table_moderatoren =
    table_moderatoren +
    "<tr id='moderator-zeile-" +
    (anzahlModeratoren + 1) +
    "'><td colespan='2'><button type='button' onclick='addNewModerator(this)' id='addNewModeratorButton'>+</button></td><td></td></tr>";
  table_moderatoren = table_moderatoren + "</tbody></table>";
  $("#administrator_moderatoren").html(table_moderatoren);
}
function removeModerator(wtf) {
  console.log(wtf);
  let found = data.administrationTable.find(
    (element) => element.userId == wtf
  );
  found.userPermission = permissionUser;
  initModeratorTabelle();
}
function abortNewModerator(wtf) {
  $($(wtf).parent().parent()).remove();
  $("#addNewModeratorButton").removeAttr("disabled");
}
var selectedModerator = "";
function addNewModerator(wtf) {
  $(wtf).attr("disabled", "disabled");
  let moderatorneu = $("#moderatoren-tabelle tbody").children();
  let htmlString =
    "<tr id='moderator-zeile-" +
    moderatorneu.length +
    "'><td colspan='2'><div class='dropdown'> \
         <button class='dropdownbutton btn btn-secondary dropdown-toggle' id='dropdownMenu2' type='button' data-bs-toggle='dropdown' aria-expanded='false'>Select User</button> \
          <ul class='dropdown-menu dropdown-menu-dark' aria-labelledby='dropdownMenu2' id='moderatordropdown'>";
  data.administrationTable.forEach((element) => {
    if (
      (element.userPermission != permissionAdministrator) &
      (element.userPermission != permissionModerator)
    ) {
      htmlString +=
        "<li><button class='dropdown-item' type='button'>" +
        element.userId +
        "</button></li>";
    }
  });
  htmlString +=
    "</ul></div> \
      </td> \
      <td><button onclick='saveNewModerator()'>OK</button> \
      <button onclick='abortNewModerator(this)'>Ne</button></tr>";
  $($(wtf).parent().parent()).before(htmlString);
  $("#moderatordropdown li button").on("click", function () {
    $("#dropdownMenu2").text($(this).text());
  });
}
function saveNewModerator() {
  let found = data.administrationTable.find(
    (element) => element.userId == $("#dropdownMenu2").text()
  );
  found.userPermission = permissionModerator;
  initModeratorTabelle();
}
///////////////////////ADMIN MODERATOR TABLE////////////////////////////////////////////////////////
