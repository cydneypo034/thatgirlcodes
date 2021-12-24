const express = require("express");
const router = express.Router();

const Users = require('../../models/community.js');
//image storage//
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
const upload = multer({ storage: storage });


router.get('/', (req, res) => {
    Users.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nousers: 'They are not Available'}));
});

router.get('/', (req, res) => {
    Users.find({}, (err, items) => {
        if(err) {
            console.log(err);
            res.status(500).send('An error has occured', err);
        } else {
            res.render('imagesPage', {items: items});
        }
    });
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

router.post('/', upload.single('image'), (req, res, next) => {
    const obj = {
        photo: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            type: 'image/jpg'
        }
    }
    Users.create(obj, (err, item) => {
        if(err) {
            console.log(err);
        }
        else {
            res.redirect('/');
        }
    });
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