const inquirer = require('inquirer');
const fs = require('fs');
//const Employee = require('./classes/employee');
const Manager = require('./classes/manager')
const Engineer = require('./classes/engineer');
const Intern = require('./classes/intern')

const devTeam = [];

const questions = [
    {
    type: 'input',
    name: 'name',
    message: 'Enter the team manager\'s name:',
  },
  {
    type: 'input',
    name: 'id',
    message: 'Enter the team manager\'s id number:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter the team manager\'s email address:',
  },
  {
    type: 'input',
    name: 'officeNum',
    message: 'Enter the team manager\'s office number?',
  },
];

const employeeTypeQs = [
  {
    type: 'list',
    name: 'menu',
    message: 'Would you like to add another employee?',
    choices: ['Engineer', 'Intern', 'Finished Building Team']
  },
]

const engQuestions = [
  {
  type: 'input',
  name: 'name',
  message: 'Enter the engineer\'s name:',
},
{
  type: 'input',
  name: 'id',
  message: 'Enter the engineer\'s id number:',
},
{
  type: 'input',
  name: 'email',
  message: 'Enter the engineer\'s email address:',
},
{
  type: 'input',
  name: 'github',
  message: 'Enter the engineer\'s Github username:'
},
];

const intQuestions = [
  {
  type: 'input',
  name: 'name',
  message: 'Enter the intern\'s name:',
},
{
  type: 'input',
  name: 'id',
  message: 'Enter the intern\'s id number:',
},
{
  type: 'input',
  name: 'email',
  message: 'Enter the intern\'s email address:',
},
{
  type: 'input',
  name: 'school',
  message: 'Enter the intern\'s school:'
},
];

function engineerQuestions(engQuestions) {
  inquirer
      .prompt(engQuestions)
          .then((answers) => {
              createEngObj(answers);
              nextQuestion();
          })
}

function internQuestions(intQuestions) {
  inquirer
      .prompt(intQuestions)
          .then((answers) => {
              createIntObj(answers);
              nextQuestion();
          })
}

function createManObj(answers) {

  const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNum)

  devTeam.push(manager);
  
}

function createEngObj(answers) {

  const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)

  devTeam.push(engineer);
  
}

function createIntObj(answers) {

  const intern = new Intern(answers.name, answers.id, answers.email, answers.school)

  devTeam.push(intern);
  
}

function nextQuestion() {
  inquirer
    .prompt(employeeTypeQs)
      .then(result => {
        if( result.menu === 'Engineer') {
          engineerQuestions(engQuestions);
        } else if (result.menu === 'Intern') {
          internQuestions(intQuestions);
        } else if(result.menu === 'Finished Building Team') {
          console.log('Team Finished!');

          const htmlContent = generateHTML(devTeam);

          fs.writeFile('index.html', htmlContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
        } 
        
      })
}

function makeCard(devTeam) {
 
 template = ``;

  devTeam.forEach(element => {
    if(element.getRole() === 'Manager'){
    template +=
    ` <div class="card" style="width: 18rem;">
        <div class="card-body title-color">
            <h4>${element.name}</h4>
            <h5>${element.getRole()}</h5>
        </div>
        <div style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${element.id}</li>
              <li class="list-group-item">Email: ${element.email}</li>
              <li class="list-group-item">Office Number: ${element.officeNum}</li>
            </ul>
        </div>
      </div>`
    } else if(element.getRole() === 'Engineer') {
      template +=
    ` <div class="card" style="width: 18rem;">
        <div class="card-body title-color">
            <h4>${element.name}</h4>
            <h5>${element.getRole()}</h5>
        </div>
        <div style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${element.id}</li>
              <li class="list-group-item">Email: ${element.email}</li>
              <li class="list-group-item">Github Username: ${element.github}</li>
            </ul>
        </div>
      </div>`
    } else if(element.getRole() === 'Intern'){
      template +=
    ` <div class="card" style="width: 18rem;">
        <div class="card-body title-color">
            <h4>${element.name}</h4>
            <h5>${element.getRole()}</h5>
        </div>
        <div style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${element.id}</li>
              <li class="list-group-item">Email: ${element.email}</li>
              <li class="list-group-item">School: ${element.school}</li>
            </ul>
        </div>
      </div>`
    }
  });
  return template

}

const generateHTML = (devTeam) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <style>
        body {
          background: #8e9eab;  /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);  /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #eef2f3, #8e9eab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      
        }
        
        header {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 150px;
            color: white;
            background-color: #0093E9;
            background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
        }
        
        main {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 50px;
            height: 75vh;
            background: #8e9eab;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #eef2f3, #8e9eab); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        
        }
        
        .card {
        border-radius: 10px;
        margin: 10px;
        }
        
        .card-body {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        }
        
        .title-color {
            background-color: #0093E9;
            color: white;
            margin: -1px;
            background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
        }
        
        .list-group {
            margin:10px;
            border: solid gray;
        }
        
        footer {
          position: fixed;
          padding-top: 5px;
          left: 0;
          bottom: 0;
          width: 100%;
          background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);
          color: white;
          text-align: center;
        }
      </style>
      <title>My Team</title>
  </head>
  <body>
      <header>
          <h1 id="title">My Team</h1>
      </header>
  
      <main>
  <!-- this section will have tiles that contain the employee information -->
  
    ${makeCard(devTeam)}
  
      </main>
  
      <footer>
          <p>Developed by Nick Herman | Github: <a href="https://github.com/nwherman1724">https://github.com/nwherman1724</a></p>
      </footer>
      
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
  
  </body>
  </html>`

function init() {

  // asks questions in the terminal to receive input from the user
  inquirer
    .prompt(questions)
      .then((answers) => {
        createManObj(answers);
        nextQuestion();
      });

}

init();