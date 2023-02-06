// The first class is an Employee parent class with the following properties and methods:

// name

// id

// email

// getName()

// getId()

// getEmail()

// getRole() // Returns 'Employee'

const Employee = require('../classes/employee')

describe('Employee', () => {
   it('has a name, id, and email property', () => {
    const employee = new Employee();

    expect(new Employee().name).toBe(this.name);
    expect(new Employee().id).toBe(this.id);
    expect(new Employee().email).toBe(this.email);
    
   });

   it('has a methods that return the name, id, email, and role', () => {
    const employee = new Employee();

    expect(new Employee().getName()).toBe(this.name)
    expect(new Employee().getId()).toBe(this.id)
    expect(new Employee().getEmail()).toBe(this.email)
    expect(new Employee().getRole()).toBe('Employee')
   })
})