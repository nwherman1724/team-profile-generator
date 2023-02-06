// In addition to Employee's properties and methods, Engineer will also have:

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'

const Engineer = require('../classes/engineer')

describe('Engineer', () => {
   it('has a github username', ()=> {
    const engineer = new Engineer();

    expect(new Engineer().github).toBe(this.github);
   })

   it('has a methods that returns the role', () => {
      const engineer = new Engineer();

      expect(new Engineer().getRole()).toBe('Engineer')
     })
})