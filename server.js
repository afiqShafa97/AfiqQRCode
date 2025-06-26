import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// Needed to work with __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to serve static files (HTML/JS)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON body
app.use(express.json());

// POST route to receive input
app.post('/submit', (req, res) => {
  const userInput = req.body.input;
  console.log('Received from frontend:', userInput);
  res.json({ message: 'Data received!', yourInput: userInput });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
