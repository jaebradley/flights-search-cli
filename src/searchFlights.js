import inquirer from 'inquirer';
import moment from 'moment-timezone';
import { searchFlights as search } from 'skypicker';
import open from 'open';
import selectDepartureWindow from './prompters/selectDepartureWindow';
import selectIsRoundTrip from './prompters/selectIsRoundTrip';
import LocationSelector from './prompters/locationSelector';
import selectMaximumPrice from './prompters/selectMaximumPrice';
import selectDirectFlightsOnly from './prompters/selectDirectFlightsOnly';
import formatTrip from './formatters/formatTrip';

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

const searchFlights = async ({
  origin,
  destination,
  departureDateTimeRange,
  returnDateTimeRange,
  maximumPrice,
  onlyDirectFlights,
}) => {
  const locationSelector = new LocationSelector();
  const originParameter = origin || await locationSelector.select('Select origin');
  const destinationParamter = destination || await locationSelector.select('Select destination');
  const departureWindow = departureDateTimeRange || await selectDepartureWindow();
  const isRoundTrip = (departureDateTimeRange && returnDateTimeRange) || await selectIsRoundTrip();

  let roundTripDepartureWindow;
  let returnDepartureDateTimeRange;
  if (isRoundTrip) {
    if (returnDateTimeRange) {
      returnDepartureDateTimeRange = returnDateTimeRange;
    } else {
      roundTripDepartureWindow = await selectDepartureWindow();
      returnDepartureDateTimeRange = {
        days: {
          start: formatDate(roundTripDepartureWindow.date.start),
          end: formatDate(roundTripDepartureWindow.date.end),
        },
        timeOfDay: {
          start: formatTimeOfDay(roundTripDepartureWindow.timeOfDay.start),
          end: formatTimeOfDay(roundTripDepartureWindow.timeOfDay.end),
        },
      };
    }
  }

  const maximumPriceParameter = maximumPrice || await selectMaximumPrice();
  const directFlightsOnly = onlyDirectFlights || await selectDirectFlightsOnly();
  const parameters = {
    departureIdentifier: originParameter.id,
    arrivalIdentifier: destinationParamter.id,
    departureDateTimeRange: departureWindow,
    returnDepartureDateTimeRange,
    priceRange: {
      start: 0,
      end: maximumPriceParameter,
    },
    currencyCode: 'USD', // TODO @jaebradley: change from hard-coded value
    partner: 'picky',
    directFlightsOnly,
    limit: 25,
  };

  const searchResults = await search(parameters);

  const tripMapping = {};
  const formattedTrips = [];
  searchResults.data.forEach((result) => {
    const formattedTrip = formatTrip(result);
    tripMapping[formattedTrip] = result.deep_link;
    formattedTrips.push(formattedTrip);
  });

  const { trip } = await inquirer.prompt([
    {
      type: 'list',
      name: 'trip',
      message: 'Choose trip',
      choices: formattedTrips,
    },
  ]);

  open(tripMapping[trip]);
};

export default searchFlights;
