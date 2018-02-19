import inquirer from 'inquirer';
import inquirerDatepickerPrompt from 'inquirer-datepicker-prompt';
import moment from 'moment-timezone';

inquirer.registerPrompt('datetime', inquirerDatepickerPrompt);

const selectDate = async ({ message, initial = moment() }) => {
  const { date } = await inquirer.prompt([
    {
      type: 'datetime',
      name: 'date',
      format: ['m', '/', 'd', '/', 'yy'],
      initial: initial.toDate(),
      message,
    },
  ]);
  const parsedDate = moment(date);
  return {
    date: parsedDate.date(),
    month: parsedDate.month(),
    year: parsedDate.year(),
  };
};

export default selectDate;
