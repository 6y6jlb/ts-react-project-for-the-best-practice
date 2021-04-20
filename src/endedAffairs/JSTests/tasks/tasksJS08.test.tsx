import {getBanknoteList, getSum, getTriangleType, isEvenIndexSumGreater, isSquareGreater, sum} from "./tasksJS08";


test('sum test', () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15)
    expect(sum(1, 2, 3, 4, 5, -3)).toBe(15)
})

test("get Triangle Type", () => {
    expect(getTriangleType(1, 1, 1)).toBe("10")
    expect(getTriangleType(3, 3, 2)).toBe("01")
    expect(getTriangleType(5, 4, 3)).toBe("11")
    expect(getTriangleType(10, 5, 5)).toBe("00")

})

test("get Sum ", ()=> {
    expect(getSum(1000)).toBe(1)
    expect(getSum(0)).toBe(0)
    expect(getSum(1234)).toBe(10)
    expect(getSum(9999)).toBe(36)
})
test("is Even Sum Greater", ()=> {
    expect(isEvenIndexSumGreater([1, 100, 2, 200])).toBe(false)
    expect(isEvenIndexSumGreater([100, 1, 200, 2])).toBe(true)
})
test("is Square Greater Than Circle", ()=> {
    const sCr = 3.14
    const sSq = 4
    const result = isSquareGreater(sCr, sSq)

    expect(result).toBe(true)
    expect(isSquareGreater(10, 12)).toBe(true)
    expect(isSquareGreater(3, 1)).toBe(false)
})
test("get banknote list", ()=> {
    const result1500 = getBanknoteList(1500)
    const result23 = getBanknoteList(23)
    const result1111 = getBanknoteList(1111)
    const result4444 = getBanknoteList(4444)
    expect(result1500[0]).toBe(1000)
    expect(result1500[1]).toBe(500)
    expect(result23[0]).toBe(20)
    expect(result23[1]).toBe(2)
    expect(result23[2]).toBe(1)
    expect(result1111[0]).toBe(1000)
    expect(result1111[3]).toBe(1)
    expect(result4444[3]).toBe(1000)
    expect(result4444[5]).toBe(100)

})

