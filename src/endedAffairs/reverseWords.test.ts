export function reverseWords(str:string):string{
    // const arr = str.split(' ')
    // let newStr='';
    // for (let i=0; arr.length>i;i++) {
    //     newStr = `${arr[i]} ${newStr}`
    // }
    // return newStr.trim(); // reverse those words
    return str.split(' ').reduce((acc,el)=>`${el + ' '+ acc}`,'').trim()
}

test('return negative for codeWars', (() => {
    expect(reverseWords("Sam Harris")).toBe('Harris Sam');
    expect(reverseWords("Patrick Feenan")).toBe('Feenan Patrick');
    expect(reverseWords("P Favuzzi")).toBe('Favuzzi P');
}))