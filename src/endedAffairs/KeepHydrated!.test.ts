export function litres(time:number):number {
    return Math.floor(time/2);
}

test ( 'return love or not', (() => {
    expect ( litres ( 1787 )).toBe (893);
    expect ( litres ( 0 )).toBe (0 );
    expect ( litres ( 2 )).toBe (1 );
    expect ( litres ( 1.4 )).toBe (0 );



}) )