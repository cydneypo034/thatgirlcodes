const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    Users.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nousers: 'They are not Available'}));
});

router.get('/:id', (req, res) => {
    Users.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nousers: 'They are not Available'}));
});

router.post('/', (req, res) => {
    Users.create(req.body)
    .then(users => res.json({ msg: 'User Added!'}))
    .catch(err => res.status(404).json({ error: 'Unable to Add'}));
});

router.put('/:id', (req, res) => {
    Users.findByIdAndUpdate(req.params.id, req.body)
    .then(users => res.json({msg: 'User updated!'}))
    .catch(err => res.status(404).json({ error: 'Unable to Update'}));
});

router.delete('/:id', (req, res) => {
    Users.findByIdAndDelete()
    .then(users => res.json({ msg: 'User Deleted!'}))
    .catch(err => res.status(404).json({ error: 'Nothing to Delete'}));
});

module.exports = router;