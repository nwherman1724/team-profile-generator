// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'

const Intern = require('../classes/intern')

describe('Intern', () => {
   it('', ()=> {
    const intern = new Intern();

    expect(new Intern().school).toBe(this.school);
   })
})