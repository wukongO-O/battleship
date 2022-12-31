import { Player } from "../modules/players";
import { Gameboard } from "../modules/gameboard";
import { Ship } from "../modules/ship";  

describe('player attacks', () => {
    const board = Gameboard();
    const player1 = Player();
    board.placeShip(3, 2, Ship(5));
    board.placeShip(4, 5, Ship(4), 'vertical');  
    
    test('manually attacks once & missed', () => {
        player1.attack(1, 1, board);
        expect(board.grid[1][1]).toEqual('missed shot');
    });

    test('manually attacks & hit', () => {
        player1.attack(3, 3, board);
        expect(board.grid[3][3].hitStatus).toEqual('hit');
    });

    describe('AI attacks', () => {
        test('randomly attacks 6 times & some ship remains', () => {
            for (let n = 0; n < 6; n++) {
                player1.aIAttack(board);
            };
            expect(board.allShipsSunk()).toEqual('not all ships are sunk');
        });
    
        test('hit all ships by randomly attacking 92 more times', () => {
            for (let n = 0; n < 92; n++) {
                player1.aIAttack(board);
            };
            expect(board.allShipsSunk()).toEqual('all ships are sunk');
        });
    });
});


