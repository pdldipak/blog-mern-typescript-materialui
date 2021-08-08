const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

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

// static path to public
app.use('/images', express.static(path.join(__dirname, '/images')));

// mongoose

mongoose
  .connect(process.env.MONGODB_URL || process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(console.log('Connected to DB'))
  // eslint-disable-next-line arrow-parens
  .catch(err => console.log(err));

app.get('/blog', (req, res) => {
  res.json({ message: 'MERN blog post' });
});

app.use('/blog/auth', authRoute);
app.use('/blog/users', userRouter);
app.use('/blog/posts', postRouter);
app.use('/blog/categories', categoryRoute);
app.use('/blog/upload', uploadRouter);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
