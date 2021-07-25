var align = require("align-text")

const genInstallation = (questions) => {
  //console.log(questions)
  // vv if yes on special instructions for installation
  if (questions.confirmInstallation) {
    return `
${questions.installationStep}    
`
  }
  return ``
}

const genUsage = (questions) => {
  return `
${questions.usage}
`
}

const genCont = (questions) => {
  //console.log(questions)
  // vv if yes on Contributing
  if (questions.confirmContributing) {
    return `
${questions.contributing}
`
  }
  return ``
}

const genTests = (questions) => {
  //console.log(questions)
  // vv if yes on Tests
  if (questions.confirmTests) {
    return `
${questions.tests}
`
}
  return ``
}

const genFeature = (questions) => {
  //console.log(questions)
  // vv if yes on Tests
  if (questions.confirmFeatures) {
    return `
${questions.features} 
`
}
  return ``
}
const genCredits = (questions) => {
  if (questions.credits.length) {
    //console.log(questions.credits.length)
    //console.log(questions.credits)
    //console.log(questions)
    //console.log("================")
    let credit = "";
    questions.credits.forEach(item => {
      let name = item.creditsName
      let git = item.creditsGit
      credit += "|Name: " + name + "| Url: " + git + "| \n";
    });
   // console.log(credit)
    return `
|Git Username|Git URL|
|------------|-----------------------|
${credit}
`
}
//console.log(questions.credits.length)
  return ``
}
const genLicense = (questions) => {
        let license = "";
        let url = "https://img.shields.io/static/v1?label=license&message="
        let color = "&color=green"
       // console.log("licence-------------------------------")
        //console.log(questions.licenses)
        questions.licenses.forEach((item, index) => {
        license += "![item](" + url + item + color + ") ";
       // console.log(license)
        })
        return `${license}`
}

const genQuestions = (questions) => {
  let name = questions.username; 
  let mail = questions.email; 
return `
|Git Username|Email Address :e-mail: |
|------------|-----------------------|
|${name}|${mail}|`
;
}

module.exports = markData => {
  const { title, description, ...questions } = markData;
 // console.log("Questions:------------------ ")
 // console.log(questions)
  //console.log(title)
 // console.log("===============")
  //console.log(questions.username)
 // console.log("---------------MD")
 // console.log(markData)
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
