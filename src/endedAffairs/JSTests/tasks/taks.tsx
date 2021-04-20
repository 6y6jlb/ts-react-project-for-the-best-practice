export function sum(a: number, b: number) {
    return a + b
}

//restParam(почитать)
export function restParams(...numbers: Array<number>) {
    return numbers.reduce((acc, el) => acc + el)
}

export type StudentType = {
    name: string
    isStudent: boolean
    friends: Array<string>
}
export type FuncStudentType = {
    age: number
    isMarried:boolean
    scores:number
    name: string
    friends?: Array<string>
}


export function copyStudent(st: StudentType) {
    return {...st}
}

export function deepCopyStudent(st: StudentType) {
    return {...st, friends: [...st.friends]}
}

export function calculator(a: number, b: number, action: string) {
//'sum','multiply','divide','sub'
    switch (action) {
        case 'multiply':
            return a * b;
        case 'sum':
            return a + b;
        case 'divide':
            return a / b;
        case 'sub':
            return a - b
        default:
            break
    }
}


export const addFriends = (students:Array<FuncStudentType>) => {
    const names = students.map(st => st.name)
    const newStudents = students.map(st => {
        const friendsArray = names.filter(n => n !== st.name)
        return {...st, friends: friendsArray}
    });
    return newStudents
}
export const addFriendsTwo = (students:any[]) => students.map(st => ({...st, friends: students.map(s => s.name).filter(n => n !== st.name)}))
