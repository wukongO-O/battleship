import { Game } from "./game";

const renderGame = () => {
    const currentGame = Game();
    
    const renderBoard = (parentEle) => {
        for(let i = 0; i < 10; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for(let j = 0; j < 10; j++) {
                const cell = document.createElement('div');
                cell.dataset.x = i;
                cell.dataset.y = j;
                cell.classList.add('cell',`row${i}`,`col${j}`);
                row.appendChild(cell);
            };
            parentEle.appendChild(row);
        }
    };

    const renderShips = (locations) => {
        locations.forEach(ship => {
            for(let i = 0; i < ship.length; i++) {
                const x = ship[i][0];
                const y = ship[i][1];
                const shipCellContainer = document.querySelector(`.row${x} .col${y}`);
                const shipCell = document.createElement('div');
                shipCell.classList.add(`ship size${ship.length}`);
                shipCellContainer.appendChild(shipCell);
            };
        })
    };

    const renderP1Ships = renderShips(currentGame.board1.shipLocations);
    const renderP2Ships = renderShips(currentGame.board2.shipLocations);


    return {
        renderBoard,
        renderShips,
        renderP1Ships,
        renderP2Ships
    };
}

const p1board = document.querySelector('.playerboard');
const p2board = document.querySelector('.aiboard');
const btns = document.querySelector('.btns');

const game0 = renderGame();
game0.renderBoard(p1board);
game0.renderBoard(p2board);
game0.renderP1Ships;
game0.renderP2Ships;
