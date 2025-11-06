let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.Reset');
let turnContainer = document.querySelector('.Turn-Detail');
let winModal = document.querySelector('.modal');
let winMessageContent = document.querySelector('.winMessageContent');
let playAgain = document.querySelector('.playAgain');
const ting = new Audio('ting.mp3');
const winAudio = new Audio('win.mp3');
let turn = 'X';
let isGameOver = false;

const changeTurn = () => {
    turn = turn === 'X' ? 'O' : 'X';
};

const checkWin = () => {
    const win = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    
    for (let i = 0; i < win.length; i++) {
        let indexs = win[i];
        if (
            boxes[indexs[0]].innerHTML === boxes[indexs[1]].innerHTML &&
            boxes[indexs[1]].innerHTML === boxes[indexs[2]].innerHTML &&
            boxes[indexs[0]].innerHTML !== ''
        ) {
            let winner = boxes[indexs[0]].innerHTML;
            turnContainer.innerText = `${winner} won`;
            isGameOver = true;
            winAudio.play();

            // open the win modal
            winMessageContent.innerText = `Player ${winner} wins! 🎉`;
            winModal.style.display = 'flex';
            
            playAgain.addEventListener('click', resetFunction);
        }
    }
};

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', (e) => {
        if (e.target.innerHTML === '' && !isGameOver) {
            e.target.innerHTML = turn;
            ting.play();
            checkWin();
            checkForDraw();

            if (!isGameOver) {
                changeTurn();
                turnContainer.innerText = `Turn for ${turn}`;
            }
        }
    });
}

const resetFunction = () => {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = '';
    }
    turn = 'X';
    isGameOver = false;
    turnContainer.innerText = `Turn for X`;

    winModal.style.display = 'none';
};

reset.addEventListener('click', () => {
    resetFunction();
});

const checkForDraw = () => {
    let anyBlocksEmpty = false;

    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerHTML === '') {
            anyBlocksEmpty = true;
            break;
        }
    }

    if (anyBlocksEmpty) {
        return;
    }

    if (!anyBlocksEmpty && !isGameOver) {
        winMessageContent.innerText = `It's a Draw! 🤝`;
        winModal.style.display = 'flex';
        playAgain.addEventListener('click', resetFunction);
        winAudio.play();
    } 
}
