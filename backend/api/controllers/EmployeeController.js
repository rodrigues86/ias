/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing employees
 */

module.exports = {

    show: (req, res) => {
        return res.send(Employee.find());
    },

    create: (req, res) => {
        return res.send(Employee.create());
    }
	
};

