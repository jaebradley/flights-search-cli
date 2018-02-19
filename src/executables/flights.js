#!/usr/bin/env node

import program from 'commander';

import pkg from '../../package.json';

program.version(pkg.version)
  .description('Search flights from the command line')
  .command('search', 'Search flights')
  .parse(process.argv);
