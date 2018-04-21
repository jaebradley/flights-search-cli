import inquirer from 'inquirer';

const isValidPassengerCount = (passengerCount) => {
  if (!Number.isNaN(parseFloat(passengerCount))
    && Number.isFinite(parseFloat(passengerCount))
    && parseFloat(passengerCount) >= 1) {
    return true;
  }
  return 'Please enter at least one passenger';
};

const selectPassengerCount = async () => {
  const { passengerCount } = await inquirer.prompt([
    {
      type: 'input',
      name: 'passengerCount',
      message: 'Select number of passengers',
      validate: isValidPassengerCount,
      default: 1,
    },
  ]);
  return passengerCount;
};

export default selectPassengerCount;
