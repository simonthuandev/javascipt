const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {
  button.addEventListener("click", function(e) {
    // lay toa do cua button so voi viewport khi click
    const buttonRect = e.target.getBoundingClientRect();
    // lay toa do chuot tai vi tri click so voi viewport
    const x = e.clientX;
    const y = e.clientY;
    // tao hinh tron va tinh toan vi tri dat position
    const circle = document.createElement("span");
    circle.classList.add("circle");
    this.appendChild(circle);
    circle.style.left = `${x - buttonRect.left}px`;
    circle.style.top = `${y - buttonRect.top}px`;
    // xoa hinh tron sau khi thuc hien xong animation
    setTimeout(() => { circle.remove(); }, 500);
  })
});