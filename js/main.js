document.getElementById('violet').onclick = partyViolet
document.getElementById('indigo').onclick = partyIndigo
document.getElementById('blue').onclick = partyBlue
document.getElementById('green').onclick = partyGreen
document.getElementById('yellow').onclick = partyYellow
document.getElementById('orange').onclick = partyOrange
document.getElementById('red').onclick = partyRed

function partyViolet() {
  document.querySelector('div').style.backgroundColor = 'rgba(148, 0, 211)'
}

function partyIndigo() {
  document.querySelector('div').style.backgroundColor = 'rgba(75, 0, 130)'
}

function partyBlue() {
  document.querySelector('div').style.backgroundColor = 'rgba(0, 0, 255)'
}

function partyGreen() {
  document.querySelector('div').style.backgroundColor = 'rgba(0, 255, 0)'
}

function partyYellow() {
  document.querySelector('div').style.backgroundColor = 'rgba(255, 255, 0)'
}

function partyOrange() {
  document.querySelector('div').style.backgroundColor = 'rgba(255, 127, 0)'
}

function partyRed() {
  document.querySelector('div').style.backgroundColor = 'rgba(255, 0 , 0)'
}
