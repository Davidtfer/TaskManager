
const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 3000;

app.use(express.json());

const db = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'taskuser',
    password: process.env.DB_PASSWORD || 'taskpass123',
    database: process.env.DB_NAME || 'taskmanager',
    waitForConnections: true,
    connectionLimit: 10
});

app.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido a TaskManager',
        status: 'Backend funcionando correctamente'
    });
});

app.get('/tasks', async (req, res) => {
    try {
        const [tasks] = await db.query(
            'SELECT * FROM tasks ORDER BY id DESC'
        );

        res.json(tasks);
    } catch (error) {
        res.status(500).json({
            error: 'No se pudieron consultar las tareas'
        });
    }
});

app.post('/tasks', async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title) {
            return res.status(400).json({
                error: 'El título es obligatorio'
            });
        }

        const [result] = await db.query(
            'INSERT INTO tasks (title, description) VALUES (?, ?)',
            [title, description || null]
        );

        res.status(201).json({
            message: 'Tarea creada correctamente',
            id: result.insertId
        });
    } catch (error) {
        res.status(500).json({
            error: 'No se pudo crear la tarea'
        });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
