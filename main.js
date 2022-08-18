const game = new Game();

document.getElementById('draw').addEventListener('click', (event) => {
  event.preventDefault();
  game.play()
})

document.getElementById('reset').addEventListener('click', (event) => {
  event.preventDefault();
})

