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
  let gameboard = ['','','','','','','','',''];
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
  const startButton = document.getElementById('start');
  const resetButton = document.getElementById('reset');
  let winningPlayer = document.getElementById('winningPlayer')
  let firstPlayer = document.getElementById('player1Score');
  let secondPlayer = document.getElementById('player2Score');
  const boardSquares = [...document.querySelectorAll(".boardSquares")];
  firstPlayer.textContent = '0'
  secondPlayer.textContent = '0'
  const player1 = Player('Jonno', 'X');
  const player2 = Player('Abi', 'O');
  let currentPlayer = player1;
  
  
  boardSquares.forEach((square) => {
    square.addEventListener('click', () => {
      
      if (square.innerHTML != ""&& winningPlayer.textContent == "") {
        alert('Please click on an empty square')
      }
      if (square.innerHTML == "" && currentPlayer == player1 && winningPlayer.textContent == "") {
        square.innerHTML = player1.marker;
        currentPlayer = player2;
       
      }  if (square.innerHTML == "" && currentPlayer == player2 && winningPlayer.textContent == "") {
        square.innerHTML = player2.marker;
        currentPlayer = player1;
      }  if (checkWinXCell() && winningPlayer.textContent == "") {
        winningPlayer.innerHTML  = 'Jonno wins'
        firstPlayer.innerHTML++;
        
        
     }  if (checkWinOCell() && winningPlayer.textContent == "") {
        winningPlayer.innerHTML  = 'Abi wins'
        secondPlayer.innerHTML++;
        
      } if (isTieSquare() ) {
        winningPlayer.innerHTML = `It's a tie!🤝`;
        
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

  function isTieSquare() {
    return boardSquares.every((square) => {
      return square.innerText === "X" || square.innerText === "O";
    });
  }
  boardSquares.forEach((square) => {
    resetButton.addEventListener('click', () => {
      square.innerHTML = "";
      winningPlayer.innerHTML = "";
    })
  })
})();



