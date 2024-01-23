const questions = [
  {
      type: 'input',
      name: 'title',
      message: 'Enter your project title:',
      validate: (input) => input.trim() !== '' ? true : 'Title cannot be empty!',
  },
  {
      type: 'input',
      name: 'description',
      message: 'Enter your project description:',
  },
  {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
  },
  {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
  },
  {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your application:',
      choices: ['MIT', 'Apache', 'GPL', 'Other'],
  },
  {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
  },
  {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
  },
  {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username:',
      validate: (input) => input.trim() !== '' ? true : 'GitHub username cannot be empty!',
  },
  {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
      
  },
];

module.exports = questions;

  