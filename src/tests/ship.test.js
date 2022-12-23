import { Ship } from '../modules/ship';

describe('ship of size 2', () => {
    let ship1;
    beforeEach(() => {
        return ship1 = Ship(2);
    });
    
    test('shipLength shows ship size', () => {
        expect(ship1.shipLength).toBe(2);
    });

    describe('when ship is hit', () => {
        afterAll(() => {
            return ship1 = Ship(2);
        });

        test('hit once', () => {
            expect(ship1.hit()).toBe(1);
        });
    
        test('hit 3 times', () => {
            ship1.hit();
            ship1.hit();
            expect(ship1.hit()).toBe(3);
        });
    
        test('ship status is not sunk', () => {
            expect(ship1.isSunk()).toBe(false);
        });
    
        test('ship is sunk', () => {
            ship1.hit();
            ship1.hit();
            expect(ship1.isSunk()).toBe(true);
        });
    });
});
