function getVolume(width, length, height) {
    console.log("INPUT :", width, length, height);
    return width * length * height;
}
const volume = getVolume(4, 5, 7);
    console.log(volume);


// 1. exporteren

module.exports = {
    getVolume: getVolume,
};




