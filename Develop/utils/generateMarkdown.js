const genInstallation = (install) => {

  if (!install){
    return '';
  }
  return `${questions.installationStep}`
}


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
const generateMarkdown = markData => {
  const {title, description, ...questions} = markData;
 // console.log(markData)
  //console.log(title)
  
  return `
  # ${title}

  ## Description
  ${description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Features](#features)
  * [Credits](#credits)
  * [License](#license)
  * [Questions](#questions)
  
  ## Installation
  ${genInstallation(questions.confirmInstallation)}

  ## Usage

  ## Contributing

  ## Tests

  ## Features

  ## Credits

  ## License

  ## Questions


`;
}

module.exports = generateMarkdown;
