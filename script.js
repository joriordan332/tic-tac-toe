const Gameboard = (() => {
  let gameboard = ['','','','','','','','',''];
  for (let i = 0; i < gameboard.length; i++) {
    const board = document.querySelector('.board');
    const boardSquares = document.createElement('div');
    boardSquares.classList.add('boardSquares');
    boardSquares.innerHTML = gameboard[i];
    board.appendChild(boardSquares);
     
  }
  return {gameboard}

  
})();

const Player  = (name, marker)=>{
  return {
    name,
    marker
  }
};

const Game = (() => {
  const player1 = Player('Jonno', 'X');
  const player2 = Player('Abi', 'O');
  let currentPlayer = player1;
  const boardSquares = document.querySelectorAll(".boardSquares");
  boardSquares.forEach((square) => {
    square.addEventListener('click', () => {
      if (square.innerHTML != "") {
        alert('Please click on an empty square')
      }
      if (square.innerHTML == "" && currentPlayer == player1) {
        square.innerHTML = player1.marker;
        currentPlayer = player2;
        
      } else if (square.innerHTML == "" && currentPlayer == player2) {
        square.innerHTML = player2.marker;
        currentPlayer = player1;
      } 
      
    })
  })
  
})();



