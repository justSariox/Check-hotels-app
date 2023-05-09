export function priceConverter(num: number): string {
    const str = num.toString();
    let result = '';
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (count === 3) {
            result = ' ' + result;
            count = 0;
        }
        result = str[i] + result;
        count++;
    }
    return result;
}