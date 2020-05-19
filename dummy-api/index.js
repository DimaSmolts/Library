require('dotenv-expand')(require('dotenv').config());
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors({origin: '*'}));
app.use('/api/media', express.static('images'));

var port = process.env.PORT ? process.env.PORT : 3000;
var hostName = process.env.HOST ? process.env.HOST : `http://localhost:${port}`

let data = [
	{id: 1, name: 'IT', author: 'Stephen King', genres: ['Horror', 'Thriller'], description: 'something', rate: 8, price: 20.5, image: `${hostName}/api/media/it.jpg`},
	{id: 2, name: 'The Sherlock Holmes', author: 'Arthur Conan Doyle', genres: ['Detective'], description: 'something', rate: 9, price: 43.19, image: `${hostName}/api/media/sherlock-holmes.jpg`},
]

app.get('/api/books', (req, res) => {
	res.send(data);
});

app.get('/api/books/:id', (req, res) => {

	let result = data.find(element => element.id == req.params.id);

	if(result) {
		res.send(result);
	} else {
		res.sendStatus(404);
	}
});

app.get('/*', (req, res) => {
	res.sendStatus(400);
})

app.listen(port, () => {
  console.log(`Dummy API is listening on port ${port}!`);
});
