let accordion = document.querySelectorAll(".qa-container")

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", () => {
    accordion[i].classList.toggle("active")
  })
}
