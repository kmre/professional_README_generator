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
console.log(steps)
})
let installSteps = align(steps, 3);
return `${installSteps}`
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
console.log("Questions: ")
console.log(questions)
let newTitle = align(title, 0)
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

// ## Usage
// 

// ## Contributing
//

// ## Tests
// 

// ## Features
//

// ## Credits

// ## License

// ## Questions

`;
};
