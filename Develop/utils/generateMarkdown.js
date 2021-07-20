const genInstallation = (questions) => {
    console.log(questions)
    return `
      ${questions
        .filter(({ confirmInstallation }) => confirmInstallation)
        .map(({ usage, email}) => {
          return `
            ${usage}
            ${email}
        `;
        })
        }

      ${questions
        .filter(({ confirmInstallation }) => !confirmInstallation)
        .map(({ name, description, languages, link }) => {

          return `
          ""
        `;
        })
        }
  `;
}

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
