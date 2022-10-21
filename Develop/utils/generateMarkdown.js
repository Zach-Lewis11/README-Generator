// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case 'MIT':
      return `![License](https://img.shields.io/badge/License-MIT-blueviolet.svg)`;
    case 'MPL-2.0': 
      return `![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
    case 'Apache-2.0':
      return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
    case 'None':
      return ``;
    default:
      console.log(`Oops, the badge isn't working`)
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case 'MIT':
      return `https://choosealicense.com/licenses/mit/`;
    case 'MPL-2.0': 
      return `https://choosealicense.com/licenses/mpl-2.0/`;
    case 'Apache-2.0':
      return `https://choosealicense.com/licenses/apache-2.0/`;
    case 'None':
      return ``;
    default:
      console.log(`Oops, the link isn't working`)
  }
};

// TODO: Create a function that returns the license section of README
//If there is no license, return an empty string
function renderLicenseSection(license) {};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   return `
  ${renderLicenseBadge(data.license)}

  # ${data.title}

  ---

  ## Description

${data.description}

---

## Table of Contents

* [Installation](#installation) 
* [Usage](#usage) 
* [License](#license) 
* [Contributing](#contributions)
* [Tests](#test) 
* [Questions](#questions)

---

## Installation

${data.installation}

---

## Usage

${data.usage}

---

## License

[${data.license}](${renderLicenseLink(data.license)})

---

## Contributions

${data.contribution}

---

## Test

${data.test}

---

## Questions

If you have any questions, please contact me at ${data.email} or head over to my <a href="https://github.com/${data.username}" target="_blank">GitHub</a>

---
`;
};

module.exports = generateMarkdown;
