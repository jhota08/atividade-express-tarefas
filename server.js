const express = require('express');

const app = express();
const tarefas =[
    {id:1, titulo:'Estudar JavaScript', concluida: false},
    {id:2, titulo:'Fazer atividade de Express', concluida:true},
    {id:3, titulo: 'Entregar trabalho', concluida: false}
]

app.get('/', (req, res) =>{
    res.send('API de Tarefas no ar')
});

app.get('/tarefas', (req, res) =>{
    res.json(tarefas)
});

app.listen(3000, () =>{
    console.log('Servidor rodando na porta 3000')

});

