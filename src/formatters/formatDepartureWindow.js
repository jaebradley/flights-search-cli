import moment from 'moment-timezone';

const formatDate = ({ date, month, year }) => moment()
  .year(year)
  .month(month)
  .date(date)
  .startOf('day')
  .toISOString();

const formatTimeOfDay = ({ hour, minute }) => moment()
  .hour(hour)
  .minute(minute)
  .format('HH:mm');

export default function formatDepartureWindow({ date, timeOfDay }) {
  return {
    days: {
      start: formatDate(date.start),
      end: formatDate(date.end),
    },
    timeOfDay: {
      start: formatTimeOfDay(timeOfDay.start),
      end: formatTimeOfDay(timeOfDay.end),
    },
  };
}
