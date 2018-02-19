import moment from 'moment-timezone';
import selectDate from './selectDate';
import selectTimeOfDay from './selectTimeOfDay';

const selectDepartureWindow = async () => {
  const departureStartDate = await selectDate({ message: 'Start of your departure range window?' });
  const departureEndDate = await selectDate({
    message: 'End of your departure range window?',
    initial: moment()
      .year(departureStartDate.year)
      .month(departureStartDate.month)
      .date(departureStartDate.date)
      .startOf('day'),
  });

  const departureStartTimeOfDay = await selectTimeOfDay({ message: 'Start of your departure time of day window?' });
  const departureEndTimeOfDay = await selectTimeOfDay({
    message: 'End of your departure time of day window?',
    initial: moment().endOf('day'),
  });

  return {
    date: {
      start: departureStartDate,
      end: departureEndDate,
    },
    timeOfDay: {
      start: departureStartTimeOfDay,
      end: departureEndTimeOfDay,
    },
  };
};

export default selectDepartureWindow;
