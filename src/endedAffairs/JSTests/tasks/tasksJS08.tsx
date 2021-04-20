// 1. Функция принимает параметром целые положительные числа и возвращает
// их сумму.

export function sum(...numbers: Array<number>) {
    return [...numbers].reduce((acc, el) => acc + (el > 0 ? el : 0))
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "01", если треугольник равнобедренный,
//  - "10", если треугольник равносторонний,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.


export function getTriangleType(a: number, b: number, c: number) {

    /* const max = Math.max(a, b, c)
     const min = Math.min(a, b, c)
     const middle = a + b + c - min - max

     if (min + middle <= max) {
         return '00'
     }
     if (min === middle && min === max) {
         return '10'
     }
     if (min === middle || middle === max) {
         return '01'
     } else {
         return '11'
     }*/

    if (a + b > c && b + c > a && c + a > b) {
        if (a === b && b === c) {
            return '10'
        } else if (a === b || b === c || c === a) {
            return '01'
        } else
            return '11'
    } else {
        return '00'
    }
}

//getSum

/*export function getSum(a: number): number {
    return a
        .toString()
        .split('')
        .reduce((acc, el) => acc + Number(el), 0)
}*/

/*
export function getSum(a: number) {
    let temp = a.toString();
    let sum = 0;

    for(let i = 0; i < temp.length; i++) {
        const res = temp.charAt(i);
        sum += +res;
    }
    return sum
}
*/

/*export function getSum(a: number) {
    let sum = 0;
    for (; a > 0; a = Math.trunc(a / 10)) {
        sum += a % 10
    }
    return sum
}*/

export const getSum = (arg: number) => eval(arg.toString().replace(/(\d)(?=\d)/g, '$1+')); //eval(почитать)

//сумма чисел с индексами

export function isEvenIndexSumGreater(array: number[]): boolean {
    let odd = 0
    let even = 0
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            even += array[i]
        } else {
            odd += array[i]
        }
    }
    return even > odd
}

// 5. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг поместится в
// квадрате и false в противном случае.

export function isSquareGreater(circle: number, square: number) {
    const diam = 2 * ((circle / Math.PI) * 0.5)
    const edge = square * 0.5
    return diam <= edge
}

// 6. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

export function getBanknoteList(amount: number): number[] {
    /*
        let copyAmount = amount;
        let newArray: number[] = [];
        while (copyAmount > 0) if (copyAmount >= 1000) {
            newArray = [...newArray, 1000]
            copyAmount -= 1000
        } else if (copyAmount >= 500) {
            newArray = [...newArray, 500]
            copyAmount -= 500
        } else if (copyAmount >= 100) {
            newArray = [...newArray, 100]
            copyAmount -= 100
        } else if (copyAmount >= 50) {
            newArray = [...newArray, 50]
            copyAmount -= 50
        } else if (copyAmount >= 20) {
            newArray = [...newArray, 20]
            copyAmount -= 20
        } else if (copyAmount >= 10) {
            newArray = [...newArray, 10]
            copyAmount -= 10
        } else if (copyAmount >= 5) {
            newArray = [...newArray, 5]
            copyAmount -= 5
        } else if (copyAmount >= 2) {
            newArray = [...newArray, 2]
            copyAmount -= 2
        } else if (copyAmount >= 1) {
            newArray = [...newArray, 1]
            copyAmount -= 1
        } else {
            return newArray
        }
        return newArray
    */
    let copyAmount = amount;
    let newArray: number[] = [];
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];

    for (let i = 0;copyAmount > 0;) {
        if (banknotes[i] <= copyAmount) {
            copyAmount -= banknotes[i]
            newArray = [...newArray, banknotes[i]]

        } else {
            i += 1
        }
    }
    return newArray

}