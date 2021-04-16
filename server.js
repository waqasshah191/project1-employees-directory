const express = require('express')
const employees = require('./model/employeedatainMongo')

const port = process.env.PORT || 3000

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/employee/create', async (req, res) => {
    let firstName = req.body.firstName
    let lastName= req.body.lastName
    let phoneNumber= req.body.phoneNumber
    let employeeId = await employees.createEmployee(firstName, lastName, phoneNumber)
    res.send("Created employee with id " + employeeId)
})

app.get('/employee/list', async (req, res) => { 
  let employeeList = await employees.listEmployees() 
  res.send(employeeList) 
}) 

app.get('/employee/searchByNameFragment', async (req, res) => {
  console.log("Search by name fragment")
  const nameFragment = req.query.nameFragment
  console.log(nameFragment)
  const result = await employees.searchByNameFragment(nameFragment)  
  res.send(result)
}) 

app.delete('/employee/:employeeId', async (req, res) => { 
  let employeeId = req.params.employeeId
  let deleteResult = await employees.deleteEmployee(employeeId)
  res.send("Record deleted: " + deleteResult)
}) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})