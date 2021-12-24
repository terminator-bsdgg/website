///////////////////////TAB////////////////////////////////////////////////////////
function openTab(tabName) {
  let i;
  let x = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
  initModeratorTabelle();
  initRaumTabelle();
  initBenutzerGebuchteTermineTabelle();
  initBenutzerTerminanfragenTabelle();
  initModeratorGebuchteTermineTabelle();
  initModeratorTerminanfragenTabelle();
}
///////////////////////TAB////////////////////////////////////////////////////////
