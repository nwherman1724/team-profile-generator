
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is your projects title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What needs to be installed?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Are there any usage requirements?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What type of license does the project have?',
    choices: ['MIT License', 'Apache License 2.0', 'BSD License', 'GNU GPLv3'],
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How to contribute to this project:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What tests can be run?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email:',
  },
];

function init() {

  // asks questions in the terminal to receive input from the user
  inquirer
    .prompt(questions)
      .then((answers) => {
        const readMeContent = generateReadMe(answers);
    
        fs.writeFile('README2.md', readMeContent, (err) =>
          err ? console.log(err) : console.log('Successfully created README.md!')
        );
      });

}