const express = require("express")
const router = express.Router()
const studentHelper = require(`../helpers/studenthelpers`)

//initial route
router.get(
     "/",
     async (req, res) => {
          const students = await studentHelper.getAllStudents()
          res.render("home", { students })
     }
)
router.get("/create-student", (req, res) => {
     res.render("manageStudent", { form: `Create`, action: '/create-student' })
})
router.post("/create-student", (req, res) => {
     studentHelper.addStudent(req.body, (result => {
          if (result === true) {
               res.redirect("/")
          } else {
               res.send(result)
          }
     }))
})


router.get("/update-student/:id/:name/:mobileNo/:email", (req, res) => {
     const student = req.params
     res.render("manageStudent", { student, form: `Update`, action: `/update-student/${req.params.id}` })
})
router.post("/update-student/:id", (req, res) => {
     studentHelper.updateStudent(req.body, req.params.id, (result => {
          if (result === true) {
               res.redirect("/")
          } else {
               res.send(result)
          }
     }))
})
router.get("/delete-student/:id", (req, res) => {
     studentHelper.deleteStudent(req.params.id, (result => {
          if (result === true) {
               res.redirect("/")
          } else {
               res.send(result)
          }
     }))
})



//export router
module.exports = router