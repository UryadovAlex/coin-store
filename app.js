require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const userRouter = require('./api/users/user.router');
const coinRouter = require('./api/coins/coin.router');
const cartRouter = require('./api/cart/cart.router');

app.use(cors({
    origin: '*'
}));
app.use(express.json());
app.use('/uploads', express.static('uploads'))

app.use('/users', userRouter);
app.use('/coins', coinRouter);
app.use('/cart', cartRouter);

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});


app.listen(process.env.APP_PORT, () => console.log(`Server listen on ${process.env.APP_PORT}`));