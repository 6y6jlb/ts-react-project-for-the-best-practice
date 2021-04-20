export const zeroFuel = (distanceToPump:number, mpg:number, fuelLeft:number):boolean => {
    return mpg*fuelLeft>=distanceToPump
}

test('return negative for codeWars', (() => {
    expect(zeroFuel(50,25,2)).toBe(true);
    expect(zeroFuel(100,50,1)).toBe(false);
}))