// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

${response.description}

## Table of Contents

*[Installation](#installation) 
*[Usage](#usage) 
*[License](license) 
*[Contributing](#contributions)
*[Tests](#tests) 
*[Questions](#questions)

## Installation

${response.installation}

## Usage

${response.usage}

## License

${response.license}

## Contributions

${response.contribution}

## Test

${response.test}

## Questions

If you have any questions, please contact me at ${email} or head over to my <a href="https://github.com/${response.username}" target="_blank">GitHub</a>
`;
}

module.exports = generateMarkdown;
