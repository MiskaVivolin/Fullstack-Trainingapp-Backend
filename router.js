const express = require("express")
const router = express.Router()
const userprs = require("./models")
const app = express()

router.route("/create").post((req, res) => {
    console.log('Data received:', req.body)
    const name = req.body.name
    const date = req.body.date
    const lift = req.body.lift
    const result = req.body.result

    const newuserPr = new userprs({
        name, date, lift, result
    })
    newuserPr.save()
    res.json({ok: true})
})

router.route("/get").get((req, res) => {
    
    userprs.find({  })
    .then((data) =>{
        console.log('Data: ', data)
        res.json(data)
    })
    .catch((error) => {
        console.log('Error retrieving data')
    })
})


router.route("/delete").delete((req, res) => {
    let itemid = req.params.id
    userprs.findByIdAndDelete(itemid)
    res.json({ok: true})
})

module.exports = router;