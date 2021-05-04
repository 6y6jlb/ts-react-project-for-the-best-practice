export function lovefunc(flower1:number, flower2:number):boolean{
    return (flower1+flower2)%2>0
}

test ( 'return love or not', (() => {
    expect ( lovefunc ( 1,4 )).toBe (true );
    expect ( lovefunc ( 2,2 )).toBe (false );
    expect ( lovefunc ( 0,1 )).toBe (true );
    expect ( lovefunc ( 1123,4 )).toBe (true );



}) )