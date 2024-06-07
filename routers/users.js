const express = require(`express`);
const router = express.Router();

router.get(`/`, (req, res) => {
    res.send(`User List`);
})

router.get(`/new`, (req, res) => {
    res.send(`User New Form`);
})

router.post(`/`, (req, res) => {
    res.send(`Create User`);
})

router
    .route(`/:id`)
    .get((req, res) => {
        res.send(`Get user Get with ID ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`Update user Get with ID ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`Delete user Get with ID ${req.params.id}`);
    })

router.param(`id`, (req, res, next, id) => {
    console.log(id);
})

module.exports = router;