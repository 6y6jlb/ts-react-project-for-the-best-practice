export function getAverage(marks:number[]):number{
return Math.floor(marks.reduce((acc,el)=>acc+el,0)/marks.length)
}
test ( 'return how many ci=ubs in each columns', (() => {
    expect ( getAverage (  [1, 2, 1, 2] ) ).toStrictEqual ( 1);
    expect ( getAverage (  [1, 1, 1, 1, 1] ) ).toStrictEqual ( 1);


}) )