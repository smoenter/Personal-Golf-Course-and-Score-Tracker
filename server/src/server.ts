const forceDatabaseRefresh = false;

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import sequelize from './config/connection.js';
import routes from './routes/index.js';
// import path from 'node:path';

const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(express.static('../Client/dist'));

app.use(express.json());
app.use(routes);

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../Client/dist')));
//   app.get('*', (_req: Request, res: Response) => {
//     res.sendFile(path.join(__dirname, '../Client/dist/index.html'));
//   });
// }

sequelize.sync({force: forceDatabaseRefresh}).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port http://localhost:${PORT}`);
  });
});
