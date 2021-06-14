export const humanYearsCatYearsDogYears = function (humanYears: number): number[] {
    let arr:number[]=[humanYears,0,0];
    for (let i=1;arr.length>i;i++){
       if (humanYears===1) {
           arr[i]=15
       } else if (humanYears===2) {
           arr[i] = 15+9
       } else {
           if (i===1) {
               arr[i] = 15+9 + ((humanYears-2)*4)
           } else {
               arr[i] = 15+9 + ((humanYears-2)*5)
           }
       }

    }
    return arr;
}

test ( 'return how many ci=ubs in each columns', (() => {
    expect ( humanYearsCatYearsDogYears ( 1 )).toStrictEqual ( [1, 15, 15] );
    expect ( humanYearsCatYearsDogYears ( 2 )).toStrictEqual ( [2, 24, 24] );
    expect ( humanYearsCatYearsDogYears ( 10 )).toStrictEqual ( [10, 56, 64] );


}) )