const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5010;

app.use(cors());

app.get('/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection','keep-alive');

    res.flushHeaders();

    const sendMessage = () => {
        const data = { date: new Date().toISOString() };
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    };

    const intervalId = setInterval(sendMessage, 2000);

    res.on('close', () => {
        clearInterval(intervalId);
        res.end();
    })
});

app.listen( PORT, ()=>{
    console.log(`El servidor esta UP en el puerto: ${PORT}`);
})
