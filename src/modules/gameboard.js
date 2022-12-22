import { Ship } from './ship';

const Gameboard = () => {
    //create the 10 x 10 gameboard via 2-d array
    let grid = Array(10);
    for (let i = 0; i < grid.length; i++) {
        grid[i] = Array(10);
    };

    const selectedShip = Ship (shipSize);

    let shipLocations = [];

    const placeShip = (x, y, ship) => {
        
        shipLocations.ship = [];
        for (let i = x; i < (x + ship.shipLength); i++ ) {
            grid[i][y] = {
                shipName: ship
            };
            shipLocations.push(grid[i][y]);
        };
    };

    const rotateShip = (x, y, ship) => {
        
    }

    const receiveAttack = (x, y) => {
        if (grid[x][y] === null) missedAttacks(x, y);
        if (grid[x][y] != 'empty shot') {
            const attackedShip = grid[x][y].shipName;
            attackedShip.hit();
            grid[x][y].hitStatus = 'hit';
        }
    };
    //need to add status display
    const missedAttacks = (x, y) => {
        return grid[x][y] === 'missed shot';
    };

    const shipStatus = () => {
        if (shipLocations.every(spot => spot.hitStatus == 'hit'))
         {
            alert('Player ? won');
         }
    };

    return {
        placeShip,
        receiveAttack,
        missedAttacks,
        shipStatus
    }
};

export { Gameboard };