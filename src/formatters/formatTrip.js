import moment from 'moment-timezone';

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

  // TODO @jaebradley change from hard-coded USD price
  let formattedTripDetails = `${flyFrom} ➡️  ${flyTo} for $${price} on ${airlines.join(' / ')}`;

  if (route) {
    const firstRoute = route[0];
    const departureTime = moment(1000 * firstRoute.dTime).format('llll');
    formattedTripDetails = `${formattedTripDetails} departing at ${departureTime} (${departureDuration})`;

    if (route.length > 1 && returnDuration) {
      const lastRoute = route[route.length - 1];
      const arrivalTime = moment(1000 * lastRoute.aTime).format('llll');
      formattedTripDetails = `${formattedTripDetails} and returning at ${arrivalTime} (${returnDuration})`;
    }
  }

  return formattedTripDetails;
};

export default formatTrip;
