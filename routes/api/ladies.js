const express = require("express");
const router = express.Router();

const Ladies = require('../../models/ladies.js');

router.get('/', (req, res) => {
    Ladies.find()
    .then(ladies => res.json(ladies))
    .catch(err => res.status(404).json({ noladies: 'They are not Available'}));
});

router.get('/:id', (req, res) => {
    Ladies.findById(req.params.id)
    .then(ladies => res.json(lady))
    .catch(err => res.status(404).json({ nolady: 'She is not Available'}));
});

router.post('/', (req, res) => {
    Ladies.create(req.body)
    .then(lady => res.json({ msg: 'Lady Added!'}))
    .catch(err => res.status(404).json({ error: 'Unable to Add'}));
});

router.put('/:id', (req, res) => {
    Ladies.findByIdAndUpdate(req.params.id, req.body)
    .then(lady => res.json({msg: 'Lady updated!'}))
    .catch(err => res.status(404).json({ error: 'Unable to Update'}));
});

router.delete('/:id', (req, res) => {
    Ladies.findByIdAndDelete()
    .then(lady => res.json({ msg: 'Lady Deleted!'}))
    .catch(err => res.status(404).json({ error: 'Nothing to Delete'}));
});

module.exports = router;