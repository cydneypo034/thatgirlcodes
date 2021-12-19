const express = require("express");
const router = express.Router();

const Resources = require('../../models/resources.js');

router.get('/', (req, res) => {
    Resources.find()
    .then(resources => res.json(resources))
    .catch(err => res.status(404).json({ noresources: 'They are not Available'}));
});

router.get('/:id', (req, res) => {
    Resources.findById(req.params.id)
    .then(resource => res.json(resource))
    .catch(err => res.status(404).json({ nolady: 'She is not Available'}));
});

router.post('/', (req, res) => {
    Resources.create(req.body)
    .then(resource => res.json({ msg: 'Resource Added!'}))
    .catch(err => res.status(404).json({ error: 'Unable to Add'}));
});

router.put('/:id', (req, res) => {
    Resources.findByIdAndUpdate(req.params.id, req.body)
    .then(resource => res.json({ msg: 'Resource Updated!'}))
    .catch(err => res.status(404).json({ error: 'Unable to Update'}));
});

router.delete('/:id', (req, res) => {
    Resources.findByIdAndRemove(req.params.id, req.body)
    .then(resource => res.json({ msg: 'Resource Deleted!'}))
    .catch(err => res.status(404).json({ error: 'Nothing to Delete'}));
});

module.exports = router;