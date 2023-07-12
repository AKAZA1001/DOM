const titleElement = document.getElementById("title");
const contentElement = document.getElementById("content");
const changeFontBtn = document.getElementById("changeFontBtn");
const changeColorBtn = document.getElementById("changeColorBtn");
const changeContentBtn = document.getElementById("changeContentBtn");
const changeTextBtn = document.getElementById("changeTextBtn");

changeFontBtn.addEventListener("click", function () {
  titleElement.style.fontFamily = "Arial, sans-serif";
  contentElement.style.fontFamily = "Arial, sans-serif";
});
changeColorBtn.addEventListener("click", function () {
  titleElement.style.color = "blue";
  contentElement.style.color = "red";
});

changeContentBtn.addEventListener("click", function () {
  contentElement.innerHTML = "This paragraph content has been changed!";
});
changeTextBtn.addEventListener("click", function () {
  titleElement.textContent = "Updated Title";
});
