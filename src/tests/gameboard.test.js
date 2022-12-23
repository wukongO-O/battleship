import { Gameboard } from "../modules/gameboard";
import { Ship } from '../modules/ship';

describe('gameboard functions', () => {
    const board = Gameboard();

    describe ('gameboard properties', () => {
        test('gameboard has 10 rows', () => {
            expect(board.grid.length).toBe(10);
        });

        test('gameboard has 10 columns', () => {
            expect(board.grid[0].length).toBe(10);
        });
    });

    describe('update gameboard with moves', () => {
        test('place a ship of size 4 within bounds', () => {
            expect(board.placeShip(2, 3, Ship(4))).toEqual([[2, 3], [2, 4], [2, 5], [2, 6]]);
        });

        test('disable placing a ship of size 4 out of bounds', () => {
            expect(board.placeShip(3, 7, Ship(4))).toEqual([]);
        });

        test('disable placing a ship of size 3 overlapping with placed ship', () => {
            expect(board.placeShip(2, 4, Ship(3))).toEqual([]);
        });

        test('vertically place a ship of size 3', () => {

        });

        test('disable vertically placing a ship of size 3 out of bounds', () => {

        });


    });
    beforeEach(() => {

    })

})