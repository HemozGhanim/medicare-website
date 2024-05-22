$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  items: 3,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
      loop: true,
    },
  },
});

$(function () {
  $(".nav-item").click(function () {
    $(".nav-item").each(function () {
      $(this).find("a").removeClass("active");
    });
    $(this).find("a").addClass("active");
  });
});

const button = document.querySelector(".scrolltopbtn");

const displayButton = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
};

const scrollToTop = () => {
  button.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
};

displayButton();
scrollToTop();

const nav = document.querySelector(".navbarinner");
const windowWidth = window.innerWidth;

const showNav = () => {
  window.addEventListener("scroll", () => {
    if (windowWidth > 1024) {
      if (window.scrollY > 100) {
        nav.style.position = "fixed";
        nav.style.left = "0px";
        nav.style.top = "0px";
        nav.style.width = "100%";
        nav.style.backgroundColor = "#0a3f38f3";
        nav.style.padding = "0px 10%";
      } else {
        nav.style.position = "relative";
        nav.style.backgroundColor = "transparent";
        nav.style.padding = "0px 0px";
      }
    }
  });
};

showNav();
