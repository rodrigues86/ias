/**
 * Employee.js
 *
 * @description :: Model Employees
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      required: true
    },
    department: {
      collection: 'department',
      via: 'departmentList',
      required: true
    },
    office: {
      collection: 'office',
      via: 'officeList',
      required: true
    },
    note: 'string',
    category: {
      type: 'string',
      enum: ['cm', 'in', 'm', 'mm'],
      defaultsTo: 'cm',
      required: true
    }
  },

  create: create(employeeDB).exec((err, employee) => {
    if (err) { return res.serverError(err); }
    sails.log('Finn\'s id is:', finn.id);
    return res.ok();
  }),

  find: find(employeeDB).exec((err, employee) => {
    if (err) {
      return res.serverError(err);
    }
    sails.log('Wow, there are %d users named Finn.  Check it out:', usersNamedFinn.length, usersNamedFinn);
    return res.json(employee);
  }),
  findAll: find().exec((err, employees) => {
    if (err) {
      return res.serverError(err);
    }
    sails.log('Wow, there are %d users named Finn.  Check it out:', usersNamedFinn.length, usersNamedFinn);
    return res.json(employees);
  })

};

var employeeDB = {
  name: 'Rodrigues',
  department: 1,
  office: 1,
}

