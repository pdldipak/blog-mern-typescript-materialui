/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-parens */
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

dotenv.config();

// routes
const authRoute = require('./routes/authRoute');
const userRouter = require('./routes/userRoute');
const postRouter = require('./routes/postRoute');
const categoryRoute = require('./routes/categoriesRoute');
const uploadRouter = require('./routes/uploadRoute');

const app = express();

const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// mongoose
mongoose
  .connect(process.env.MONGODB_URL || process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(console.log('Connected to DB'))
  .catch(err => console.log(err));

app.use('/blog/auth', authRoute);
app.use('/blog/users', userRouter);
app.use('/blog/posts', postRouter);
app.use('/blog/categories', categoryRoute);
app.use('/blog/upload', uploadRouter);

// to render static file inside build folder

app.use('/images', express.static(path.join(__dirname, '/images')));
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/client/build/index.html')),
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
  next();
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
