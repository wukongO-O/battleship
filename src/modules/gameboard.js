import { Ship } from './ship';

const Gameboard = () => {
    //create the 10 x 10 gameboard via 2-d array
    let grid = Array(10);
    for (let i = 0; i < grid.length; i++) {
        grid[i] = Array(10);
    };

    let shipLocations = {};

    const placeShip = (x, y, ship, orientation) => {
        if (shipInbounds(x, y, ship, orientation) === true && openSpots(x, y, ship, orientation) === true) {
            shipLocations[ship] = shipCoords(x, y, ship, orientation);

            shipLocations[ship].forEach(([a, b]) => {
                grid[a][b] = {
                    shipName: ship
                };
            })
            return shipLocations[ship];
        } else {
            return [];
        };
    };
    //3 helpers for placeShip
    const shipCoords = (x, y, ship, orientation) => {
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
    const shipInbounds = (x, y, ship, orientation) => {
        if (orientation === 'vertical') {
            const verRowInbounds = 0 <= x && x < 10 && (x + ship.shipLength) < 10;
            const verColumnInbounds = 0 <= y < 10;

            if (! verRowInbounds || ! verColumnInbounds) return false;
        };

        const horRowInbounds = 0 <= x && x < 10;
        const horColumnInbounds = 0 <= y && y < 10 && (y + ship.shipLength) < 10;

        if (! horRowInbounds || !horColumnInbounds) return false;

        return true;
    };
    const openSpots = (x, y, ship, orientation) => {
        const spots = shipCoords(x, y, ship, orientation);
        const isOpen = spots.every(xy => grid[xy[0]][xy[1]] === undefined);
        
        return isOpen;
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