const { ObjectId } = require('mongodb');
const db = require("./db")

async function getEmployeesCollection() {
    return db.getCollection("employees")
}

async function createEmployee(firstName, lastName, phoneNumber) {
    let employeeToCreate = {
        firstName,
        lastName,
        phoneNumber
    }
    let employeesCollection = await getEmployeesCollection()
    let insertResult = await employeesCollection.insertOne(employeeToCreate)
    return insertResult.ops[0]._id
}

async function listEmployees() {
    let employeesCollection = await getEmployeesCollection()
    let cursor = employeesCollection.find({})
    return cursor.toArray()
}

async function searchByNameFragment(nameFragment) {
    let matchNameFragment = new RegExp(`.*${nameFragment}.*`, 'i')
    const collection = await getEmployeesCollection()
    let cursor = collection.find({ "firstName": matchNameFragment })
    const response = await cursor.toArray()
    return response
} 
  
async function deleteEmployee(employeeId) {
    const collection = await getEmployeesCollection()
    return collection.deleteOne({_id: ObjectId(employeeId)})
}

module.exports = {
    createEmployee,
    listEmployees,
    searchByNameFragment,
    deleteEmployee
}