var align = require("align-text")

const genInstallation = (questions) => {
  //console.log(questions)
  // vv if yes on special instructions for installation
  if (`${questions.filter(({ confirmInstallation }) => confirmInstallation)}`) {
    return `
${questions
        .map(({ installationStep }) => {
          return `${align(installationStep, 3)}`
            ;
        })
      }`
  }
  return ``
}

const genUsage = (questions) => {
  return `
${questions
      .map(({ usage }) => {
        return `${align(usage, 3)}`
          ;
      })
    }`
}

const genCont = (questions) => {
  //console.log(questions)
  // vv if yes on Contributing
  if (`${questions.filter(({ confirmContributing }) => confirmContributing)}`) {
    return `
${questions
        .map(({ contributing }) => {
          return `${align(contributing,)}`
            ;
        })
      }`
  }
  return ``
}

const genTests = (questions) => {
  //console.log(questions)
  // vv if yes on Tests
  if (`${questions.filter(({ confirmTests }) => confirmTests)}`) {
    return `
${questions
        .map(({ tests }) => {
          return `${align(tests, 3)}`
            ;
        })
      }`
  }
  return ``
}

const genFeature = (questions) => {
  //console.log(questions)
  // vv if yes on Tests
  if (`${questions.filter(({ confirmFeatures }) => confirmFeatures)}`) {
    return `
${questions
        .map(({ features }) => {
          return `${align(features, 3)}`
            ;
        })
      }`
  }
  return ``
}
const genCredits = (questions) => {
  if (`${questions.filter(({ confirmCredits }) => confirmCredits)}`) {
    return `
${questions
        .map(({ creditsName, creditsGit }) => {
         console.log(creditsGit.askAnswered(({creditsName}) => creditsName))
          return `
|Git Username| Git URL|
|------------| -------|
|${creditsName}|${creditsGit}|`
            ;
        })
      }`
  }
  return ``
}
const genLicense = (questions) => {
  return `
${questions
      .map(({ licenses }) => {
        let license = "";
        let url = "https://img.shields.io/static/v1?label=license&message="
        let color = "&color=green"
        console.log(license)
        licenses.forEach((item, index) => {
          license += "![item](" + url + item + color + ") ";
        })
        return `${license}`
          ;
      })
    }`
}

const genQuestions = (questions) => {
  return `
${questions
      .map(({ username, email }) => {
        let name = username;
        let mail = email;
        return `
|Git Username|Email Address :e-mail: |
|------------|-----------------------|
|${name}|${mail}|`
          ;
      })
    }`
}

module.exports = markData => {
  const { title, description, questions } = markData;
  //console.log("Questions: ")
  //console.log(questions)
  let newTitle = align(title.trim(), 0)
  let newDescription = align(description, 3);

  return `
# ${newTitle}

---

## Description
${newDescription}

---

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Features](#features)
* [Credits](#credits)
* [License](#license)
* [Questions](#questions)

---

## Installation
${genInstallation(questions)}

---

## Usage
${genUsage(questions)}

---

## Contributing
${genCont(questions)}

---

## Tests
${genTests(questions)} 

---

## Features
${genFeature(questions)}

---

## Credits
${genCredits(questions)}

---

## License
${genLicense(questions)}

---

## Questions

### Contact information:
${genQuestions(questions)}

---
`;
};
