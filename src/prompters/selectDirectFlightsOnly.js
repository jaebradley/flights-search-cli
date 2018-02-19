import inquirer from 'inquirer';

const selectDirectFlightsOnly = async () => {
  const { directFlightsOnly } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'directFlightsOnly',
      message: 'Select only direct flights?',
      default: false,
    },
  ]);
  return directFlightsOnly;
};

export default selectDirectFlightsOnly;
