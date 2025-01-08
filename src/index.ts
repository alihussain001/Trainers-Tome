import express, { Request, Response} from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send("your application is running");
} );


app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}')
});