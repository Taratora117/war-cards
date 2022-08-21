// create instance of game class
const game = new Game();

// game history
let gameTurns = [];

// define root
const root = document.getElementById('root');

// set initial page
root.innerHTML = '<h1>Press space to play</h1>'
let page = 'home';

// delay draw cards
let lastKeyPress = 0;

// callbacks
function start() {
  root.innerHTML = '<h2>Press Space to draw card</h2><h2>Press R to reset game</h2>';
  page = 'game';
  gameTurns = game.play();
}
function draw() {
  if (lastKeyPress + 500 < Date.now()) {
    lastKeyPress = Date.now()
    console.log(gameTurns.shift())
  }
}
function reset() {
  root.innerHTML = '<h1 style="color: white;">Press space to play</h1>'
  page = 'home';
}

// controls 
document.addEventListener('keydown', (event) => {

  

  // start game
  if (event.code === 'Space' && page === 'home') return start();
  // draw card
  if (event.code === 'Space' && page === 'game') return draw();
  // reset
  if (event.code === 'KeyR' && page === 'game') return reset();
  
})
