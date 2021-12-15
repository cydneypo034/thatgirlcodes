const express = require("express");
const router = express.Router();

const Ladies = require('../../models/ladies.js');
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
    Ladies.find()
    .then(ladies => res.json(ladies))
    .catch(err => res.status(404).json({ noladies: 'They are not Available'}));
});

router.get('/', (req, res) => {
    Ladies.find({}, (err, items) => {
        if(err) {
            console.log(err);
            res.status(500).send('An error has occured', err);
        } else {
            res.render('imagesPage', {items: items});
        }
    });
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

router.post('/', upload.single('image'), (req, res, next) => {
    const obj = {
        photo: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            type: 'image/png'
        }
    }
    Ladies.create(obj, (err, item) => {
        if(err) {
            console.log(err);
        }
        else {
            res.redirect('/');
        }
    });
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