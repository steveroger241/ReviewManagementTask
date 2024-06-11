const express = require('express');
const rateLimit = require('express-rate-limit');
const { getFeedback, submitFeedback } = require('../controllers/feedbackController');

const router = express.Router();

const limiter = rateLimit({
    windowMs: 10 * 1000, // 10 seconds
    max: 1, // limit each IP to 1 request per windowMs
    message: {
        error: 'Too many feedback submissions from this IP, please try again after 10 seconds.'
    }
});

router.get('/', getFeedback);
router.post('/', limiter, submitFeedback);

module.exports = router;