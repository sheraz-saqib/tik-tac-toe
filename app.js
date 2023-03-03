let music = new Audio("./song&gif/music.mp3")
let audioTurn = new Audio("./song&gif/ting.mp3")
let gameover = new Audio("./song&gif/gameover.mp3")
let o = `<i class='bx bx-square-rounded'></i>`
let x = `<i class='bx bx-x'></i>`
let wonText = `😍congratulation <span class="won-icon"><i class='bx bx-x'></i></span> you are win <img src="./song&gif/excited.gif" alt="">`
let wonh2 = document.getElementById('wonh2')
let turn = x;
let isgameover = false;
let selectBox = document.querySelectorAll('.box');
let turn_player = document.querySelector('#turn-player');
let turn_container = document.querySelector('.won-player');
let resertBtn = document.getElementById('resert')
let cross_line = document.querySelector('.cross-line');
// check turn

const changeTurn = () => {
    return turn == x ? o : x;
};
// check player win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxIcon');
    let winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    winCondition.forEach(e => {
        if ((boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML) && (boxtext[e[0]].innerHTML !== "")) {
            wonh2.innerHTML = `😍congratulation <span class="won-icon">${boxtext.innerHTML = turn == x ? o : x}  you are win <img src="./song&gif/excited.gif" alt="">`
            isgameover = true
            turn_container.classList.add('active-won')
            turn_container.classList.add('won-animation');
            turn_player.innerHTML = `${turn == x ? o : x} won`
            cross_line.style.opacity = '1'
            

        }
    })
}
//  check turn & change turn
selectBox.forEach(element => {
    let boxIcon = element.querySelector('.boxIcon');
    element.addEventListener('click', () => {
        if (boxIcon.innerText == '') {
            boxIcon.innerHTML = turn
            turn = changeTurn()
            audioTurn.play()
            checkWin()
            if (!isgameover) {
                turn_player.innerHTML = `<span>turn :</span> turn for  '${turn}' `
            }
        }

    })

})
resertBtn.addEventListener('click', () => {
    let boxIcon = document.querySelectorAll('.boxIcon');
    Array.from(boxIcon).forEach(cutt => {
        cutt.innerHTML = ''

    })
    turn_container.classList.remove('active-won')
    turn_container.classList.remove('won-animation');
    isgameover = false;
    turn = x;
    turn_player.innerHTML = `<span>turn :</span> turn for  '${turn}' `
})