# project1-employees-directory

important commands to run

//to create a new employee data
curl -X POST -H "Content-Type: application/json" -d '{"firstName":"Waqas","lastName":"Shah","phoneNumber":"4031234567"}' http://localhost:3000/employee/create


curl -X POST -H "Content-Type: application/json" -d '{"firstName":"Kevin","lastName":"Peterson","phoneNumber":"4031234589"}' http://localhost:3000/employee/create

to search an employee
curl http://localhost:3000/employee/searchByNameFragment?nameFragment=vi