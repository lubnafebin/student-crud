const db = require(`../bin/connection`)
const ObjectId = require('mongodb').ObjectId;

module.exports = {
    addStudent: (student, callback) => {
        db.get().collection('students').insertOne(student).then((data) => {
            callback(true)
        }).catch((error) => {
            callback(error)
        })
    },
    getAllStudents: () => db.get().collection('students').find().toArray(),
    updateStudent: (student, id, callback) => {
        db.get().collection('students').updateOne({ _id: new ObjectId(id) }, { $set: student }).then((data) => {
            callback(true)
        }).catch((error) => {
            callback(error)
        })
    },
    deleteStudent: (id, callback) => {
        db.get().collection('students').deleteOne({ _id: new ObjectId(id) }).then((response) => {
            callback(response.acknowledged)
        }).catch((error) => {
            callback(error)
        })

    }


}