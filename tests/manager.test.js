// In addition to Manager's properties and methods, Manager will also have:

// officeNumber

// getRole() // Overridden to return 'Manager'

const Manager = require('../classes/manager')

describe('Manager', () => {
   it('has an office number', ()=> {
    const manager = new Manager();

    expect(new Manager().officeNum).toBe(this.officeNum);
   })
   
   it('has a methods that returns the role', () => {
      const manager = new Manager();

      expect(new Manager().getRole()).toBe('Manager')
     })
})