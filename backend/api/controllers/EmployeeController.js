/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing employees
 */

// var Employee = require('../models/Employee.js')

module.exports = {

    find: function (req, res) {
        Employee.findOrCreate(employeeDB, (err, employees) => {
            if (err) {
                return res.serverError(err);
            }
            sails.log('added: ', employees);
            return res.json(employees);
        });
    }

};

var employeeDB = {
    name: 'Rodrigues',
    department: 1,
    office: 1
}

