import express from 'express'
import bodyParser from 'body-parser'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3003;
let data;


const PORT = process.env.PORT || 3003;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.render('joms');
})

app.get('/morena', (req, res) => {

    res.render('morena.ejs');
})

app.get('/byby', (req, res) => {

    res.render('byby.ejs');
})


