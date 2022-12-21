const Ship = (shipLen) => {
    const shipLength = shipLen;
    let hitCount = 0;

    const hit = () => {
        hitCount += 1;
        return hitCount;
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

export default Ship;

