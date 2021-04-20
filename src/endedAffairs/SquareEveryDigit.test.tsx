

export const squareDigits = (number:number):number => {
/*const toString = number.toString();
    let resultString:string = '';
    for (let i=0; toString.length>i;i++) {
        resultString = resultString + Number(toString[i])**2
    }

    return Number(resultString)*/
    return Number(number.toString()
        .split('')
        .reduce((acc,el)=>acc+Number(el)**2,''))
}

test('square every digits for codeWars', (() => {

    expect(squareDigits(123)).toStrictEqual(149)
    expect(squareDigits(1)).toStrictEqual(1)
    expect(squareDigits(2323)).toStrictEqual(4949)
    expect(squareDigits(3212)).toStrictEqual(9414)


}))

