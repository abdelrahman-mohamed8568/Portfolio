let nav = document.querySelector(".nav");
let slide = document.querySelector("#slide");
function onLoad() {
  let opacity = 0.3;
  let overlay = document.getElementById("overlay");
  let fadeOut = setInterval(function () {
    if (opacity <= 0) {
      overlay.style.display = "none";
      clearInterval(fadeOut);
    } else {
      opacity -= 0.4;
      overlay.style.opacity = opacity;
    }
  }, 2000);
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
document.querySelector("#slide").addEventListener("click", function (e) {
  if (nav.style.right === "-35px") {
    nav.style.right = "0";
    slide.style.right = "35px";
    this.classList.remove("fa-fade");
  } else {
    nav.style.right = "-35px";
    slide.style.right = "0";
    this.classList.add("fa-fade");
  }
  e.stopPropagation();
});
document.addEventListener("click", function (e) {
  if (!nav.contains(e.target)) {
    nav.style.right = "-35px";
    slide.style.right = "0";
    slide.classList.add("fa-fade");
  }
});
window.addEventListener("scroll", function () {
  if (scrollY < 663) {
    document.getElementById("homeIcon").style.color = "brown";
  } else {
    document.getElementById("homeIcon").style.color = "burlywood";
  }
  if ((scrollY >= 663) & (scrollY < 1326)) {
    document.getElementById("servicesIcon").style.color = "brown";
  } else {
    document.getElementById("servicesIcon").style.color = "burlywood";
  }
  if ((scrollY >= 1326) & (scrollY < 1989)) {
    document.getElementById("projectsIcon").style.color = "brown";
  } else {
    document.getElementById("projectsIcon").style.color = "burlywood";
  }
  if (scrollY >= 1989) {
    document.getElementById("contactIcon").style.color = "brown";
  } else {
    document.getElementById("contactIcon").style.color = "burlywood";
  }
});
