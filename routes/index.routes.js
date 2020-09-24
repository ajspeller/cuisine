const express = require('express');
const router = express.Router();

const userRoutes = require('./user.routes');
const subscriberRoutes = require('./subscrber.routes');
const courseRoutes = require('./course.routes');
const errorRoutes = require('./error.routes');
const homeRoutes = require('./home.routes');

router.use('/users', userRoutes);
router.use('/subscrber', subscriberRoutes);
router.use('/course', courseRoutes);
router.use('/', homeRoutes);
router.use('/', errorRoutes);

module.exports = router;
