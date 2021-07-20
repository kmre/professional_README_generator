const genInstallation = (questions) => {
  //console.log(questions)
  // vv if yes on special instructions for installation
  if (`${questions.filter(({confirmInstallation}) => confirmInstallation)}`){
    return `
    ${questions
       .map(({installationStep}) => {
         return `${installationStep}`;})
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
