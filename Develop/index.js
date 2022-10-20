// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const markdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please add a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter the installation instructions for you project',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter the usage information for your project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please list guideline for contributing to the project',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Please enter the instructions on how to test the project',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Please choose one of the following licenses',
        name: 'license',
        choices: ['MIT', 'GPL', 'Apache', 'Other']
    },
    {
        type: 'input',
        message: 'Please enter you GitHub username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please enter your email',
        name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', , (err) =>
        err ? console.error(err) : console.log('Success!')
    );

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(writeToFile())
}

// Function call to initialize app
init();
