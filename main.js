const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const steps = document.querySelectorAll(".step");

let currentActive = 0;

function update() {
  steps.forEach(function (step, idx) {
    if (idx < currentActive) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  // Tuong minh:
  // for (let idx = 0; idx < steps.length; idx++) {
  //   if (idx < currentActive) {
  //     steps[idx].classList.add("active");
  //   } else {
  //     steps[idx].classList.remove("active");
  //   }
  // }
  // progress.style.width = `${(currentActive - 1) * 33.33}%`;

  // Tong quat: 
  progress.style.width = `${(currentActive - 1) / (steps.length - 1) * 100}%`;

  // Tuong minh:
  // if (currentActive <= 0) {
  //   prev.disabled = true;
  // }
  // else if (currentActive >= 4) {
  //   next.disabled = true;
  // }
  // else {
  //   prev.disabled = false;
  //   next.disabled = false;
  // }
  prev.disabled = currentActive === 0;
  next.disabled = currentActive === steps.length;
}
function changeStep(step) {
  currentActive += step;
  update();
}

next.addEventListener("click", function () {
  changeStep(1);
});

prev.addEventListener("click", function () {
  changeStep(-1);
});
