var align = require("align-text")

const genInstallation = (questions) => {
//console.log(questions)
// vv if yes on special instructions for installation
if (`${questions.filter(({confirmInstallation}) => confirmInstallation)}`){
return `
${questions
.map(({installationStep}) => {
let steps = "";
//let newInstStep = installationStep.replace(/\/n /gi, "\n");
let newInstStep2 = installationStep.split("/n");
newInstStep2.forEach( (item, index) => {
steps += (index + 1) + ". " + item.trim() + '\n'
//console.log(steps)
})
let installSteps = align(steps, 3);
return `${installSteps}`
;})
}`
}
return ``
}

const genUsage = (questions) => {
return `
${questions
.map(({usage}) => {
let newUsage = align(usage.replace(/\/n /gi, "\n\n"), 3);
return `${newUsage}`
;})
}`
}

const genCont = (questions) => {
//console.log(questions)
// vv if yes on Contributing
if (`${questions.filter(({confirmContributing}) => confirmContributing)}`){
return `
${questions
.map(({contributing}) => {
let steps = "";
let newCont = contributing.split("/n");
newCont.forEach( (item, index) => {
steps += (index + 1) + ". " + item.trim() + '\n'
//console.log(steps)
})
let contSteps = align(steps, 3);
return `${contSteps}`
;})
}`
}
return ``
}

const genTests = (questions) => {
//console.log(questions)
// vv if yes on Tests
if (`${questions.filter(({confirmTests}) => confirmTests)}`){
return `
${questions
.map(({tests}) => {
let steps = "";
let newTest = tests.split("/n");
newTest.forEach( (item, index) => {
steps += (index + 1) + ". " + item.trim() + '\n'
//console.log(steps)
})
let testSteps = align(steps, 3);
return `${testSteps}`
;})
}`
}
return ``
}

const genFeature = (questions) => {
//console.log(questions)
// vv if yes on Tests
if (`${questions.filter(({confirmFeatures}) => confirmFeatures)}`){
return `
${questions
.map(({features}) => {
let steps = "";
let newFeature = features.split("/n");
newFeature.forEach( (item, index) => {
steps += (index + 1) + ". " + item.trim() + '\n'
//console.log(steps)
})
let featureSteps = align(steps, 3);
return `${featureSteps}`
;})
}`
}
return ``
}

const genUser = (questions) => {
return `
${questions
.map(({username}) => {
let newUser = align(username, 3);
return `${newUser}`
;})
}`
}

const genEmail = (questions) => {
return `
${questions
.map(({email}) => {
let newEmail = align(email, 3);
return `${newEmail}`
;})
}`
}
const genCreditsN = (questions) => {
if (`${questions.filter(({confirmCredits}) => confirmCredits)}`){
return `
${questions
.map(({creditsName}) => {
let name = creditsName;
return `${name}`
;})
}`
}
return ``
}
const genCreditsU = (questions) => {
if (`${questions.filter(({confirmCredits}) => confirmCredits)}`){
return `
${questions
.map(({creditsGit}) => {
let name = creditsGit;
return `${name}`
;})
}`
}
return ``
}

// const genInstallation = (questions) => {
//     console.log(questions)
//     // vv if yes on special instructions for installation
//     return `
//       ${questions
//         .filter(({confirmInstallation}) => confirmInstallation)
//         .map(({usage, email}) => {
//           return `
//             ${usage}
//             ${email}
//         `;
//         })
//         }

//       ${questions
//         .filter(({confirmInstallation}) => !confirmInstallation)
//         .map(({  }) => {

//           return `
//         `;
//         })
//         }
//   `;
//         //^^ if no on special instructions for installation
// }

module.exports = markData => {
const {title, description, questions} = markData;
//console.log("Questions: ")
//console.log(questions)
let newTitle = align(title.trim(), 0)
let newDescription = align(description.replace(/\/n /gi, "\n\n"), 3);

return `
# ${newTitle}

## Description
${newDescription}

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
${genInstallation(questions)}

## Usage
${genUsage(questions)}

## Contributing
${genCont(questions)}

## Tests
${genTests(questions)} 

## Features
${genFeature(questions)}

## Credits

| Git Username | Git URL |
| ------------ | ------- |
| ${genCreditsN(questions)} | ${genCreditsU(questions)} |

## License

## Questions

### Contact information:

**Github Username:**
${genUser(questions)}

:e-mail: **User's Email:**
${genEmail(questions)}

`;
};
