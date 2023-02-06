// In addition to Employee's properties and methods, Intern will also have:

// school

// getSchool()

// getRole() // Overridden to return 'Intern'

const Intern = require('../classes/intern')

describe('Intern', () => {
   it('has a school', ()=> {
    const intern = new Intern();

    expect(new Intern().school).toBe(this.school);
   })

   it('has a methods that returns the role', () => {
      const intern = new Intern();

      expect(new Intern().getRole()).toBe('Intern')
     })
})