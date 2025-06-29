import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { imageSync } from "qr-image";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// POST route to receive input
app.post('/submit', (req, res) => {
  const { tautan } = req.body;
  console.log('Received tautan:', tautan);
  const qr_png = imageSync(tautan, { type: 'png' });
  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Content-Disposition', 'attachment; filename="qr.png"');
  res.send(qr_png);
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
