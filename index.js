document.getElementById("menuButton").addEventListener("click", function () {
  var menuContent = document.getElementById("menuContent");
  menuContent.style.display =
    menuContent.style.display === "none" ? "block" : "none";

  var menuButton = document.getElementById("menuButton");
  if (menuContent.style.display === "block") {
    menuButton.innerHTML =
      '<img style="width: 1.5rem; height: 1rem;" src="image2/cross.png" alt="Close Icon">&nbsp;&nbsp;CLOSE';
  } else {
    menuButton.innerHTML =
      '<img style="width: 1.5rem; height: 1rem;" src="image2/menu2.png" alt="Menu Icon">&nbsp;&nbsp;MENU';
  }
});
