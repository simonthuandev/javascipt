// function automaticClockRender() {
//   const time = new Date();
//   const hour = String(time.getHours()).padStart(2, "0");
//   const minute = String(time.getMinutes()).padStart(2, "0");
//   const second = String(time.getSeconds()).padStart(2, "0");
//   const timeString = `${hour}:${minute}:${second}`;
//   document.getElementById("clock").innerHTML = timeString;
// }
// setInterval(automaticClockRender, 1000);

// const changeColorButton = document.getElementById("btn");
// const title = document.getElementById("title");
// function randomColor() {
//   let r = Math.floor(Math.random() * 256),
//     g = Math.floor(Math.random() * 256),
//     b = Math.floor(Math.random() * 256);
//   let colorString = `rgb(${r}, ${g}, ${b})`;
//   changeColorButton.parentElement.style.background = colorString;
//   title.innerText = colorString;
// }
// changeColorButton.addEventListener("click", randomColor);
// let container = document.querySelector(".container");
// container.addEventListener("click", function (e) {
//   if (e.target !== container) {
//     let currentActive = document.querySelector(".panel.active");
//     currentActive.classList.remove("active");
//     e.target.classList.add("active");
//   }
// });
let panelList = document.querySelectorAll(".panel");

panelList.forEach((panel) => {
  panel.addEventListener("click", function(e) {
    let currentActive = document.querySelector(".panel.active");
    currentActive.classList.remove("active");
    panel.classList.add("active");
    console.log(e.target);
  });
});
