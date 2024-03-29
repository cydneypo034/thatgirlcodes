const express = require("express");
const router = express.Router();

const Users = require('../../models/community.js');

router.get('/', (req, res) => {
    Users.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nousers: 'No Users'}));
});

router.get('/:id', (req, res) => {
    Users.findById(req.params.id)
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nousers: 'No User'}));
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
    Users.findByIdAndRemove(req.params.id, req.body)
    .then(users => res.json({ msg: 'User Deleted!'}))
    .catch(err => res.status(404).json({ error: 'Nothing to Delete'}));
});

module.exports = router;