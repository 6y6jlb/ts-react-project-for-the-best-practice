export const bmi = (weight:number, height:number):string => {
    const index = weight/height**2
    if (index>30) return 'Obese';
    else{
        return index<=18.5?"Underweight":index<=25? "Normal": "Overweight"
    }

}

test('return negative for codeWars', (() => {
    expect(bmi(80,1.80)).toBe('Normal');

}))