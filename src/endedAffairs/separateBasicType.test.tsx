

export const separateTypes = (input: Array<any>):Object => {

    let number: Array<number> = []
    let string: Array<string> = []
    let boolean: Array<boolean> = []
    for (let i: number = 0; i < input.length; i++) {
        if (typeof input[i] === 'number') {
         number.push(input[i])
        } else if (typeof input[i] === 'string') {
            string.push(input[i])
        } else {
            boolean.push(input[i])
        }
    }

    let obj = {}
    if(number.length !== 0) obj = {...obj, number}
    if(string.length !== 0) obj = {...obj, string}
    if(boolean.length !== 0) obj = {...obj, boolean}


    return obj
}

test('some arrays separateTypes for codeWars', (() => {
    let newArray: Array<any> = [1, 2, 3, true, false, 'sdf']
    let newArray2: Array<any> = [-1, -2, -3, 'sdf', 's']
    let newArray3: Array<any> = []
    let newArray4: Array<any> = ['a', 1, 2, false, 'b']


    const count1: any = separateTypes(newArray)
    const count2: any = separateTypes(newArray2)
    const count3: any = separateTypes(newArray3)
    const count4: any = separateTypes(newArray4)


    expect(count3.string).toBe(undefined)
    expect(count3.number).toBe(undefined)
    expect(count2.number).toStrictEqual([-1, -2, -3])
    expect(count1.boolean).toStrictEqual([true,false])
    expect(count4.number).toStrictEqual([1,2])
    expect(count4.string).toStrictEqual(['a','b'])
    expect(count4.boolean).toStrictEqual([false])

}))
