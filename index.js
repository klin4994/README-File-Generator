const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => 
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Your project title: ',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Installation instructions: ',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Usage infromation: ',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Contribution guidelines: ',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Tests instructions: ',
      name: 'tests',
    },
    {
      type: 'input',
      message: 'Your Github username: ',
      name: 'profile',
    },
    {
      type: 'input',
      message: 'Your email address: ',
      name: 'email',
    },
  ]);

 


const generateHTML = (answers) =>
`<h1>Description</h1>
This time planning application allows a user to save events for time blocks (9am to 5pm) in a day. Moment.js was integrated in the script to track current time.


<h1>Link</h1>
https://klin4994.github.io/Daily-Planner/

<h1>Screenshot</h1>
<p align="center"> 
<br>
<img src="assets\Screenshot of the application.PNG" alt="Application Screenshot">
</p>

`
const init = () => {
    promptUser().then((answers) => {
        try {
            const html = generateHTML(answers);
            fs.writeFileSync('README2.MD', html);
            console.log('Your README.MD file has been successfully created');
        }
        catch (error) {
            console.log(error);
        }
    })
}

init();
    