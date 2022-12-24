import { Ship } from './ship';

const Gameboard = () => {
    //create the 10 x 10 gameboard via 2-d array
    let grid = Array(10);
    for (let i = 0; i < grid.length; i++) {
        grid[i] = Array(10);
    };

    //const selectedShip = Ship (shipSize);

    let shipLocations = {};

    const placeShip = (x, y, ship, orientation) => {
        
        shipLocations[ship] = shipOrientation(x, y, ship, orientation);

        shipLocations[ship].forEach(([a, b]) => {
            grid[a][b] = {
                shipName: ship
            };
        })
        return shipLocations[ship];
    };

    const shipOrientation = (x, y, ship, orientation) => {
        let shipXYs = [];
        
        for (let i = 0; i < ship.shipLength; i++) {
            if (orientation === 'vertical') {
                shipXYs.push([x + i, y]);
            } else {
                shipXYs.push([x, y + i]);
            };
        };

        return shipXYs;
    };
    const shipInbounds = (x, y, ship) => {

    };

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
        grid,
        placeShip,
        receiveAttack,
        missedAttacks,
        shipStatus
    }
};

export { Gameboard };