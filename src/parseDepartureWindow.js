import moment from 'moment-timezone';

/*
If single date, use entire day
If single datetime, use exact datetime
If day range, use range
If datetime range, use exact datetimes
*/

export default function parseDepartureWindow(departureWindow) {
  const [
    startInput,
    endInput,
  ] = departureWindow.split('|');

  if (moment(startInput, moment.HTML5_FMT.DATE).isValid()) {
    const start = moment(startInput, moment.HTML5_FMT.DATE).startOf('day');

    if (moment(endInput, moment.HTML5_FMT.DATE).isValid()) {
      return { start, end: moment(endInput, moment.HTML5_FMT.DATE).endOf('day') };
    }

    return { start, end: start.clone().endOf('day') };
  }

  if (moment(startInput, moment.HTML5_FMT.DATETIME_LOCAL).isValid()) {
    const start = moment(startInput, moment.HTML5_FMT.DATETIME_LOCAL);

    if (moment(endInput, moment.HTML5_FMT.DATETIME_LOCAL).isValid()) {
      return { start, end: moment(endInput, moment.HTML5_FMT.DATETIME_LOCAL) };
    }

    return { start, end: start.clone() };
  }

  throw new Error(`Unparseable departure window: ${departureWindow}`);
}
