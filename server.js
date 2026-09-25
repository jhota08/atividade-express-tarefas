const express = require('express');

const app = express();
app.use(express.json());

const tarefas =[
    {id:1, titulo:'Estudar JavaScript', concluida: false},
    {id:2, titulo:'Fazer atividade de Express', concluida:true},
    {id:3, titulo: 'Entregar trabalho', concluida: false}
]

app.get('/', (req, res) =>{
    res.send('API de Tarefas no ar')
});

app.get('/tarefas', (req, res) =>{
    if(req.query.concluida === 'true'){
        return res.json(tarefas.filter(tarefa => tarefa.concluida === true));
    
    }
    res.json(tarefas);
});

app.get('/tarefas/:id', (req, res) =>{
    const id = Number(req.params.id);
    
    for(let tarefa of tarefas){
        if(tarefa.id ===id){
            return res.json(tarefa);
        }
    }
    res.status(404).json({erro:'Tarefa não encontrada'});
   
});

app.post('/tarefas',(req,res)=>{
    const novaTarefa = {
        id: tarefas.length + 1,
        titulo: req.body.titulo,
        concluida: false
    };

    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
})

app.listen(3000, () =>{
    console.log('Servidor rodando na porta 3000')

});

