export function positiveSumTest(arr: Array<number>): any {
    let count = 0
    arr.forEach(n => {
        if (n > 0) {
            count += n
        }
    })
    return count
}

test('positiveSum', (() => {
    let newArray = [1, 2, 3]
    let newArray2 = [-1, -2, -3]
    let newArray3 = [1, -2, 3]
    let newArray0 = [0, 0, 0]

    const count1 = positiveSumTest(newArray)
    const count2 = positiveSumTest(newArray2)
    const count3 = positiveSumTest(newArray3)
    const count4 = positiveSumTest(newArray0)
    expect(count1).toBe(6);
    expect(count2).toBe(0);
    expect(count3).toBe(4);
    expect(count4).toBe(0);


}))