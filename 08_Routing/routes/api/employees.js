const express = require('express');
const router = express.Router();
const data = {};
data.employees = require('../../data/emplyees.json');

router.route('/')
    .get((req, res) => {
        const dataEmployees = data.employees.map(employee => `${employee.firstname} ${employee.lastname}`)
        res.json(dataEmployees);
    })
    .post((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        });
    })
    .put((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        });
    })
    .delete((req, res) => {
        res.json({ "id": req.body.id });
    });

router.route('/:id')
    .get((req, res) => {
        res.json({ "id": req.params.id });
    });

module.exports = router;