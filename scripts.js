let buttonOne = document.querySelector(".jsFaq1Btn")
let buttonTwo = document.querySelector(".jsFaq2Btn")
let buttonThree = document.querySelector(".jsFaq3Btn")
let paraOne = document.querySelector(".jsFaq1Text")
let paraTwo = document.querySelector(".jsFaq2Text")
let paraThree = document.querySelector(".jsFaq3Text")

buttonOne.addEventListener("click", () => {
  if(buttonOne.textContent === "+") {
    paraOne.style.display = "block"
    buttonOne.textContent = "-"
  } else {
    paraOne.style.display = "none"
    buttonOne.textContent = "+"
  }
})

buttonTwo.addEventListener("click", () => {
  if(buttonTwo.textContent === "+") {
    paraTwo.style.display = "block"
    buttonTwo.textContent = "-"
  } else {
    paraTwo.style.display = "none"
    buttonTwo.textContent = "+"
  }
})

buttonThree.addEventListener("click", () => {
  if(buttonThree.textContent === "+") {
    paraThree.style.display = "block"
    buttonThree.textContent = "-"
  } else {
    paraThree.style.display = "none"
    buttonThree.textContent = "+"
  }
})