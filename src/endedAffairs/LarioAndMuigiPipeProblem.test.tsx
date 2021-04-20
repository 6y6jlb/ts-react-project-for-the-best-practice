export const pipeFix = (numbers:number[]):number[] => {
    let counter:number = numbers[0];
    let newArray:number[] = [counter];
    for (let i = 0;numbers.length>i;) {
        if (counter<numbers[i+1]) {
            counter+=1;
            newArray=[...newArray,counter];
        } else if (counter===numbers[i+1]){
            i++
        } else {
            break
        }
    }
    return newArray
}


test('the best Lario and Mugi test', (() => {

    let newArray: Array<number> = [1,2,3,5,6,8,9]
    let newArray1: Array<number> = [1,9]
    let newArray2: Array<number> = [-2,9]
    let newArray3: Array<number> = [1,2,3]

    expect(pipeFix(newArray)).toStrictEqual([1,2,3,4,5,6,7,8,9])
    expect(pipeFix(newArray1)).toStrictEqual([1,2,3,4,5,6,7,8,9])
    expect(pipeFix(newArray2)).toStrictEqual([-2,-1,0,1,2,3,4,5,6,7,8,9])
    expect(pipeFix(newArray3)).toStrictEqual([1,2,3])

}))

