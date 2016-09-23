import bodyParser from 'body-parser';
import express from 'express';

// App configuration.
const app = express();
const port = process.env.PORT || 8080;
// const csrfProtection = csrf({ cookie: true });
const router = express.Router();

// Add your routes here
// import SampleRoutes from './routes/sample';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define your routes here
router.get('/', (req, res) => { res.status(200).send(); });
router.post('/sample/helloWorld/', SampleRoutes.helloWorld);

app.use('/api', router);

app.listen(port);

export default app;
