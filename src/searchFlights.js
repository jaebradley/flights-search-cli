import inquirer from 'inquirer';
import { searchFlights as search } from 'skypicker';
import open from 'open';
import selectDepartureWindow from './prompters/selectDepartureWindow';
import selectIsRoundTrip from './prompters/selectIsRoundTrip';
import LocationSelector from './prompters/locationSelector';
import selectMaximumPrice from './prompters/selectMaximumPrice';
import selectDirectFlightsOnly from './prompters/selectDirectFlightsOnly';
import formatTrip from './formatters/formatTrip';
import formatDepartureWindow from './formatters/formatDepartureWindow';

const searchFlights = async ({
  originOption,
  destinationOption,
  departureDateTimeRangeOption,
  returnDateTimeRangeOption,
  maximumPriceOption,
  onlyDirectFlightsOption,
  onlyOneWayOption,
}) => {
  const locationSelector = new LocationSelector();
  const origin = originOption || await locationSelector.select('Select origin');
  const destination = destinationOption || await locationSelector.select('Select destination');
  let isRoundTrip;
  if (returnDateTimeRangeOption) {
    isRoundTrip = true;
  } else if (onlyOneWayOption) {
    isRoundTrip = false;
  } else {
    isRoundTrip = await selectIsRoundTrip();
  }

  const maximumPrice = maximumPriceOption || await selectMaximumPrice();
  const onlyDirectFlights = onlyDirectFlightsOption || await selectDirectFlightsOnly();
  const departureDateTimeRange = departureDateTimeRangeOption || formatDepartureWindow(await selectDepartureWindow());

  let returnDepartureDateTimeRange;
  if (isRoundTrip) {
    if (returnDateTimeRangeOption) {
      returnDepartureDateTimeRange = returnDateTimeRangeOption;
    } else {
      const returnDepartureWindow = await selectDepartureWindow();
      returnDepartureDateTimeRange = formatDepartureWindow(returnDepartureWindow);
    }
  }

  const parameters = {
    departureIdentifier: origin.id,
    arrivalIdentifier: destination.id,
    departureDateTimeRange,
    returnDepartureDateTimeRange,
    priceRange: {
      start: 0,
      end: maximumPrice,
    },
    currencyCode: 'USD', // TODO @jaebradley: change from hard-coded value
    partner: 'picky',
    directFlightsOnly: onlyDirectFlights,
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
