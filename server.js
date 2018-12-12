const express = require('express');
const cors = require('cors');
const mockStories = require('./src/utils/mockStories');
const app = express();

app.use(cors());

app.set('port', process.env.PORT || 3010);

app.get('/', (request, response) => {
  response.status(200).json(mockStories);
});

app.listen(app.get('port'), () => {
  console.log(`App is running on ${app.get('port')}`);
});
