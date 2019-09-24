import { searchLocationsByTerm, LOCATION_TYPES } from 'skypicker';

export default async function firstMatchingAirport(searchTerm) {
  const searchResults = await searchLocationsByTerm({
    term: searchTerm,
    limit: 1,
    locationTypes: [LOCATION_TYPES.AIRPORT],
  });

  if (searchResults && searchResults.locations && searchResults.locations.length) {
    return searchResults.locations[0];
  }

  return null;
}
