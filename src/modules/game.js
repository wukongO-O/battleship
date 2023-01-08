import { Player } from "./players";
import { Gameboard } from "./gameboard";
import { Ship } from "./ship";

const Game = () => {
    const player1 = Player();
    const player2 = Player();

    const board1 = Gameboard();
    const board2 = Gameboard();
//!! pre-placed ships - need to change to player's choices later
    const ships1 = [
        [1, 1, Ship(5), 'horizontal'], 
        [2, 2, Ship(4), 'horizontal'],
        [3, 3, Ship(3), 'vertical'],
        [4, 4, Ship(2), 'vertical'],
        [5, 5, Ship(1)]];
    const ships2 = [
        [9, 1, Ship(5), 'horizontal'],
        [8, 2, Ship(4), 'horizontal'],
        [5, 3, Ship(3), 'vertical'],
        [4, 5, Ship(2), 'vertical'],
        [3, 2, Ship[1]]
    ];
    ships1.forEach(xy => {
        board1.placeShip(xy);
    });
    ships2.forEach(xy => {
        board2.placeShip(xy);
    });

    return {
        player1,
        player2,
        board1,
        board2,
        ships1,
        ships2
    }
};

export { Game };