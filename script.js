const nav = document.getElementById("nav");
const bars = document.querySelector(".bars");

function nav_active_toggle() {
  nav.classList.toggle("inactive");
}

bars.addEventListener("click", nav_active_toggle);

const nav_elements = document.querySelectorAll(".text, .button-container");

nav_elements.forEach((element) => {
  element.addEventListener("click", () => {
    bars.click();
    nav.classList.add("inactive");
  });
});

var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    nav.style.top = "0";
  } else if (nav.classList.contains("inactive")) {
    nav.style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((element) => observer.observe(element));

const cards = document.querySelectorAll(".card");
const project_title = document.querySelector(".project-title");
const arrows = document.querySelectorAll(".arrow");
const crosses = document.querySelectorAll(".project-close");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (!card.classList.contains("expanded")) {
      card.classList.add("expanded");
      cards.forEach((card) => {
        if (!card.classList.contains("expanded")) {
          card.classList.add("non-focus");
        }
      });
      project_title.classList.toggle("hide");
      arrows.forEach((arrow) => {
        arrow.classList.toggle("expanded");
      });
    }
  });
});

arrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    cards.forEach((card) => {
      if (card.classList.contains("expanded")) {
        card.classList.remove("expanded");
        cards.forEach((card) => {
          card.classList.remove("non-focus");
        });
        project_title.classList.toggle("hide");
        arrows.forEach((arrow) => {
          arrow.classList.toggle("expanded");
        });
      }
    });
  });
});
