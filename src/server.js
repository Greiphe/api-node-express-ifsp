// const express = require('express');
import express from 'express'
import userRouter from "./router/userRouter.js"
const Router = express.Router();
const api = express();

api.get('/', (req, res) =>{
    res.json({message: "bem-vindo"});
});

api.post('/user', (req, res) =>{
res.json({message:"metodo post"})
});

api.put('/user', (req, res) =>{
    res.json({message: "metodo put"})
})

api.delete('/user', (req, res) => {
    res.json({message: "metodo delete"})
})

api.listen(3000, ()=> {
    console.log("rodando o servidor na porta 3000")
});

api.use('/user', userRouter);