// 2. importeren
const getVolume = require("./index").getVolume;


test('getVolume() function multiplication of width, length and height',() =>{

// arrange
    const width = 4;
    const length = 5;
    const height = 7;
// act
    const volume = getVolume(width, length, height);
// assert
    expect(volume).toBe(140);
});

