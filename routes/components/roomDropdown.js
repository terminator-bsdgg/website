///////////////////////Room Dropdown////////////////////////////////////////////////////////
function initRaumDropdown() {
    let dropdownList = "";

    raeume.forEach((item) => {
      let changeRoom = "changeRoom(" + "'" + item + "'" + ")";
      dropdownList +=
        '<li><button class="btn btn-block"><a href="#" class="dropdown-item row" onclick="' +
        changeRoom +
        '">' +
        item +
        "</a></button></li>";
    });

    $("#raum-dropdown").html(dropdownList);
  }
  function changeRoom(room) {
    $("#raum_dropdown_menu").html(room);
  }
  ///////////////////////Room Dropdown////////////////////////////////////////////////////////