import { 
    Gameboard,
    randomXY
} from "./gameboard";

const Player = () => {

    const attack = (x, y, enemyBoard) => {
        enemyBoard.receiveAttack(x, y);
    };

    const attackedSpots_ai = new Set();
    const aIAttack = (playerboard) => {
        
        const xyArr = randomXY(attackedSpots_ai);
        playerboard.receiveAttack(xyArr[0], xyArr[1]);
    };

    return {
        attack,
        aIAttack
    }
};

export { Player };