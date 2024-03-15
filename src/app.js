require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbConnetion } = require('./database/config');
const authRouter = require('./router/authRouter');
const userRouter = require('./router/userRouter');
const productRouter = require('./router/productRouter');
const categoryRouter = require('./router/categoryRouter');

const app = express();

app.use(express.json());

app.use(cors());

dbConnetion();

app.use('/api', authRouter);
app.use('/api', userRouter);
app.use('/api', productRouter);
app.use('/api', categoryRouter);

app.listen(process.env.PORT, () => {
	console.log(`Server on port ${process.env.PORT}`);
});
