export function stringRepeat(n:number,str:string){
    let result = ''
    for (let i =0;i<n;i++) {
        result = result+str
    }
    return result
}

test('stringRepeat for codeWars', (() => {
    expect(stringRepeat(2, '2')).toBe('22');
    expect(stringRepeat(1, '1')).toBe('1');

}))