import inquirer from 'inquirer';
import moment from 'moment-timezone';
import { searchFlights as search } from 'skypicker';
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

const searchFlights = async () => {
  const locationSelector = new LocationSelector();
  const origin = await locationSelector.select('Select origin');
  const destination = await locationSelector.select('Select destination');
  const departureWindow = await selectDepartureWindow();
  const isRoundTrip = await selectIsRoundTrip();

  let roundTripDepartureWindow;
  let returnDepartureDateTimeRange;
  if (isRoundTrip) {
    roundTripDepartureWindow = await selectDepartureWindow();
    returnDepartureDateTimeRange = {
      date: {
        start: formatDate(roundTripDepartureWindow.date.start),
        end: formatDate(roundTripDepartureWindow.date.end),
      },
      timeOfDay: {
        start: formatTimeOfDay(roundTripDepartureWindow.timeOfDay.start),
        end: formatTimeOfDay(roundTripDepartureWindow.timeOfDay.end),
      },
    };
  }

  const maximumPrice = await selectMaximumPrice();
  const directFlightsOnly = await selectDirectFlightsOnly();
  const parameters = {
    departureIdentifier: origin.id,
    arrivalIdentifier: destination.id,
    departureDateTimeRange: {
      date: {
        start: formatDate(departureWindow.date.start),
        end: formatDate(departureWindow.date.end),
      },
      timeOfDay: {
        start: formatTimeOfDay(departureWindow.timeOfDay.start),
        end: formatTimeOfDay(departureWindow.timeOfDay.end),
      },
    },
    returnDepartureDateTimeRange,
    priceRange: {
      start: 0,
      end: maximumPrice,
    },
    currencyCode: 'USD', // TODO @jaebradley: change from hard-coded value
    directFlightsOnly,
    limit: 10,
  };

  const searchResults = await search(parameters);

  const formattedTrips = searchResults.data.map(result => formatTrip(result));
  const { trip } = await inquirer.prompt([
    {
      type: 'list',
      name: 'trip',
      message: 'Choose trip',
      choices: formattedTrips,
    },
  ]);
};

export default searchFlights;
