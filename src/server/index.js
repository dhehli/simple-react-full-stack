const express = require('express');
const os = require('os');
const path = require('path');

const app = express();

app.use(express.static('dist'));

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/api/list', (req, res) => {
	res.json({ list: 'entries' });
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(8080, () => console.log('Listening on port 8080!'));
