# flights-search-cli

[![Greenkeeper badge](https://badges.greenkeeper.io/jaebradley/flights-search-cli.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/jaebradley/flights-search-cli.svg?branch=master)](https://travis-ci.org/jaebradley/flights-search-cli)
[![npm](https://img.shields.io/npm/v/flights-search-cli.svg)](https://www.npmjs.com/package/flights-search-cli)
[![npm](https://img.shields.io/npm/dt/flights-search-cli.svg)](https://www.npmjs.com/package/flights-search-cli)

![alt-text](https://imgur.com/54yeBhy.png)
![alt-text](https://media.giphy.com/media/1k0AuLZvV7FcMTkDrc/giphy.gif)

Search flights from the command line!

## Install

```bash
npm install flights-search-cli --global
```

## Usage

1. `flights search` triggers the command line tool
1. Follow the instructions to
  * Select what airport you're flying from
  * Select what airport you're flying to
  * The departure date range that you're searching over
  * The departure time of day you're searching over (i.e. "I only want to look for flights between 3-6 PM")
  * Select if you only want to look at round-trip flights
  * Select maximum total price of flights in USD
  * Select if you only want to look at direct flights
1. You'll (hopefully) get a list of flights - after selecting one, you'll be taken to a `kiwi.com` booking page

![kiwi-booking](https://imgur.com/iz4V1oX.png)

## Development

`flights-search-cli` uses [`nvm`](https://github.com/nvm-sh/nvm) to manage `node` and `npm` versions.

Ensure that you have `nvm` installed, and have the correct `node` version defined in the `.nvmrc` file.

To build the project locally

1. Execute the `compile` command defined in the `package.json` file
   * This should execute the Babel transpilation process and output files to the `build` directory
1. Execute [the `npm link`](https://docs.npmjs.com/cli/link) command
   * This should symlink the `bin` executable file (`build/executables/flights.js`)
1. Execute any of the commands (like `flights search`)

After making changes to the source code, you will need to rebuild the project and re-link the updated `build` files in order to test any changes you've made to the source code.

### Git Hooks

This project uses [`husky`](https://github.com/typicode/husky) to maintain git hooks.

* `pre-commit` - run source code linting and commit message linting

### Commit Linting

This project uses [`semantic-release`](https://github.com/semantic-release/semantic-release) and [`commitlint`](https://github.com/conventional-changelog/commitlint) (specifically the [Angular commit convention](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)) to automatically enforce semantic versioning.

## Why `kiwi.com`?

Because [they provide a pretty simple REST API](https://skypickerpublicapi.docs.apiary.io) to search for flights.
