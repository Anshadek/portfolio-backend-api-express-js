const express = require('express');
const sequelize = require('./config/db');
const errorHandler = require("./middlewares/errorHandler");
require('dotenv').config();

// Import models
const AboutInfo = require('./models/AboutInfo');
const Education = require('./models/Education');
// const Experience = require('./models/Experience');
// const ExperienceResponsibility = require('./models/ExperienceResponsibility');
// const PortfolioCategory = require('./models/PortfolioCategory');
// const Project = require('./models/Project');
// const ProjectImage = require('./models/ProjectImage');
// const ContactSetting = require('./models/ContactSetting');
// const Message = require('./models/Message');
const User = require('./models/User');

const app = express();
app.use(express.json());

app.use('/api/about-info', require('./routes/aboutInfoRoutes'));
app.use('/api/educations', require('./routes/educationRoutes'));
app.use('/api/experiences', require('./routes/experienceRoutes'));
app.use('/api/categories', require('./routes/portfolioCategoryRoutes'));
// app.use('/api/contact-settings', require('./routes/contactSettingRoutes'));
// app.use('/api/educations', require('./routes/educationRoutes'));
// app.use('/api/experiences', require('./routes/experienceRoutes'));
// app.use('/api/responsibilities', require('./routes/experienceResponsibilityRoutes'));
// app.use('/api/messages', require('./routes/messageRoutes'));
// app.use('/api/categories', require('./routes/portfolioCategoryRoutes'));
// app.use('/api/projects', require('./routes/projectRoutes'));
// app.use('/api/project-images', require('./routes/projectImageRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));

// Global error handler should always be **after routes**
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
