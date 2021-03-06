const express = require('express');
const connectDb = require('./config/db');
const app = express();

// Connect Database
connectDb();

// Init Middleware
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5005;

app.get('/', (req, res) => res.send('API Running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));

app.listen(PORT, (_) => console.log(`Server started on port ${PORT}`));
