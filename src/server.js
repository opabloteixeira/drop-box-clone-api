const express  = require('express');
const mongoose = require('mongoose');
const path     = require('path');
const app      = express();
const cors     = require('cors'); //determina quem pode acessar a api

app.use(cors()); //todos podem acessar 

//socket.io real time
const server   = require('http').Server(app);
const io       = require('socket.io')(server);
io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    })
})

mongoose.connect('mongodb+srv://pablo:2236@cluster0-fvkql.mongodb.net/base?retryWrites=true',
    {
        useNewUrlParser: true,
    }
);



app.use((req, res, next) => {
    req.io = io;
    return next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes'));

app.use('/files', express.static(path.resolve(__dirname, '..' , 'tmp')));

server.listen(3333);