/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDays {
  mon = 'monday',
  tue = 'tuesday',
  wed = 'wednesday',
  thu = 'thursday',
  fri = 'friday',
  sat = 'saturday',
  sun = 'sunday',
}

const isWeekend = (day: WeekDays): boolean => {
  return day === WeekDays.sat || day === WeekDays.sun;
};
