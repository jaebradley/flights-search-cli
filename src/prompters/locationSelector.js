import { searchLocationsByTerm } from 'skypicker';
import inquirer from 'inquirer';
import inquirerAutocompletePrompt from 'inquirer-autocomplete-prompt';
import formatLocationType from '../formatters/formatLocationType';

inquirer.registerPrompt('autocomplete', inquirerAutocompletePrompt);

class LocationSelector {
  constructor() {
    this.locations = {};
  }

  async select(message) {
    const selection = await inquirer.prompt([
      {
        name: 'location',
        type: 'autocomplete',
        source: (answersSoFar, searchTerm) => this.findMatches(searchTerm),
        message,
      },
    ]);

    const { id, code, name } = this.locations[selection.location];
    return { id, code, name };
  }

  async findMatches(location = '') {
    const searchResults = await searchLocationsByTerm({ term: location, limit: 5 });

    const locationNames = [];
    searchResults.locations.forEach((result) => {
      if (result.active) {
        const formattedLocationType = formatLocationType(result.type, result.code);
        const locationKey = `${result.name} ${formattedLocationType}`;
        this.locations[locationKey] = result;
        locationNames.push(locationKey);
      }
    });

    return Promise.resolve(locationNames);
  }
}

export default LocationSelector;
