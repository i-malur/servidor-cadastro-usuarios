/*

    O que é necessário para a rota?
        1. tipo (get, put, patch, delete, post);
        2. endereço (ex: meuendereco.com/*produtos*)
*/

/* Rota que recebe os dados da requisição lista/pega/exibe uma resposta */
/* O navegador sempre tenta acessar a requisição pelo método GET */


import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors()) // liberando o acesso para qualquer front-end se concectar com o servidor.
                // em ambientes empresariais, colocamos em cors() o endereço do front-end para evitar acessos não autorizados.


app.post('/usuarios', async (req, res) => {
    await prisma.User.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    console.log(req.body)
    res.status(201).json(req.body) // ok e criado

})

app.get('/usuarios', async (req, res) => {

    console.log(req)

    const users = await prisma.User.findMany({
        where: req.query
    })

    res.status(200).json(users)
})

app.put('/usuarios/:id', async (req, res) => {

    await prisma.User.update({
        where: {
            id: req.params.id
        },

        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    console.log(req.body)

    res.status(201).json(req.body) // ok e criado

})

app.delete('/usuarios/:id', async(req, res)=>{
    await prisma.User.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({message: 'Usuário excluído!'})

})

app.listen(3001)

/* 
    API usuários
    - criar usuários
    - listar usuários
    - editar um usuário
    - deletar um usuário

*/
