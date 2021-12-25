function loadModalEventListener(modal) {
  modal.addEventListener("show.bs.modal", function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget;
    // Extract info from data-bs-* attributes

    // var recipient = button.getAttribute("data-bs-whatever");

    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    var modalTitle = modal.querySelector(".modal-title");
    // var modalBodyInput = modal.querySelector(".modal-body input");

    modalTitle.textContent = $("#raum_dropdown_menu").text() + ": Termin für " + data.userId + ".";//recipient;
    // modalBodyInput.value = recipient;
  });
}
