const express = require('express');
const path = require('path');

const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 80;

console.log('' + new Date().toLocaleTimeString() + ': port', port);

app.listen(port, () => console.log(`Server running on ${port}`));