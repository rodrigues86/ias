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
  }

};

