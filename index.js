const inquirer = require('inquirer');
const fs = require('fs');

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
  {
    type: 'list',
    name: 'menu',
    message: 'Would you like to add another employee?',
    choices: ['Engineer', 'Intern', 'Finished Building Team']
  },
];

const generateHTML = ({ name, id, email, officeNum, github}) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
      <title>Document</title>
  </head>
  <body>
      <header>
          <h1 id="title">Title</h1>
      </header>
  
      <main>
  <!-- this section will have tiles that contain the employee information -->
  
          <div class="card" style="width: 18rem;">
              <div class="card-body title-color">
                  <h4>${name}</h4>
                  <h5>Employee Type</h5>
              </div>
              <div style="width: 18rem;">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">${id}:</li>
                    <li class="list-group-item">${email}:</li>
                    <li class="list-group-item">${officeNum}</li>
                  </ul>
              </div>
          </div>
  
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
        // if( answers = Manager) {
        //   mangerquest()
        // } else if (answers = intern)
        const htmlContent = generateHTML(answers);
    
        fs.writeFile('index.html', htmlContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
      });

}

init();