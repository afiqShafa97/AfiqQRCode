import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { imageSync } from "qr-image";
import { writeFileSync } from "fs";
import { writeFile } from "fs";

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
  res.json({ message: 'Tautan diterima', tautan });
  generateQRandText(tautan);
});

function generateQRandText(textInput) {
  const qr_now = imageSync(textInput, { type: "png" });
  writeFileSync("generatedQR.png", qr_now);
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
