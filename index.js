const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // JSON verilerini işlemek için gerekli

// Todo listesini depolamak için basit bir dizi
let todos = [];

// Tüm todo öğelerini al
app.get('/todos', (req, res) => {
    res.json(todos);
});

//TEST

// Yeni bir todo ekle
app.post('/todos', (req, res) => {
    const newTodo = {
        id: todos.length + 1, // Basit bir id oluşturma
        title: req.body.title,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// Bir todo'yu sil
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(todo => todo.id !== id);
    res.status(204).send();
});

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor!`);
});
