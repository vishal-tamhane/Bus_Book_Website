import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Create an Express app instance
const app = express();

// Get the __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set EJS as the view engine
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Ensure the views directory is set

// Add a basic route to test the setup
app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.get('/signup', (req, res) => {
  res.render('signup', (err) => {
    if (err) {
      console.error('Error rendering signup page:', err);
      res.status(500).send('Error rendering signup page');
    }
  });
});

app.get('/login', (req, res) => {
  res.render('login', (err) => {
    if (err) {
      console.error('Error rendering login page:', err);
      res.status(500).send('Error rendering login page');
    }
  });
});

app.get('/bookt', (req, res) => {
  res.render('bookt', (err) => {
    if (err) {
      console.error('Error rendering bookt page:', err);
      res.status(500).send('Error rendering bookt page');
    }
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});