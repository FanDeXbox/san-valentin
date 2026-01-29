document.addEventListener("DOMContentLoaded", () => {

  const carta = document.getElementById("carta");
  const start = document.getElementById("start");
  const pages = document.querySelectorAll("#revista .page");
  const nextButtons = document.querySelectorAll(".next");

  let current = 0;

  start.addEventListener("click", () => {
    carta.classList.remove("active");
    pages[0].classList.add("active");
  });

  nextButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      pages[current].classList.remove("active");
      current++;
      if (pages[current]) {
        pages[current].classList.add("active");
      }
    });
  });

});

