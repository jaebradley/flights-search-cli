import searchFlights from '../searchFlights';

const executeSearch = async () => {
  try {
    await searchFlights();
  } catch (e) {
    console.error(`Rut ro - there was an error: ${e}`); // eslint-disable-line no-console
  }
};

executeSearch();
