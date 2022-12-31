const Ship = (shipLen) => {
    const shipLength = shipLen;
    let hitCount = 0;

    const hit = () => {
        return hitCount += 1;
    };

    const isSunk = () => {
        if (hitCount >= shipLength) return true;
        return false;
    };

    return {
        shipLength,
        hitCount,
        hit,
        isSunk
    }
};

export { Ship } ;


