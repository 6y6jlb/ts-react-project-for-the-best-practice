export const AbbreviateATwoWordNameTest = (name:string):string => {
    let array = name.toUpperCase().split(' ')
    return `${array[0][0]}.${array[1][0]}.`
}

test('return negative for codeWars', (() => {
    expect(AbbreviateATwoWordNameTest("Sam Harris")).toBe('S.H.');
    expect(AbbreviateATwoWordNameTest("Patrick Feenan")).toBe('P.F.');
    expect(AbbreviateATwoWordNameTest("P Favuzzi")).toBe('P.F.');
}))