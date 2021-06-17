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
      type: 'list',
      message: 'Please select a license for this project: ',
      name: 'license',
      choices: [
          'GPL v3', 'GPL v2', 'MIT', 'BSD','Apache License 2.0',
      ]
    },
    {
      type: 'input',
      message: 'Project Description: ',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Installation instructions: ',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Usage information: ',
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
      message: 'Your Email address: ',
      name: 'email',
    },
    
    
  ]);

 

// Function to generate HTML contents
const generateHTML = (answers,licenseDisplay) =>
`${licenseDisplay}

<h1>${answers.title}</h1>
<!-- Table of content -->
<h2>Table of contents</h2>

* 1. [Description](#Description)
* 2. [Installation](#Installation)
* 3. [Usage](#Usage)
* 4. [Contributing](#Contributing)
* 5. [Tests](#Tests)
* 6. [Questions](#Questions) 


<br>

<h1>Description</h1>
<p>${answers.description}</p>
<h1>Installation</h1>
<p>${answers.installation}</p>
<br>
<h1>Usage</h1>
<p>${answers.usage}</p>
<br>
<h1>Contributing</h1>
<p>${answers.contributing}</p>
<br>
<h1>Tests</h1>
<p>${answers.tests}
<br>
<h1>Questions</h1>
<p><span>My Github profile: </span><a href="https://github.com/${answers.profile}" class="col-12">https://github.com/${answers.profile}</a></p>
<p><span>My Email address: </span><a href = "mailto: ${answers.email}">${answers.email}</a></p>
</p>
`

// Starting the program
const init = () => {
    promptUser().then((answers) => {
        switch (answers.license){
            case "GPL v3":
                license = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
            break;
            case "GPL v2":
                license = '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
                break;
            case "BSD 3":
                license = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
            break;
            case "BSD 2":
                license = '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
            break;
            case "MIT":
                license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
            break;
            case "Apache License 2.0":
                license = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
            break;
        }
        try {
            const html = generateHTML(answers,license);
            fs.writeFileSync('READMEHW13.MD', html);
            console.log('Your README.MD file has been successfully created');
        }
        catch (error) {
            console.log(error);
        }
    })
}

init();
    