const express = require('express');
const sequelize = require('./config/db');
const errorHandler = require("./middlewares/errorHandler");
require('dotenv').config();
const cors = require("cors");

const app = express();

// Enable CORS for all routes
app.use(cors());
const User = require('./models/User');

app.use(express.json());

app.use('/api/about-info', require('./routes/aboutInfoRoutes'));
app.use('/api/education', require('./routes/educationRoutes'));
app.use('/api/experience', require('./routes/experienceRoutes'));
app.use('/api/category', require('./routes/portfolioCategoryRoutes'));
app.use('/api/project', require('./routes/projectRoutes'));
app.use('/api/project-image', require('./routes/projectImageRoutes'));
app.use('/api/contact-settings', require('./routes/contactSettingRoutes'));

app.use(errorHandler);

// Test DB connection
sequelize.authenticate()
  .then(() => console.log('✅ Database connected...'))
  .catch(err => console.log('❌ Error: ' + err));

// Sync models with DB
sequelize.sync({ alter: true }) // use { force: true } only in development (drops table)
  .then(() => console.log('✅ Models synced with database'))
  .catch(err => console.log('❌ Error syncing models: ' + err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
