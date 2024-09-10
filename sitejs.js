const siyahlar = document.getElementsByClassName("siyah");
const griler = document.getElementsByClassName("gri");
const gri = Array.from(griler);
const siyah = Array.from(siyahlar);
const circle = document.getElementById("circle");
const darkModeBtn = document.getElementById("darkModeBtn");
let isDark = true;
darkModeBtn.addEventListener("click", changeMode);

function changeMode() {
  if (isDark) {
    light();
  } else {
    dark();
  }
  isDark = !isDark;
}
function dark() {
  siyah[0].classList.remove("sari");
  siyah[0].classList.add("siyah");
  gri[0].classList.add("gri");
  gri[0].classList.remove("beyaz");
  gri[1].classList.add("gri");
  gri[1].classList.remove("beyaz");
  gri[2].classList.add("gri");
  gri[2].classList.remove("beyaz");
  circle.style.left = "8px";
  circle.style.backgroundColor = "black";
  darkModeBtn.style.backgroundColor = "white";
}
function light() {
  siyah[0].classList.add("sari");
  siyah[0].classList.remove("siyah");
  gri[0].classList.add("beyaz");
  gri[1].classList.add("beyaz");
  gri[2].classList.add("beyaz");
  gri[0].classList.remove("gri");
  gri[1].classList.remove("gri");
  gri[2].classList.remove("gri");
  circle.style.left = "72px";
  circle.style.backgroundColor = "white";
  darkModeBtn.style.backgroundColor = "black";
}
