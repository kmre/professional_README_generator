// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const generateReadMe = require('./src/readme-template');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile, copyFile } = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const mainQuestions = [       
      {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your README file? (Required) \n',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a Title! \n');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please enter a short description explaining the what, why, and how of your project (Required) \n' +
        'If you want to start a new paragraph just type "/n" \n',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a short description! \n');
            return false;
          }
        }
      }
];

const multiQ1 = [
      {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Does your project require special instructions for installation? \n',
        default: true
      },
      {
        type: 'input',
        name: 'installationStep',
        message: 'What are the steps required to install your project? \n' +
        'If you want to start a new step just type "/n" \n',
        when: ({ confirmInstallation }) => confirmInstallation
      },
    //   {
    //     type: 'confirm',
    //     name: 'confirmQ1',
    //     message: 'Would you like to enter another step? \n',
    //     when: ({ confirmInstallation }) => confirmInstallation,
    //     default: false
    //   }
//];

   // const multiQ2 = [
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use. (Required) \n' +
        'If you want to start a new paragraph just type "/n" \n',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter a short list of instructions and uses! \n');
            return false;
          }
        }
      },
   // ]    

  //  const multiQ3 = [
      {
        type: 'confirm',
        name: 'confirmCredits',
        message: 'Do you want to add any collaborators or did you use any third-party assets you want to credit? \n',
        default: true
      },
      {
        type: 'input',
        name: 'creditsName',
        message: 'Enter the names of your collaborators or third-party assets: \n',
        when: ({ confirmCredits }) => confirmCredits
      },
      {
        type: 'input',
        name: 'creditsGit',
        message: 'Enter the git username of your collaborators or url of third-party assets: \n',
        when: ({ confirmCredits }) => confirmCredits
      },
       /* NEED MORE TIME TO PLAY WITH THIS{
         type: 'confirm',
         name: 'confirmQ3',
         message: 'Would you like to enter another collaborator/asset? \n',
         when: ({ confirmCredits }) => confirmCredits,
         default: false
       },*/

   // ]

   // const multiQ4 = [
        {
            type: 'confirm',
            name: 'confirmContributing',
            message: 'Do you want other developers to contribute to your application? \n',
            default: true
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Add the guidelines you would like for them to follow: \n' +
            'If you want to start a new step just type "/n" \n',
            when: ({ confirmContributing }) => confirmContributing
        },
  //  ]

   // const multiQ5 = [
    {
        type: 'confirm',
        name: 'confirmFeatures',
        message: 'Do you want to add any features to you README file? \n',
        default: true
    },
    {
        type: 'input',
        name: 'features',
        message: 'Enter key features of your project: \n' +
        'If you want to start a new step just type "/n" \n',
        when: ({ confirmFeatures }) => confirmFeatures
    },
   // ]

    //const multiQ6 = [
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Do you want other developers to test your application or do you have examples of tests you have performed? \n',
        default: true
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples on how to run them: \n' +
        'If you want to start a new step just type "/n" \n',
        when: ({ confirmTests }) => confirmTests
    },
  //  ]

   // const multiQ7 = [
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'What licenses did you use? (Check all that apply)',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'Apache_2', 'Other']
        //https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>
        //future if they select other to then ask which
    },
  //  ]

    //license needs to be a list when one is picked then it's made into a badge
    //it's also added to the license section
    // {
    //     type: 'confirm',
    //     name: 'confirmLicense',
    //     message: 'Do you want to add any licences used to you README file?',
    //     default: true
    // },
    // {

  //  const multiQ8 = [
      {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username? (Required) \n',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your username! \n');
            return false;
          }
        }
      },    
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required) \n',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your email address! \n');
            return false;
          }
        }
      },
    ]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}
const init = () => {
    console.log(`
    =================
    Title and Description
    =================
    `);
    return inquirer.prompt(   
        mainQuestions
    ); 
 
}
//Only Q1 and Q3 could have multiple entries
//Prompt for multiple steps in instructions
const promptQ1 = mainData => {
    // If there's no 'questions' array property, create one
    if (!mainData.questions) {
        mainData.questions = [];
    }
    return inquirer.prompt(
        multiQ1
    )
      .then(multiData => {
        mainData.questions.push(multiData);
        // if (multiData.confirmQ1) {
        //     console.log(mainData)
        //   return promptQ1(mainData);
        // } else {
          //console.log(mainData)
          return mainData;
        // }
      })

};
// //Prompt for multiple steps in instructions

