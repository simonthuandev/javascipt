const input_search = document.querySelector(".input_search");
const search_icon = document.querySelector(".icon");
const search_box = document.querySelector(".search-box");
search_icon.addEventListener("click", function () {
  search_box.classList.toggle("active");
  if (search_box.classList.contains("active")) {
    input_search.focus();
  }
});
