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
            expect(board.placeShip(1, 1, Ship(3), 'vertical')).toEqual([[1, 1], [2, 1], [3, 1]]);
        });

        test('disable vertically placing a ship of size 3 out of bounds', () => {
            expect(board.placeShip(8, 4, Ship(3), 'vertical')).toEqual([]);
        });

        describe('attacks & ship status', () => {
            test('receive an attack on ship of size 3', () => {
                board.receiveAttack(1, 1);
                expect(board.grid[1][1].hitStatus).toEqual('hit');
            });

            test('attack an empty spot', () => {
                board.receiveAttack(4, 1);
                expect(board.grid[4][1]).toEqual('missed shot');
            });

            test('size-3 ship status is not sunk', () => {
                expect(board.shipStatus()).toEqual('not all ships are sunk');
            });

        });


    });
    beforeEach(() => {

    })

})