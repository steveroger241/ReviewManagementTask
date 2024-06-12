const express = require('express');
const rateLimit = require('express-rate-limit');
const { getFeedback, submitFeedback } = require('../controllers/feedbackController');

const router = express.Router();

function callme(req, res) {
    return res.send({ error: "Too many requests, wait for 10 seconds from now" })
}
const limiter = rateLimit({
    windowMs: 10 * 1000, // 10 seconds
    max: 1, // limit each IP to 1 request per windowMs
    handler: callme
});

router.get('/', getFeedback);
router.post('/', limiter, submitFeedback);

module.exports = router;