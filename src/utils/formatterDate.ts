export const declineNumber = (num: string, word: string) => {
    if (word === 'отель') {
        if (+num === 1) {
            return 'отель';
        } else if (+num >= 2 && +num <= 4) {
            return 'отеля';
        } else {
            return 'отелей';
        }
    } else if (word === 'день') {
        if (+num === 1) {
            return 'день';
        } else if (+num >= 2 && +num <= 4) {
            return 'дня';
        } else {
            return 'дней';
        }
    } else {
        return '';
    }
}