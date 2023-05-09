export function DateReplacer(date: string) {
    const months = {
        '01': 'Января',
        '02': 'Февраля',
        '03': 'Марта',
        '04': 'Апреля',
        '05': 'Мая',
        '06': 'Июня',
        '07': 'Июля',
        '08': 'Августа',
        '09': 'Сентября',
        '10': 'Октября',
        '11': 'Ноября',
        '12': 'Декабря',
    };
    const [year, month, day] = date.split('-');
    const formattedDay = parseInt(day) <= 9 ? day[1] : day;
    const formattedMonth = months[month as keyof typeof months];

    return `${formattedDay} ${formattedMonth} ${year} год`.toLowerCase();
}
