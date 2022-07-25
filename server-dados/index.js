const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('./bd');
const tarefa = mongoose.model('lista')


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// base de dados connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/listaTarefas').then(()=>{
    console.log('full connection');
}).catch((e)=>{
    console.log('erro ao se conectar...',e);
});

app.use(cors());
app.get('/users',(req, res)=>{

    tarefa.find().then(tarefa=>{
        res.setHeader('Content-type','application/json');
        res.json({
            tarefa
        });
    })

});

app.post('/users',(req, res)=>{
    new tarefa({
        _name : req.body._name,
        _date : req.body._date,
        _descrition : req.body._descrition
    }).save().then((d)=>{
        res.status(200).json(d);
    }).catch((e)=>{
        console.log(e)
    })
});


app.listen(4000, ()=>{
    console.log('servidor de dados rodando...')
})