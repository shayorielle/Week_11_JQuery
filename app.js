/* 
Coding Steps:

    Using any of the tools you've worked with so far, create a game of Tic-Tac-Toe.
        Create a Tic-Tac-Toe game grid using your HTML element of choice.
        When a cell in the grid is clicked, an x or O should appear in that spot depending on whose turn it is.
        A heading should say whether it is x's or O's turn and change with each move made.
        A button should be available to clear the grid and restart the game.
        When a player has won, or the board is full and the game results in a draw, a Bootstrap alert or similar Bootstrap component should appear across the screen announcing the winner.
*/

// Function called whenever user tab on any box
/*function myfunc() {

    // Setting DOM to all boxes or input field

    const a1btn = document.getElementById("a1");
    const a2btn = document.getElementById("a2");
    const a3btn = document.getElementById("a3");
    const b1btn = document.getElementById("b1");
    const b2btn = document.getElementById("b2");
    const b3btn = document.getElementById("b3");
    const c1btn = document.getElementById("c1");
    const c2btn = document.getElementById("c2");
    const c3btn = document.getElementById("c3");

    const cellButtons = [a1btn, a2btn, a3btn, b1btn, b2btn, b3btn, c1btn, c2btn, c3btn];

    for(cellButton of cellButtons){
        onclick = (e) => {
            e.preventDefault();
            cellButton.disabled = true;
            takeTurn();
        }
    }

   
}
class Cell {
    constructor(cellButton,cellValue){
        this.cellButton = cellButton;
        this.cellValue = cellValue;
    }
}

class Game {
    constructor(){
        this.board = [] ////9 cells in a board
        this.turn = 0; ////9 turns in a game
    }
    setUp(){
    const a1btn = document.getElementById("a1");
    const a2btn = document.getElementById("a2");
    const a3btn = document.getElementById("a3");
    const b1btn = document.getElementById("b1");
    const b2btn = document.getElementById("b2");
    const b3btn = document.getElementById("b3");
    const c1btn = document.getElementById("c1");
    const c2btn = document.getElementById("c2");
    const c3btn = document.getElementById("c3");
    const cellButtons = [a1btn,a2btn,a3btn,b1btn,b2btn,b3btn,c1btn,c2btn,c3btn];

    const a1 = a1btn.value;
    const a2 = a2btn.value;
    const a3 = a3btn.value;
    const b1 = b1btn.value;
    const b2 = b2btn.value;
    const b3 = b3btn.value;
    const c1 = c1btn.value;
    const c2 = c2btn.value;
    const c3 = c3btn.value;

    const cellValues = [a1, a2, a3, b1, b2, b3, c1, c2, c3];

    for (let i = 0; i < cellButtons.length; i++) {
        for (let j = 0; j < cellValues.length; j++) {
            this.board.push(new Cell(cellButtons[i], cellValues[j])); 
    }
}
    }
    takeTurn() {
        this.turn += 1;
        const mark = () => {
            for(cell of this.board){
            if(this.turn % 2 == 1){
                return cell.cellValue == 'x';
            } else {
                return cell.cellValue == 'o';
            } 
        } 
    }
        const set = () => {
            for(cell of this.board){
            if(cell.cellValue == 'x'){
            cell.cellButton.innerContent = `<img src="./x.svg" id="xTurn" class="img-fluid" alt="Responsive image">`
            cell.cellButton.disabled = true;
        } else if(cell.cellValue == 'o'){
            cell.cellButton.innerHTML = `<img src="./o.svg" id="oTurn" class="img-fluid" alt="Responsive image">`
            cell.cellButton.disabled = true;
        }
        }
    }
}
}


const start = new Game();
const ready = start.setUp();


function myTurn(){
    const start = new Game();
    const ready = start.setUp();
    ready.takeTurn();
}
*/

const a1btn = document.getElementById("a1");
const a2btn = document.getElementById("a2");
const a3btn = document.getElementById("a3");
const b1btn = document.getElementById("b1");
const b2btn = document.getElementById("b2");
const b3btn = document.getElementById("b3");
const c1btn = document.getElementById("c1");
const c2btn = document.getElementById("c2");
const c3btn = document.getElementById("c3");

const a1Mark = document.getElementById("a1Mark");
const a2Mark = document.getElementById("a2Mark");
const a3Mark = document.getElementById("a3Mark");
const b1Mark = document.getElementById("b1Mark");
const b2Mark = document.getElementById("b2Mark");
const b3Mark = document.getElementById("b3Mark");
const c1Mark = document.getElementById("c1Mark");
const c2Mark = document.getElementById("c2Mark");
const c3Mark = document.getElementById("c3Mark");

const xMark = `<img src="./x.svg" class="img-fluid" id="xMarkI" alt="Responsive image">`
const oMark = `<img src="./o.svg" class="img-fluid" id="oMarkI" alt="Responsive image">`

const player = document.getElementById("player");
const turnStatus = document.getElementById("turnStatus");
const statusText = document.getElementById("status");

turn = 0;

function gameSet(){
    if(player.value == "X's"){
      turn += 2;
     return turn;
    } else if(player.value == "O's"){
       turn += 1;
       return turn;
    } else 
    return turn;
} 


function status(turn){
    if(turn % 2 == 1){
        statusText.innerHTML = `X's Turn`;
     } else if(turn % 2 == 0){
        statusText.innerHTML = "O's Turn";
     } else {
        statusText.innerHTML = "Select X's or O's to go First";
     }    
}


function takeTurnA1() {
    turn += 1;
    if (turn % 2 == 1) {
        a1Mark.innerHTML = xMark;
    } else {
        a1Mark.innerHTML = oMark;
    } a1btn.disabled = true;
   }
function takeTurnA2() {
    turn += 1;
    if (turn % 2 == 1) {
        a2Mark.innerHTML = xMark;
    } else {
        a2Mark.innerHTML = oMark;
    } a2btn.disabled = true;
}
function takeTurnA3() {
    turn += 1;
    if (turn % 2 == 1) {
        a3Mark.innerHTML = xMark;
    } else {
        a3Mark.innerHTML = oMark;
    } a3btn.disabled = true;
}
function takeTurnB1() {
    turn += 1;
    if (turn % 2 == 1) {
        b1Mark.innerHTML = xMark;
    } else {
        b1Mark.innerHTML = oMark;
    } b1btn.disabled = true;
}
function takeTurnB2() {
    turn += 1;
    if (turn % 2 == 1) {
        b2Mark.innerHTML = xMark;
    } else {
        b2Mark.innerHTML = oMark;
    } b2btn.disabled = true;
}
function takeTurnB3() {
    turn += 1;
    if (turn % 2 == 1) {
        b3Mark.innerHTML = xMark;
    } else {
        b3Mark.innerHTML = oMark;
    } b3btn.disabled = true;
}
function takeTurnC1() {
    turn += 1;
    if (turn % 2 == 1) {
        c1Mark.innerHTML = xMark;
    } else {
        c1Mark.innerHTML = oMark;
    } c1btn.disabled = true;
}
function takeTurnC2() {
    turn += 1;
    if (turn % 2 == 1) {
        c2Mark.innerHTML = xMark;
    } else {
        c2Mark.innerHTML = oMark;
    } c2btn.disabled = true;
} function takeTurnC3() {
    turn += 1;
    if (turn % 2 == 1) {
        c3Mark.innerHTML = xMark;
    } else {
        c3Mark.innerHTML = oMark;
    } c3btn.disabled = true;
}


