import express, {NextFunction, Request, Response, urlencoded } from 'express';
import usersRouter from './router/users.router';
import * as path from 'path'
import 'dotenv/config'

// on instancie express
const app = express();
const port = process.env.PORT

// middleware
app.use(express.json());
app.use(urlencoded());
app.use(usersRouter);

// mise en place bootstrap
app.use('/bootstrap', express.static(path.join(process.cwd(), 'node_modules/bootstrap/dist/css')));

// mise en place du dossier public
app.use('/public', express.static(path.join(process.cwd(), 'src/public')));

// configuration de ejs
app.set('views', path.join(process.cwd(), 'src/view'));
app.set('view engine', 'ejs');

// on lance le serveur
app.listen(port, () => {
    console.log(`serveur lancé sur le port ${port}`);
})


