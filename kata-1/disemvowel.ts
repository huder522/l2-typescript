
  const disemvowel = (str: string): string => {
    const vowels: string = 'aeiou';
    const strList1: string[] = str.split('');
    const strList2: string[] = strList1.filter( letter => !vowels.includes( letter.toLowerCase() ) );
    const strList3: string = strList2.join('');
    return strList3;
  }
  console.log(disemvowel('Hola como EstAS!'))
