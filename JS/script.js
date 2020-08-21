// script for both of sliders

$(document).ready(function () {
  $(".slider-header").slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    //autoplay: true,
    autoplayspeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: true,
    vertical: true,
    verticalSwiping: false,
  });

  $(".slider-news").slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    //autoplay: true,
    autoplayspeed: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    initialSlide: 1,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// script for burger menu

$(".burger-menu__button-open").click(function () {
  $(".burger-modal").removeClass("hiddenElement");
});

$(".burger-modal__button-close").click(function () {
  $(".burger-modal").addClass("hiddenElement");
});

$(".burger-modal__navigation__list__link").click(function () {
  $(".burger-modal").addClass("hiddenElement");
});

// script for smooth scroll needSmoothScroll

let anchors = $(".needSmoothScroll");

$.each(anchors, function () {
  $(this).click(function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
  });
});

// script for showing data from the contact form in console

let inputName = document.querySelector("#user-name");
let inputEmail = document.querySelector("#user-email");
let button = document.querySelector("#contact-form-butoon");
let form = document.querySelector("#contact-form");
let popUp = document.querySelector(".contact-card__pop-up");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(` Зареєструвався новий користувач
  Ім'я: ${inputName.value};
  Пошта: ${inputEmail.value};`);
  inputName.value = "";
  inputEmail.value = "";
  popUp.classList.remove("hiddenElement");

  const hide = () => popUp.classList.add("hiddenElement");
  setTimeout(hide, 5000);
});

// lazy-load for slider-header

function changeBg(slide, img) {
  let adress = img.getAttribute("data-lazy");
  let property = `background-image: url(${adress});`;
  slide.setAttribute("style", property);
}

let imgArr = document.querySelectorAll(".slide-img");
let sliderArr = document.querySelectorAll(".slider-header__slide");

for (let i = 0; i < sliderArr.length; i++) {
  changeBg(sliderArr[i], imgArr[i]);
}

// lazy-load for all images

const images = document.querySelectorAll(".picture");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

function handleImg(myImg, observer) {
  myImg.forEach((myImgSingle) => {
    if (myImgSingle.intersectionRatio > 0) {
      loadImage(myImgSingle.target);
    }
  });
}

function loadImage(image) {
  image.src = image.getAttribute("data");
}

const observer = new IntersectionObserver(handleImg, options);

images.forEach((img) => {
  observer.observe(img);
});
