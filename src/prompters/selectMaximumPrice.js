import inquirer from 'inquirer';

const isValidPrice = (price) => {
  if (!Number.isNaN(parseFloat(price))
    && Number.isFinite(parseFloat(price))
    && parseFloat(price) > 0) {
    return true;
  }

  return 'Please enter a price greater than 0';
};

const selectMaximumPrice = async () => {
  const { maximumPrice } = await inquirer.prompt([
    {
      type: 'input',
      name: 'maximumPrice',
      message: 'Select maximum price (USD)', // TODO: @jaebradley change hard-coded currency
      validate: isValidPrice,
    },
  ]);
  return maximumPrice;
};

export default selectMaximumPrice;
