export const sum = function sum(a, b) {
    return a + b;
}

export const Anagrams = function sum(string1, string2) {
    const str1 = string1.replace(/ /g, '').toLowerCase();
    const str2 = string2.replace(/ /g, '').toLowerCase();
   

    if (str1.length !== str2.length) {
        return false;
      }

    const a = str1.split('').sort().join('')
    const b = str2.split('').sort().join('')
    
    return a === b;
}