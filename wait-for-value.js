const waitForValue = (delay, value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
};

module.exports = waitForValue;