"use strict";
const disemvowel = (str) => {
    const vowels = 'aeiou';
    const strList1 = str.split('');
    const strList2 = strList1.filter(letter => !vowels.includes(letter.toLowerCase()));
    const strList3 = strList2.join('');
    return strList3;
};
console.log(disemvowel('Hola como EstAS!'));
//# sourceMappingURL=disemvowel.js.map