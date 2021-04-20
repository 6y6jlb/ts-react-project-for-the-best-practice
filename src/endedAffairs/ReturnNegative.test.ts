export const returnNegative = (n:number):number => {
    return n>0?(-n):n
}

test('return negative for codeWars', (() => {
    expect(returnNegative(-1)).toBe(-1);
    expect(returnNegative(1)).toBe(-1);
    expect(returnNegative(0.12)).toBe(-0.12);
}))