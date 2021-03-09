



export const difOfVolumes = (Array1:Array<number>,Array2:Array<number>):number => {
    const dif = Array1.reduce((y,x)=>x*y) - Array2.reduce((y,x)=>x*y)
    return dif>0?dif:-dif
}

test('some arrays separateTypes for codeWars', (() => {
    let newArray: Array<number> = [1, 2, 3]
    let newArray2: Array<number> = [2, 2, 3]
    let newArray3: Array<number> = [3,3,3]
    let newArray4: Array<number> = [1,1,1]

    const count1 = difOfVolumes(newArray,newArray2)
    const count2 = difOfVolumes(newArray2,newArray3)
    const count3 = difOfVolumes(newArray4,newArray3)
    const count4 = difOfVolumes(newArray4,newArray)




    expect(count1).toBe(6)
    expect(count2).toBe(15)
    expect(count3).toBe(26)
    expect(count4).toBe(5)


}))