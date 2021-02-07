const inquirer = require('inquirer');
const fs = require('fs');
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What languages do you know?',
      name: 'languages',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication?',
      name: 'communication',
    },
  ])
  // const generateHTML = (answer) =>
// Doctype......rest of HTML code...


// check screenshot example


const html = `<h1>Description</h1>
This time planning application allows a user to save events for time blocks (9am to 5pm) in a day. Moment.js was integrated in the script to track current time.


<h1>Link</h1>
https://klin4994.github.io/Daily-Planner/

<h1>Screenshot</h1>
<p align="center"> 
<br>
<img src="assets\Screenshot of the application.PNG" alt="Application Screenshot">
</p>

`

  
    fs.writeFileSync('log.MD',html)
    