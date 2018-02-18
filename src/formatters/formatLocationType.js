import { LOCATION_TYPES } from 'skypicker';

const locationTypeEmojis = Object.freeze({
  [LOCATION_TYPES.AIRPORT]: 'airport',
  [LOCATION_TYPES.AUTONOMOUS_TERRITORY]: 'autonomous territory',
  [LOCATION_TYPES.CITY]: 'city',
  [LOCATION_TYPES.COUNTRY]: 'country',
  [LOCATION_TYPES.STATION]: 'station',
  [LOCATION_TYPES.SUBDIVISION]: 'subdivision',
});

const formatLocationType = type => locationTypeEmojis[type] || 'location';

export default formatLocationType;
