// const openBtn = document.getElementById("open");
// const closeBtn = document.getElementById("close");
// const modal = document.querySelector(".popup_video");
// function apare() {
//   openBtn.addEventListener("click", () => {
//     modal.classList.add("open");
//   });
// }
// function dispare() {
//   closeBtn.addEventListener("click", () => {
//     modal.classList.remove("open");
//   });
// }
document.querySelectorAll(".video-conti video").forEach((vid) => {
  vid.onclick = () => {
    document.querySelector(".popup-vid").style.display = "block";
    document.querySelector(".popup-vid video").src = vid.getAttribute("src");
  };
});
document.querySelector(".popup-vid span").onclick = () => {
  document.querySelector(".popup-vid").style.display = "none";
  document.querySelector(".popup-vid").m = "none";
};
