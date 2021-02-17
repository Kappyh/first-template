import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    return response.json(`First template tutorial`);
});
app.listen(3001, () => {
    console.info(`Server running at port 3001`)
});

