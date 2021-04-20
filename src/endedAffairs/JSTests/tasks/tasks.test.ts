import {
    addFriends, addFriendsTwo,
    calculator,
    copyStudent,
    deepCopyStudent,
    FuncStudentType,
    restParams,
    StudentType,
    sum
} from "./taks";

test('sum of two numbers', () => {
    //test data
    const a: number = 6
    const b: number = 8
    //выполнение кода с тестовыми данными
    const result = sum(a,b)
    //проверка
    expect(result).toBe(14)
    expect(sum(result,result)).toBe(28)


})

test('sum of some numbers', () => {
    //test data
    const a: number = 6
    const b: number = 8
    const c: number = 1
    const d: number = 4

    const result = restParams(a,b,c,d)
    const result2 = restParams(a,b,c)
    const result3 = restParams(b,c,d)

    expect(result).toBe(19)
    expect(result2).toBe(15)
    expect(result3).toBe(13)
})

//обновление значений перед кадыйм тестом
/*let student:StudentType
beforeEach(()=>{
    student = {
        name:'Тот кого нельзя называть',
        friends:['Тот',"кого","нельзя","называть"],
        isStudent:true
    }
})*/

test('student copy and deepCopy test', () => {
    //test data
    const student:StudentType ={
        name:'Тот кого нельзя называть',
        friends:['Тот',"кого","нельзя","называть"],
        isStudent:true

    }
    const copyStudentResult:StudentType = copyStudent(student)
    const deepCopyStudentResult:StudentType = deepCopyStudent(student)
    //проверка
    expect(student===copyStudentResult).toBe(false)
    expect(student.friends===copyStudentResult.friends).toBe(true)

    expect(student===deepCopyStudentResult).toBe(false)
    expect(student.friends===deepCopyStudentResult.friends).toBe(false)
    expect(student.friends[1]===deepCopyStudentResult.friends[1]).toBe(true)


})

test('calc test', () => {
    expect(calculator(4,2,'sum')).toBe(6)
    expect(calculator(4,2,'multiply')).toBe(8)
    expect(calculator(4,2,'divide')).toBe(2)
    expect(calculator(4,2,'d')).toBe(undefined)



})
//тест для функции студентс

test('addFriends test', () => {
    const students:Array<FuncStudentType> = [
        {
            name: "Bob",
            age: 22,
            isMarried: true,
            scores: 85
        },
        {
            name: "Alex",
            age: 21,
            isMarried: true,
            scores: 90
        },
        {
            name: "Nick",
            age: 20,
            isMarried: false,
            scores: 120
        },
        {
            name: "John",
            age: 19,
            isMarried: false,
            scores: 100
        },
        {
            name: "Helen",
            age: 20,
            isMarried: false,
            scores: 110
        },
        {
            name: "Ann",
            age: 20,
            isMarried: false,
            scores: 105
        },
    ];


    const result1 = addFriends(students)
    const result2 = addFriendsTwo(students)

    expect(result1===students).toBe(false)
    expect(result1[1].friends.length).toBe(5)
    expect(result1[0].friends[0]).toBe("Alex")

    expect(result2===students).toBe(false)
    expect(result2[1].friends.length).toBe(5)
    expect(result2[0].friends[0]).toBe("Alex")



})