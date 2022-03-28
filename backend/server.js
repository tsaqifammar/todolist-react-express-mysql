const express = require('express');

const cors = require('cors');

const app = express();

const logger = require('./middlewares/logger');

app.use(express.json());
app.use(cors());
app.use(logger);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
