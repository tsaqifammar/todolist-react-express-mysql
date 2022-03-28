const express = require('express');

const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
