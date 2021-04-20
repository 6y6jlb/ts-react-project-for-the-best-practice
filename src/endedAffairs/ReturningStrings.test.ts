export const returningStrings = (n:string):string => {
    return `Hello, ${n} how are you doing today?`
}

test('return negative for codeWars', (() => {
    expect(returningStrings('lesha')).toBe(`Hello, lesha how are you doing today?`);
    expect(returningStrings('')).toBe(`Hello,  how are you doing today?`);

}))