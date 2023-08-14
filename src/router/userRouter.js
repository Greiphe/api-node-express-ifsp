import express, {Router} from 'express';
const router = express.Router();

router.get('/', (req, res) =>{
    res.json({message: "bem vendo a nossa api get"})
})

router.post('/', (req, res) =>{
    res.json({message: "bem vindo a nossa api metodo post"})
})

router.put('/', (req, res) =>{
    res.json({message: "bem vindo a nossa api metodo put"})
})

router.delete('/', (req, res) =>{
    res.json({message: "bem vindo a nossa api metodo delete"})
})

export default router