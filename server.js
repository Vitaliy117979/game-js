const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Налаштування шляху для статичних файлів
app.use(express.static(path.join(__dirname, 'public')));

// Налаштування MIME-типу для файлів JavaScript
app.use((req, res, next) => {
    if (req.url.endsWith('.js')) {
        res.set('Content-Type', 'application/javascript');
    }
    next();
});

// Відкриття index.html за замовчуванням

app.listen(PORT, () => {
    console.log(`Сервер працює на http://localhost:${PORT}`);
});