// //For instruction right now it's not multiple input 
// //want to see if spaces can be used for multiple lines
//     const promptQ2 = mainData => {
//         console.log(`
//         =================
//         Usage
//         =================
//         `);
//         if (!mainData.questions2) {
//             mainData.questions2 = [];
//           }
//         return inquirer.prompt(
//             multiQ2
//         )
//         .then((q2Data) => {
//            mainData.questions2.push(q2Data);
//            console.log(mainData)
//            return mainData;  
//         })
//     }
  
// //Prompt for multiple collabs
// const promptQ3 = mainData => {
//     console.log(mainData)
//     console.log(`
//   =================
//   Credits
//   =================
//   `);
//     // If there's no 'questions' array property, create one
//     if (!mainData.questions3) {
//         mainData.questions3 = [];
//     }
//     return inquirer.prompt(
//         multiQ3
//     )
//       .then(multiQ3Data => {
//         mainData.questions3.push(multiQ3Data);
//         if (multiQ3Data.confirmQ3) {
//             console.log(mainData)
//           return promptQ3(mainData);
//         } else {
//           console.log(mainData)
//           return mainData;
//         }
//       });
//   };
// //Prompt for multiple collabs

// const promptQ4 = mainData => {
//     console.log(`
//     =================
//     Contributing
//     =================
//     `);
//     if (!mainData.questions4) {
//         mainData.questions4 = [];
//     }
//     return inquirer.prompt(
//         multiQ4
//     )
//     .then(q4Data => {
//         mainData.questions4.push(q4Data);
//         console.log(mainData)
//         return mainData; 
//     })
// }

// const promptQ5 = mainData => {
//     console.log(`
//   =================
//   Features
//   =================
//   `);    
//   if (!mainData.questions5) {
//     mainData.questions5 = [];
// }
// return inquirer.prompt(
//     multiQ5
// )
// .then(q5Data => {
//     mainData.questions5.push(q5Data);
//     console.log(mainData)
//     return mainData; 
// })
// }

// const promptQ6 = mainData => {
//     console.log(`
//     =================
//     Teststing
//     =================
//     `);
//     if (!mainData.questions6) {
//         mainData.questions6 = [];
//     }
//     return inquirer.prompt(
//         multiQ6
//     )
//     .then(multiQ6Data => {
//         mainData.questions6.push(multiQ6Data);
//           console.log(mainData)
//           return mainData;
//       });
// }

// const promptQ7 = mainData => {
//     console.log(`
//   =================
//   License
//   =================
//   `);
//     // If there's no 'questions' array property, create one
//     if (!mainData.questions7) {
//         mainData.questions7 = [];
//     }
//     return inquirer.prompt(
//         multiQ7
//     )
//       .then(multiQ7Data => {
//         mainData.questions7.push(multiQ7Data);
//         console.log(multiQ7Data)
//         const {licenses} =  multiQ7Data
//         //later add logic for "other"
//             console.log(licenses)
//             console.log(mainData)
//           return mainData;
//       });
//   };

//   const promptQ8 = mainData => {
//     console.log(`
//   =================
//   Questions
//   =================
//   `);      
//   if (!mainData.questions8) {
//     mainData.questions8 = [];
// }
// return inquirer.prompt(
//     multiQ8
// )
// .then(q8Data => {
//     mainData.questions8.push(q8Data);
//     console.log(mainData)
//     return mainData; 
// })
// }

// Function call to initialize app
 init()
 .then(promptQ1)
 .then(mainData => {
     //console.log(mainData)
    return generateMarkdown(mainData);
 })
 .then(readMe => {
   console.log("readme: ")
    console.log(readMe)
 })
//  .then(promptQ2)
//  .then(promptQ3)
//  .then(promptQ4)
//  .then(promptQ5)
//  .then(promptQ6)
//  .then(promptQ7)
//  .then(promptQ8)
