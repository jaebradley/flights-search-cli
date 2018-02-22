import moment from 'moment-timezone';
import airlineIATAMapping from '../airlineIATAMapping';

const formatTrip = (trip) => {
  const {
    flyTo,
    flyFrom,
    airlines,
    price,
    route,
  } = trip;

  const returnDuration = trip.return_duration;
  const departureDuration = trip.fly_duration;

  const timeFormat = 'ddd, M/D/YY h:mm A';

  // TODO @jaebradley change from hard-coded USD price
  let formattedTripDetails = `${flyFrom} ➡️  ${flyTo} | 💰  $${price} | ✈️  ${airlines.map(airline => airlineIATAMapping[airline].name).join(' / ')}`;

  if (route) {
    const firstRoute = route[0];
    // Skypicker defines the local departure / arrival times in UTC
    // moment automatically converts the UTC timestamp to best-guess local timestamp
    // So need to convert "back" to UTC in order to get correct local timestamp
    const departureTime = moment(1000 * firstRoute.dTime).tz('GMT').format(timeFormat);
    formattedTripDetails = `${formattedTripDetails} | 🛫  ${departureTime} (${departureDuration})`;

    if (route.length > 1 && returnDuration) {
      const lastRoute = route[route.length - 1];
      const arrivalTime = moment(1000 * lastRoute.aTime).tz('GMT').format(timeFormat);
      formattedTripDetails = `${formattedTripDetails} | 🛬  ${arrivalTime} (${returnDuration})`;
    }
  }

  return formattedTripDetails;
};

export default formatTrip;
