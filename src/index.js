require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {sequelize} = require('./models')

const router = require('./routes/router');
const userRouter = require('./routes/userRouter');
const postRouter = require('./routes/postRouter');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

sequelize.authenticate().then((error)=>{
    console.log(`Database Connection has been established successfully`);
}).catch((error)=>{
    console.log('unable connect to database', error);
})

app.use('/', router);
app.use('/api', userRouter);
app.use('/post', postRouter);

app.listen(process.env.SERVER_PORT, () => {console.log('Server Running on ' + process.env.SERVER_PORT)});
