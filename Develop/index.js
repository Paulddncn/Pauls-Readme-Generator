//
const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your projects name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Please provide a description of your project',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Please enter a table of contents',
            name: 'table',
        },
        {
            type: 'input',
            message: 'Please enter installation instructions',
            name: 'installation',

        },
        {
            type: 'input',
            message: 'Please provide usage instructions',
            name: 'usage',

        },
        {
            type: 'list',
            message: 'What type of license would you like to use?',
            name: 'license',
            choices: ['MIT', 'Node', 'Mozilla public license', 'Apache', 'GNU']
            , function(answers) {
                console.log(JSON.stringify(answers, null, 5));
            }
        },
        {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'Any test instructions?',
            name: 'test',
        },
        {
            type: 'input',
            message: 'Any additional questions?',
            name: 'questions',
        }, {
            type: 'input',
            message: 'What is your github user name?',
            name: 'github',
        }, {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ])
}

const generateREADME = ({ name, description, table, installation, usage, license, contribute, test, questions, github, email }) =>
    `   
## Project Tile: ${name}

        

## DESCRIPTION:

        *${description}

## TABLE:

        *${table}

## INSTALLATION:

        *${installation}

## USAGE:

        *${usage}

## LICENSE:

        ${license}

## CONTRIBUTE:

        *${contribute}

## TEST:

        *${test}

## QUESTIONS:

        *${questions}

        *https://github.com/${github}

        *${email}
        
        link to video: https://drive.google.com/file/d/1BgtTeuDS03ZpM2Nt2bIP06RHNWU4u22n/view`
    ;

const init = () => {
    promptUser()
        // Use writeFile method imported from fs.promises to use promises instead of
        // a callback function
        .then((answers) => writeFile('README.md', generateREADME(answers)))
        .then(() => console.log('Successfully wrote to '))
        .catch((err) => console.error(err));
};

init();