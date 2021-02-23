function getCount(str:string) {
    let vowelsCount = 0;
    for (let i = 0; i<str.length; i++) {
        if (str[i] === 'a'|| str[i] ==='e'|| str[i] ==='i'|| str[i] ==='o'|| str[i] ==='u') {
       //if (str[i] === 'a'|| 'e'|| 'i'|| 'o'|| 'u') {
           vowelsCount++
       } else{}
    }
    return vowelsCount;
}

export default getCount;