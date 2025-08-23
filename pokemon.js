
function autoImage(i) {
  let image = document.createElement("img");
  image.src = `https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/${i}.png`;
  container.appendChild(image);
}

const container = document.getElementById("container");

for (let i = 1; i <= 150; i++) {
  const newDiv = document.createElement("div");
  container.appendChild(newDiv);
  const image = document.createElement("img");
  image.src = `https://raw.githubusercontent.com/GaLaiLapTrinh/pokemon/main/img/${i}.png`;
  newDiv.appendChild(image);
  const newSpan = document.createElement("span");
  newSpan.innerText = `#${i}`;
  newDiv.appendChild(newSpan);
  newDiv.classList.add("pokemon");
}

