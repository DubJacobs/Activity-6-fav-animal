const inquirer = require('inquirer');
const fs = require('fs');
inquirer.prompt([
    {
        type: 'input',
        name:'username',
        message: 'what is your username?',
    },
    {
        type: 'checkbox',
        name: 'languages',
        choices: ['HTML', 'CSS', 'JS', 'MySQL'],
    },
    {
        type:'list',
        name: 'communication',
        choices: ['Email', 'Phone', 'Telekinesis']
    }
]).then(answers => {
    fs.writeFile(`${answers.username}.json`, JSON.stringify(answers, null, 2), (err) => {
      if (err) {
        throw new Error(err);
      }
      console.log('Created profile succcessfully');
    });
  });