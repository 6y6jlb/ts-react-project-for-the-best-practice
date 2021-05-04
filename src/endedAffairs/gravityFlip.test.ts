export const flip = (d: string, a: number[]): number[] => {
    switch (d) {
        case 'L': {
            return a.sort ( (a, b) => b - a )
        }
        case 'R': {
            return a.sort ( (a, b) => a - b )
        }
        default: {
            return a
        }

    }

}

test ( 'return how many ci=ubs in each columns', (() => {
    expect ( flip ( 'R', [3, 2, 1, 2] ) ).toStrictEqual ( [1, 2, 2, 3] );
    expect ( flip ( 'L', [1, 4, 5, 3, 5] ) ).toStrictEqual ( [5, 5, 4, 3, 1] );


}) )