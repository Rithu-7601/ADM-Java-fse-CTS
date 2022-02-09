"use strict"
class Employee 
{
    constructor(name, designation, year_of_experience){
        this.name = name;
        this.designation = designation;
        this.year_of_experience = year_of_experience;
    }
}

function createEmployee(name, designation, year_of_experience)
{
    var obj1 = new Employee(name, designation, year_of_experience);
    return obj1;
}

function validateObject(employee)
{
    return employee instanceof Employee;
}

function displayEmployee(name, designation, year_of_experience){
    var returnObj = createEmployee(name, designation, year_of_experience)
    var result = validateObject(returnObj);
    var date = new Date()
    
    var exp = (date.getFullYear() - 2) - Number(returnObj.year_of_experience);
    
    return `${returnObj.name} is serving the position of ${returnObj.designation} since ${exp}`;
}

console.log(displayEmployee("Jerold","Manager",15));
