console.log("portfolio website");
console.log("portfolio website by ayan");
let ayan = "Welcome developer sir,";

const logo = document.querySelector(".logo a");

const sections = document.querySelectorAll(".main-container section");

const anchorTags = document.querySelectorAll(".aside-anchors-list a");
const anchorIcons = document.querySelectorAll(".aside-anchors-list a i");
const anchorSpans = document.querySelectorAll(".aside-anchors-list a span");

const homeMore = document.querySelector(".home-para-more-btn");
const homeLess = document.querySelector(".home-para-less-btn");
const homeHidePara = document.querySelector(".home-hide-para");

const aboutMore = document.querySelector(".about-para-more-btn");
const aboutLess = document.querySelector(".about-para-less-btn");
const aboutHidePara = document.querySelector(".about-hide-para");

// FIXME: home
logo.addEventListener("click", function () {
  location.reload(); // Refresh the page
});

function anchorsFun() {
  anchorTags.forEach((anchor, index) => {
    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      //   console.log(anchor.id, index);
      anchorIcons.forEach((icon) => icon.classList.remove("active"));
      anchorSpans.forEach((span) => span.classList.remove("active-span"));

      anchorIcons[index].classList.add("active");
      anchorSpans[index].classList.add("active-span");

      sections.forEach((sec) => sec.classList.add("hidden"));
      sections[index].classList.remove("hidden");
    });
  });
}
anchorsFun();

function homeParaFun() {
  homeLess.classList.add("hidden");
  homeMore.addEventListener("click", () => {
    homeHidePara.classList.remove("hidden");
    homeMore.classList.add("hidden");
    homeLess.classList.remove("hidden");
  });
  homeLess.addEventListener("click", () => {
    homeHidePara.classList.add("hidden");
    homeLess.classList.add("hidden");
    homeMore.classList.remove("hidden");
  });
}
homeParaFun();

// FIXME: About

function aboutParaFun() {
  aboutLess.classList.add("hidden");
  aboutMore.addEventListener("click", () => {
    aboutHidePara.classList.remove("hidden");
    aboutMore.classList.add("hidden");
    aboutLess.classList.remove("hidden");
  });
  aboutLess.addEventListener("click", () => {
    aboutHidePara.classList.add("hidden");
    aboutLess.classList.add("hidden");
    aboutMore.classList.remove("hidden");
  });
}
aboutParaFun();
