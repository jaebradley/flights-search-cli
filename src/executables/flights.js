#!/usr/bin/env node

import program from 'commander';

import pkg from '../../package.json';
import identifyOptions from '../identifyOptions';
import searchFlights from '../searchFlights';

program
  .version(pkg.version)
  .description('Search flights from the command line');

program
  .command('search')
  .description('Search flights')
  .option('-s, --start-airport <iata_code>', 'Starting Airport')
  .option('-e, --end-airport <iata_code>', 'Ending Airport')
  .option('-l, --leaving-between <window>', 'Date(s) or Datetime(s) of departure')
  .option('-r, --returning-between <window>', 'Date(s) or Datetime(s) of return')
  .option('-$, --max-price <usd_amount>', 'Max ticket price (in USD)')
  .option('-0, --direct-flight', 'Only select direct flights')
  .action(async (command) => {
    try {
      const options = command.opts();
      const {
        origin,
        destination,
        departureDateTimeRange,
        returnDateTimeRange,
        maximumPrice,
        onlyDirectFlights,
      } = await identifyOptions({
        startAirportOption: options.startAirport,
        endAirportOption: options.endAirport,
        maxPriceOption: options.maxPrice,
        departureWindowOption: options.leavingBetween,
        returnWindowOption: options.returningBetween,
        onlyDirectFlightsOption: options.directFlight,
      });
      await searchFlights({
        originOption: origin,
        destinationOption: destination,
        departureDateTimeRangeOption: departureDateTimeRange,
        returnDateTimeRangeOption: returnDateTimeRange,
        maximumPriceOption: maximumPrice,
        onlyDirectFlightsOption: onlyDirectFlights,
      });
    } catch (e) {
      console.error(`Rut ro - there was an error: ${e}`); // eslint-disable-line no-console
    }
  });


program.parse(process.argv);
