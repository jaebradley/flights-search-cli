import inquirer from 'inquirer';

const selectIsRoundTrip = async () => {
  const { isRoundTrip } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'isRoundTrip',
      message: 'Is this a round-trip flight?',
      default: true,
    },
  ]);
  return isRoundTrip;
};

export default selectIsRoundTrip;
