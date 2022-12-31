
const Gameboard = () => {
    //create the 10 x 10 gameboard via 2-d array
    let grid = Array(10);
    for (let i = 0; i < grid.length; i++) {
        grid[i] = Array(10);
    };

    let shipLocations = [];
    let ships = [];
    let missedShots = [];

    const placeShip = (x, y, ship, orientation) => {
        if (shipInbounds(x, y, ship, orientation) === true && openSpots(x, y, ship, orientation) === true) {
            shipLocations.push(shipCoords(x, y, ship, orientation));
            ships.push(ship);

            shipLocations[shipLocations.length - 1].forEach(([a, b]) => {
                grid[a][b] = {
                    shipName: ship
                };
            })
            return shipLocations[shipLocations.length - 1];
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
        } else {
            const horRowInbounds = 0 <= x && x < 10;
            const horColumnInbounds = 0 <= y && y < 10 && (y + ship.shipLength) < 10;
    
            if (! horRowInbounds || !horColumnInbounds) return false;
        };
        return true;
    };
    const openSpots = (x, y, ship, orientation) => {
        const spots = shipCoords(x, y, ship, orientation);
        const isOpen = spots.every(xy => grid[xy[0]][xy[1]] === undefined);
        
        return isOpen;
    };

    //automatically place ship for ai player
    let xys_ai = new Set();
    const placeShip_ai = (ship) => {
        const [x0, y0, direction] = validAIxy(ship);
        placeShip(x0, y0, ship, direction);
    };

    const validAIxy = (ship) => {
        let [x1, y1] = randomXY(xys_ai);

        while (shipInbounds(x1, y1, ship) === false && shipInbounds(x1, y1, ship, 'vertical') === false || 
        openSpots(x1, y1, ship) === false && openSpots(x1, y1, ship, 'vertical') === false) {
            xys_ai.delete([x1, y1]);
            [x1, y1] = randomXY(xys_ai);
        };

        if (shipInbounds(x1, y1, ship) === true) {
            return [x1, y1, 'horizontal'];
        } else {
            return [x1, y1, 'vertical'];
        }; 
    };

    const receiveAttack = (x, y) => {
        if (grid[x][y] === undefined) {
            missedAttacks(x, y);
        } else if (grid[x][y] != 'missed shot') {
            const attackedShip = grid[x][y].shipName;
            attackedShip.hit();
            return grid[x][y].hitStatus = 'hit';
        };
    };
    //need to add status display later
    const missedAttacks = (x, y) => {
        missedShots.push([x, y]);
        return grid[x][y] = 'missed shot';
    };

    const allShipsSunk = () => { 
        if (ships.every(ship => ship.isSunk() === false)) return 'not all ships are sunk';

        return 'all ships are sunk';
    };

    return {
        grid,
        shipLocations,
        missedShots,
        placeShip,
        placeShip_ai,
        receiveAttack,
        missedAttacks,
        allShipsSunk
    }
};

//random coords helpers
const randomNum = (max) => {
    return Number(Math.floor(Math.random() * (max+1)));
};
const randomXY = (markedSpotsSet) => {
    let randomX = randomNum(9);
    let randomY = randomNum(9);
    markedSpotsSet.add([randomX, randomY]);
    while (markedSpotsSet.has([randomX, randomY])) {
        randomX = randomNum(9);
        randomY = randomNum(9);
    }
    return [randomX, randomY];
};

export { 
    Gameboard, 
    randomXY 
};