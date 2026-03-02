import express from 'express'
import bodyParser from 'body-parser'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3003;
let data;


app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.render(__dirname + '/views/joms.ejs');
})

app.get('/', (req, res) => {

    res.render('morena.ejs');
})


app.listen(port, () => {
  console.log(`Sua porta está: ${port}`)
})

