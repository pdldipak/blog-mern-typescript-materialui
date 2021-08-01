const uploadRouter = require('express').Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, 'tree1.jpg');
  },
});

// eslint-disable-next-line object-shorthand
const upload = multer({ storage: storage });

uploadRouter.post('/', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

module.exports = uploadRouter;
