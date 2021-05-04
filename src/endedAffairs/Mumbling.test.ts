export function accum(s:string):string {
    const array = s.split('');
    let string = '';
   for (let i = 0; i<array.length;i++) {
       for (let j=0; j<=i;j++) {
           if (j===0) {
               string += '-' + array[i].toString().toUpperCase()
           }
           else {
               string += array[i].toString().toLowerCase()
           }
       }
   }
   return string.slice(1)
}

test ( 'accum("abcd") -> "A-Bb-Ccc-Dddd"', (() => {
    expect ( accum ( "ZpglnRxqenU" )).toBe ("Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");




}) )