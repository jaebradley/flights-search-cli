import accounting from 'accounting';

import firstMatchingAirport from './firstMatchingAirport';
import parseDepartureWindow from './parseDepartureWindow';
import formatDepartureWindow from './formatDepartureWindow';

async function asyncExecuteSafely(func) {
  try {
    return await func();
  } catch (e) {
    return null;
  }
}

function executeSafely(func) {
  try {
    return func();
  } catch (e) {
    return null;
  }
}

export default async function identifyOptions({
  startAirportOption,
  endAirportOption,
  departureWindowOption,
  returnWindowOption,
  maxPriceOption,
  onlyDirectFlightsOption,
}) {
  const [
    origin,
    destination,
  ] = await Promise.all([
    asyncExecuteSafely(() => firstMatchingAirport(startAirportOption)),
    asyncExecuteSafely(() => firstMatchingAirport(endAirportOption)),
  ]);

  const departureDateTimeRange = executeSafely(() => formatDepartureWindow(parseDepartureWindow(departureWindowOption)));
  const returnDateTimeRange = executeSafely(() => formatDepartureWindow(parseDepartureWindow(returnWindowOption)));
  const maximumPrice = executeSafely(() => accounting.unformat(maxPriceOption));
  const onlyDirectFlights = !!onlyDirectFlightsOption;

  return {
    origin,
    destination,
    departureDateTimeRange,
    returnDateTimeRange,
    maximumPrice,
    onlyDirectFlights,
  };
}
