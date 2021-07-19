// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadMe = require('./src/readme-template');
const { writeFile, copyFile } = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const mainQuestions = [
        {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your README file? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a Title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a short description explaining the what, why, and how of your project (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a short description!');
            return false;
          }
        }
      }
];

const multiQ1 = [
      {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Does your project require special instructions for installation?',
        default: true
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        when: ({ confirmInstallation }) => confirmInstallation
      },
      {
        type: 'confirm',
        name: 'confirmQ1',
        message: 'Would you like to enter another step?',
        when: ({ confirmInstallation }) => confirmInstallation,
        default: false
      }
];

    const multiQ2 = [
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use. (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a short list of instructions and uses!');
            return false;
          }
        }
      },
    ]    

    const multiQ3 = [
      {
        type: 'confirm',
        name: 'confirmCredits',
        message: 'Do you want to add any collaborators or did you use any third-party assets you want to credit?',
        default: true
      },
      {
        type: 'input',
        name: 'credits-name',
        message: 'Enter the names of your collaborators or third-party assets',
        when: ({ confirmCredits }) => confirmCredits
      },
      {
        type: 'input',
        name: 'credits-git',
        message: 'Enter the git username of your collaborators or url of third-party assets',
        when: ({ confirmCredits }) => confirmCredits
      },
      {
        type: 'confirm',
        name: 'confirmQ3',
        message: 'Would you like to enter another collaborator/asset?',
        when: ({ confirmCredits }) => confirmCredits,
        default: false
      }
    ]

    // {
    //     type: 'confirm',
    //     name: 'confirmLicense',
    //     message: 'Do you want to add any licences used to you README file?',
    //     default: true
    // },
    // {
    //     type: 'input',
    //     name: 'license',
    //     message: 'Enter used licenses',
    //     when: ({ confirmLicense }) => confirmLicense
    // },
    // {
    //     type: 'confirm',
    //     name: 'confirmBadge',
    //     message: 'Do you want to add any badges to you README file?',
    //     default: true
    // },
    // {
    //     type: 'input',
    //     name: 'badge',
    //     message: 'Enter used package name to generate the badge',
    //     when: ({ confirmBadge }) => confirmBadge
    // },
    // //Need to loop through more than 1 feature
    // {
    //     type: 'confirm',
    //     name: 'confirmFeatures',
    //     message: 'Do you want to add any features to you README file?',
    //     default: true
    // },
    // {
    //     type: 'input',
    //     name: 'features',
    //     message: 'Enter key features of your project',
    //     when: ({ confirmFeatures }) => confirmFeatures
    // },
    // //Need to loop through more than 1 feature
    // {
    //     type: 'confirm',
    //     name: 'confirmContributing',
    //     message: 'Do you want other developers to contribute to your application?',
    //     default: true
    // },
    // {
    //     type: 'input',
    //     name: 'contributing',
    //     message: 'Add the guidelines you would like for them to follow',
    //     when: ({ confirmContributing }) => confirmContributing
    // },
    // //Need to loop for more than one test
    // {
    //     type: 'confirm',
    //     name: 'confirmTests',
    //     message: 'Do you want other developers to test your application or do you have examples of tests you have performed?',
    //     default: true
    // },
    // {
    //     type: 'input',
    //     name: 'tests',
    //     message: 'Provide examples on how to run them',
    //     when: ({ confirmContributing }) => confirmContributing
    // },
    //Need to loop for more than one test

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}
const init = () => {
    return inquirer.prompt(
        mainQuestions
    ); 
}

//Prompt for multiple steps in instructions
const promptQ1 = q1Data => {
    console.log(`
  =================
  Add a New Step
  =================
  `);
    // If there's no 'questions' array property, create one
    if (!q1Data.questions1) {
      q1Data.questions1 = [];
    }
    return inquirer.prompt(
        multiQ1
    )
      .then(multiQ1Data => {
        q1Data.questions1.push(multiQ1Data);
        if (multiQ1Data.confirmQ1) {
            console.log(q1Data)
          return promptQ1(q1Data);
        } else {
          return q1Data;
        }
      });
  };
//Prompt for multiple steps in instructions


    const promptQ2 = () => {
        return inquirer.prompt(
            multiQ2
        ); 
    }
  
//Prompt for multiple collabs
const promptQ3 = q3Data => {
    console.log(`
  =================
  Add a New Step
  =================
  `);
    // If there's no 'questions' array property, create one
    if (!q3Data.questions3) {
      q3Data.questions3 = [];
    }
    return inquirer.prompt(
        multiQ3
    )
      .then(multiQ3Data => {
        q3Data.questions3.push(multiQ3Data);
        if (multiQ3Data.confirmQ3) {
            console.log(q3Data)
          return promptQ3(q3Data);
        } else {
          return q3Data;
        }
      });
  };
//Prompt for multiple collabs



// Function call to initialize app
init()
 .then(promptQ1)
 .then(promptQ2)
 .then(promptQ3)


