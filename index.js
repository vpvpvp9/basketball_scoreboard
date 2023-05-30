
let scoreHomeCount = document.getElementById("score-home-cnt")
let scoreGuestCount = document.getElementById("score-guest-cnt")
let count = 0
let countTwo = 0

function functionOne() {
    count += 1 
    scoreHomeCount.textContent = count
}
function functionTwo() {
    count += 2
    scoreHomeCount.textContent = count
}
function functionThree() {
    count += 3 
    scoreHomeCount.textContent = count
}
function functionFour() {
    countTwo += 1 
    scoreGuestCount.textContent = countTwo
}
function functionFive() {
    countTwo += 2 
    scoreGuestCount.textContent = countTwo
}
function functionSix() {
    countTwo += 3 
    scoreGuestCount.textContent = countTwo
}
