// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const EditorPrompt = require('inquirer/lib/prompts/editor');
const generateReadMe = require('./src/readme-template');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile, copyFile } = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const mainQuestions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your README file? (Required) \n',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a Title! \n');
                return false;
            }
        }
    },
    {
        type: 'editor',
        /*type: 'input',*/
        name: 'description',
        message: 'Please enter a short description explaining the what, why, and how of your project (Required) \n',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a short description! \n');
                return false;
            }
        }
    },
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
    {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Does your project require special instructions for installation? \n',
        default: true
    },
    {
        type: 'editor',
        name: 'installationStep',
        message: 'What are the steps required to install your project? \n',
        when: ({ confirmInstallation }) => confirmInstallation,
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Answer can not be left blank! \n');
                return false;
            }
        }
    },
    {
        type: 'editor',
        name: 'usage',
        message: 'Please provide instructions and examples for use. (Required) \n',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a short list of instructions and uses! \n');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Do you want other developers to contribute to your application? \n',
        default: true
    },
    {
        type: 'editor',
        name: 'contributing',
        message: 'Add the guidelines you would like for them to follow: \n',
        when: ({ confirmContributing }) => confirmContributing,
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Answer can not be left blank! \n');
                return false;
            }
        }
    },

    {
        type: 'confirm',
        name: 'confirmFeatures',
        message: 'Do you want to add any features to you README file? \n',
        default: true
    },
    {
        type: 'editor',
        name: 'features',
        message: 'Enter key features of your project: \n',
        when: ({ confirmFeatures }) => confirmFeatures,
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Answer can not be left blank! \n');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Do you want other developers to test your application or do you have examples of tests you have performed? \n',
        default: true
    },
    {
        type: 'editor',
        name: 'tests',
        message: 'Provide examples on how to run them: \n',
        when: ({ confirmTests }) => confirmTests,
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Answer can not be left blank! \n');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'What licenses did you use? (Check all that apply)',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'Apache_2', 'Other']
        //https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>
        //future if they select other to then ask which
    },
];

const multiQ1 = [
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
    {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Does your project require special instructions for installation? \n',
        default: true
    },
    {
        type: 'editor',
        name: 'installationStep',
        message: 'What are the steps required to install your project? \n',
        when: ({ confirmInstallation }) => confirmInstallation,
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Answer can not be left blank! \n');
                return false;
            }
        }
    },
    {
        type: 'editor',
        name: 'usage',
        message: 'Please provide instructions and examples for use. (Required) \n',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a short list of instructions and uses! \n');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Do you want other developers to contribute to your application? \n',
        default: true
    },
    {
        type: 'editor',
        name: 'contributing',
        message: 'Add the guidelines you would like for them to follow: \n',
        when: ({ confirmContributing }) => confirmContributing,
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Answer can not be left blank! \n');
                return false;
            }
        }
    },

    {
        type: 'confirm',
        name: 'confirmFeatures',
        message: 'Do you want to add any features to you README file? \n',
        default: true
    },
    {
        type: 'editor',
        name: 'features',
        message: 'Enter key features of your project: \n',
        when: ({ confirmFeatures }) => confirmFeatures,
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Answer can not be left blank! \n');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Do you want other developers to test your application or do you have examples of tests you have performed? \n',
        default: true
    },
    {
        type: 'editor',
        name: 'tests',
        message: 'Provide examples on how to run them: \n',
        when: ({ confirmTests }) => confirmTests,
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Answer can not be left blank! \n');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'licenses',
        message: 'What licenses did you use? (Check all that apply)',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'Apache_2', 'Other']
        //https://img.shields.io/static/v1?label=<LABEL>&message=<MESSAGE>&color=<COLOR>
        //future if they select other to then ask which
    },
]
//questions for collaborators
const multiQ2 = [
    {
        type: 'input',
        name: 'creditsName',
        message: 'Enter the names of your collaborators or third-party assets: \n',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Answer can not be left blank! \n');
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'creditsGit',
        message: 'Enter the git username of your collaborators or url of third-party assets:  \n',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Answer can not be left blank! \n');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmMore',
        message: 'Do you want to add another collabolator? \n',
        default: true
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

const init = () => {
    console.log(`
    =================
    Main Questions
    =================
    `);
    return inquirer.prompt(
        mainQuestions
    );
}

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
            return mainData;
        })
};

//Prompt for multiple collaborators
const promptQ2 = mainData => {
    if (!mainData.credits) {
        mainData.credits = [];
    }
    return inquirer.prompt(
        [
            {
                type: 'confirm',
                name: 'confirmCredits',
                message: 'Do you want to add any collaborators or did you use any third-party assets you want to credit? \n',
            }
        ])
        .then(confirm => {
                // If there's no 'questions' array property, create one

            if (confirm.confirmCredits) {
                console.log(mainData)
                console.log("-------")
                return collabs(multiQ2, mainData);
            }
            else {console.log("exitloop")
            return mainData
            }
        })
}

//runs fn to ask for collaborator name and url then it asks if they want to add another name/url until they choose no
const collabs = (questions, mainData) => {
    return inquirer.prompt(
        questions
    )
        .then(multiData => {
            console.log(multiData)
            console.log("--------------- multi")
            mainData.credits.push(multiData)
            if (multiData.confirmMore) {
               return collabs(questions, mainData)
            }
            else {
                console.log(mainData.credits)
                return mainData;
            }
        });
};

// Function call to initialize app
init()
    .then(promptQ2)
    // .then(mainData => {
    //     console.log(mainData)
    //     console.log("------Q2")
    //     return promptQ2(mainData)
    // })
    .then(mainData => {
        console.log("-------last")
        console.log(mainData)
        //return generateMarkdown(mainData);
    })
 /*.then(readMe => {
 console.log("readme: ")
  console.log(readMe)
})*/

