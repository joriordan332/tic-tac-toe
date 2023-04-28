const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Gameboard = (() => {
  let gameboard = ['A1','A2','A3','B1','B2','B3','C1','C2','C3'];
  for (let i = 0; i < gameboard.length; i++) {
    const board = document.querySelector('.board');
    const boardSquares = document.createElement('div');
    boardSquares.classList.add('boardSquares');
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
  let winningPlayer = document.getElementById('winningPlayer')
  const player1 = Player('Jonno', 'X');
  const player2 = Player('Abi', 'O');
  let currentPlayer = player1;
  
  const boardSquares = document.querySelectorAll(".boardSquares");
  boardSquares.forEach((square) => {
    square.addEventListener('click', () => {
      let move = square.id;
      if (square.innerHTML != ""&& winningPlayer.textContent == "") {
        alert('Please click on an empty square')
      }
      if (square.innerHTML == "" && currentPlayer == player1 && winningPlayer.textContent == "") {
        square.innerHTML = player1.marker;
        currentPlayer = player2;
       
      }  if (square.innerHTML == "" && currentPlayer == player2 && winningPlayer.textContent == "") {
        square.innerHTML = player2.marker;
        currentPlayer = player1;
      }  
      if (checkWinOCell()) {
         winningPlayer.textContent  = 'Jonno wins'
      }
      if (checkWinXCell()) {
        winningPlayer.textContent  = 'Abi wins'
      }
    })
  })
  
  function checkWinXCell() {
    return winningConditions.some((combination) => {
      return combination.every((i) => {
        return boardSquares[i].innerText === "X";
      });
    });
  }

  function checkWinOCell() {
    return winningConditions.some((combination) => {
      return combination.every((i) => {
        return boardSquares[i].innerText === "O";
        
      });
    });
  }

  
})();



