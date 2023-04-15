import express from 'express'
import cors from 'cors'
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import router from './routes/index.js';
import router2 from './routes/users.js';

import "dotenv/config.js";

// const options = {
//   definition: {
//     openapi: '3.0.0',
//     info: {
//       title: 'My API',
//       version: '1.0.0',
//     },
//   },
//   apis: ['app.js'],
// };
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'My API documentation'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['./routes/*.js'] // Path to the API routes
};

const app = express()
app.use(express.json());

const swaggerSpec = swaggerJSDoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const healthTest = (req, res) => {
    res.status(200);
    res.send('API is running.');
  };

app.use(cors());

app.all('/', healthTest);
app.use(router);


app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal server error';
  res.status(status).json({ ...err, message });
});


const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})