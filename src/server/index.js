const express = require('express');
const os = require('os');
const path = require('path');
const bodyParser = require('body-parser');
const database = require('./helpers/Database');

const app = express();

app.use(express.static('dist'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/api/list', (req, res) => {
	res.json({ list: 'entries' });
});

app.get('/api/user', (req, res) => {
	database.query('SELECT * FROM user;').then((result) => {
		res.json(result);
	}).catch((err) => {
		console.log(err);
		res.json(err);
	});
});

app.post('/api/user', (req, res) => {
	const { firstname, lastname } = req.body;

	database.query('INSERT INTO user SET firstname = ?, lastname = ?;', [
		firstname,
		lastname
	]).then((result) => {
		res.json(result);
	}).catch((err) => {
		console.log(err);
		res.json(err);
	});
});

app.get('*', (req, res) => {
	res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(8080, () => console.log('Listening on port 8080!'));
