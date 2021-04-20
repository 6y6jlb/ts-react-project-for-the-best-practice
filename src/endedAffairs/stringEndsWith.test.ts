export function solution(str:string, ending:string){
    return str.slice(str.length-ending.length,str.length)===ending
}

test('string ends with for codeWars', (() => {
    expect(solution('abcde', 'abc')).toBe(false);
    expect(solution('abcde', 'cde')).toBe(true);

}))