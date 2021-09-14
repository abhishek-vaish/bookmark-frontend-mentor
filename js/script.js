let parentEle = document.querySelector(".navigation");
let buttonEle = document.querySelector(".hamburger");
let navMobile = document.querySelector(".nav__menu__mobile");

buttonEle.addEventListener("click", function () {
  if (buttonEle.classList.contains(".open")) {
    buttonEle.classList.remove(".open");
    parentEle.classList.remove("open");
    navMobile.classList.remove("open");
    buttonEle.children[0].src = "../images/icon-hamburger.svg";
  } else {
    buttonEle.classList.add("open");
    navMobile.classList.add("open");
    buttonEle.children[0].src = "../images/icon-close.svg";
    parentEle.classList.add("open");
  }
});

let sliderLink = document.querySelectorAll(".features__slider__options__link");
let slider = document.querySelectorAll(".features__slider__menu__content");

for (let i = 0; i < sliderLink.length; i++) {
  sliderLink[i].addEventListener("click", function () {
    sliderLink[i].classList.add("active");
    if (i === 0) {
      slider[i].style.transform = "translateX(100%)";
    } else if (i === 1) {
      slider[i].style.transform = "translateX(0%)";
    } else {
      slider[i].style.transform = "translateX(-100%)";
    }
    for (let j = 0; j < sliderLink.length; j++) {
      if (j !== i) {
        if (sliderLink[j].classList.contains("active")) {
          sliderLink[j].classList.remove("active");
          if (i === 0) {
            slider[1].style.transform = "translateX(100%)";
            slider[2].style.transform = "translateX(100%)";
          } else if (i === 1) {
            slider[0].style.transform = "translateX(0%)";
            slider[2].style.transform = "translateX(0%)";
          } else {
            slider[0].style.transform = "translateX(-100%)";
            slider[1].style.transform = "translateX(-100%)";
          }
          //
        }
      }
    }
  });
}

let accordionBtn = document.querySelectorAll(".btn");
let accordionAns = document.querySelectorAll(".answer");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    if (!accordionAns[i].classList.contains("active")) {
      accordionBtn[i].children[1].innerHTML = accordionBtn[
        i
      ].children[1].innerHTML.replace(`stroke="#5267DF"`, `stroke="#fa5757"`);
      accordionBtn[i].children[1].style.transform = "rotate(180deg)";
      accordionBtn[i].children[1].style.transition = "transform .2s linear";

      accordionAns[i].classList.add("active");
      accordionAns[i].style.height = "max-content";
      accordionAns[i].style.overflow = "visible";
      accordionAns[i].children[0].style.marginBottom = "42px";
    } else {
      accordionAns[i].classList.remove("active");
      accordionBtn[i].children[1].innerHTML = accordionBtn[
        i
      ].children[1].innerHTML.replace(`stroke="#fa5757"`, `stroke="#5267DF"`);
      accordionBtn[i].children[1].style.transform = "rotate(360deg)";
      accordionBtn[i].children[1].style.transition = "transform .2s linear";
      accordionAns[i].style.height = "0px";
      accordionAns[i].style.overflow = "hidden";
      accordionAns[i].children[0].style.marginBottom = "0px";
    }
  });
}

let emailContainer = document.querySelector(".input__email");

function onChange(value) {
  let emailReg = "[a-z]+[0-9]*@[a-z]+.[a-z]+";
  if (!value.match(emailReg)) {
    emailContainer.classList.add("error");
    emailContainer.children[1].style.display = "flex";
  } else {
    if (emailContainer.classList.contains("error")) {
      emailContainer.classList.remove("error");
      emailContainer.children[1].style.display = "none";
    }
  }
}

function onClick(e) {
  e.preventDefault();
  this.onChange;
}
