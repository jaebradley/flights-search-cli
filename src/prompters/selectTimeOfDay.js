import inquirer from 'inquirer';
import inquirerDatepickerPrompt from 'inquirer-datepicker-prompt';
import moment from 'moment-timezone';

inquirer.registerPrompt('datetime', inquirerDatepickerPrompt);

const selectTimeOfDay = async ({ message, initial = moment().startOf('day') }) => {
  const { timeOfDay } = await inquirer.prompt([
    {
      type: 'datetime',
      name: 'timeOfDay',
      format: ['h', ':', 'MM', ' ', 'TT'],
      initial: initial.toDate(),
      message,
    },
  ]);
  const parsedTimeOfDay = moment(timeOfDay);
  return {
    hour: parsedTimeOfDay.hour(),
    minute: parsedTimeOfDay.minute(),
  };
};

export default selectTimeOfDay;
