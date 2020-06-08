require('dotenv-expand')(require('dotenv').config());
var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors({origin: '*'}));
app.use('/api/media', express.static('images'));

var port = process.env.PORT ? process.env.PORT : 3000;
var hostName = process.env.HOST ? process.env.HOST : `http://localhost:${port}`

let data = [
	{id: 1, name: 'IT', author: 'Stephen King', genres: ['Horror', 'Thriller'], description: 'It is a 1986 horror novel by American author Stephen King. It was his 22nd book, and his 17th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey. "It" primarily appears in the form of Pennywise the Dancing Clown to attract its preferred prey of young children.', rate: 8, price: 20.5, image: `${hostName}/api/media/it.jpg`},
	{id: 2, name: 'The Sherlock Holmes', author: 'Arthur Conan Doyle', genres: ['Detective'], description: 'All books about Sherlock Holmes together in one!', rate: 9, price: 43.19, image: `${hostName}/api/media/sherlock-holmes.jpg`},
	{id: 3, name: 'Don Quixote', author: 'Miguel de Cervantes', genres: ['Novel'], description: 'Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper. He has become obsessed with books of chivalry, and believes their every word to be true, despite the fact that many of the events in them are clearly impossible. Quixano eventually appears to other people to have lost his mind from little sleep and food and because of so much reading.', rate: 7, price: 13.5, image: `${hostName}/api/media/don-quixote.jpg`},
	{id: 4, name: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genres: ['Tragedy'], description: 'The novel chronicles an era that Fitzgerald himself dubbed the "Jazz Age". Following the shock and chaos of World War I, American society enjoyed unprecedented levels of prosperity during the "roaring" 1920s as the economy soared. At the same time, Prohibition, the ban on the sale and manufacture of alcohol as mandated by the Eighteenth Amendment, made millionaires out of bootleggers and led to an increase in organized crime, for example the Jewish mafia.', rate: 5, price: 44, image: `${hostName}/api/media/gatsby.jpg`},
	{id: 5, name: 'Moby Dick', author: 'Herman Melville', genres: ['Novel', 'Fiction', 'Epic', 'Marine', 'Encyclopedic'], description: 'First published in 1851, Melvilles masterpiece is, in Elizabeth Hardwicks words, "the greatest novel in American literature." The saga of Captain Ahab and his monomaniacal pursuit of the white whale remains a peerless adventure story but one full of mythic grandeur, poetic majesty, and symbolic power. ', rate: 9, price: 34.8, image: `${hostName}/api/media/moby-dick.jpg`},
	{id: 6, name: 'War and Peace', author: 'Lev Tolstoy', genres: ['Novel', 'Historical'], description: 'Epic in scale, War and Peace delineates in graphic detail events leading up to Napoleons invasion of Russia, and the impact of the Napoleonic era on Tsarist society, as seen through the eyes of five Russian aristocratic families.', rate: 7, price: 23, image: `${hostName}/api/media/war-and-peace.jpg`},
	{id: 7, name: 'Hamlet ', author: 'William Shakespeare', genres: ['Tragedy'], description: 'The Tragedy of Hamlet, Prince of Denmark, or more simply Hamlet, is a tragedy by William Shakespeare, believed to have been written between 1599 and 1601. The play, set in Denmark, recounts how Prince Hamlet exacts revenge on his uncle Claudius, who has murdered Hamlets father, the King, and then taken the throne and married Gertrude, Hamlets mother.', rate: 8, price: 38, image: `${hostName}/api/media/hamlet.jpg`},
	{id: 8, name: 'The Odyssey ', author: 'Homer', genres: ['Epic', 'Poems'], description: 'The Odyssey is one of two major ancient Greek epic poems attributed to Homer. It is, in part, a sequel to the Iliad, the other work traditionally ascribed to Homer. The poem is fundamental to the modern Western canon. Indeed it is the second—the Iliad being the first—extant work of Western literature.', rate: 9, price: 15, image: `${hostName}/api/media/the-odyssey.jpg`},
	{id: 9, name: 'The Divine Comedy', author: 'Dante Alighieri', genres: ['Fantastic', 'Poem'], description: 'Belonging in the immortal company of the great works of literature, Dante Alighieris poetic masterpiece, The Divine Comedy, is a moving human drama, an unforgettable visionary journey through the infinite torment of Hell, up the arduous slopes of Purgatory, and on to the glorious realm of Paradise — the sphere of universal harmony and eternal salvation.', rate: 8, price: 8, image: `${hostName}/api/media/the-divine-comedy.jpg`},
	{id: 10, name: '1984 ', author: 'George Orwell', genres: ['Dystopian', 'Political', 'Social', 'Science'], description: 'The story follows the life of one seemingly insignificant man, Winston Smith, a civil servant assigned the task of perpetuating the regimes propaganda by falsifying records and political literature so that it appears that the government is always correct in what it says.', rate: 10, price: 99, image: `${hostName}/api/media/1984.jpg`},
	{id: 11, name: 'The Lord of the Rings', author: ' J. R. R. Tolkien', genres: ['Fantasy', 'Adventure'], description: 'The Lord of the Rings is an epic high fantasy novel written by philologist and Oxford University professor J. R. R. Tolkien. The story began as a sequel to Tolkiens earlier, less complex childrens fantasy novel The Hobbit (1937), but eventually developed into a much larger work. It was written in stages between 1937 and 1949, much of it during World War II.', rate: 10, price: 23, image: `${hostName}/api/media/the-lord-of-the-rings.jpg`},
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
