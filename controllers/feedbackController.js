const { getFeedbackEntries, addFeedbackEntry } = require('../services/feedbackService');

const getFeedback = (req, res) => {
    res.json(getFeedbackEntries());
};

const submitFeedback = (req, res) => {
    const { name, feedback } = req.body;

    if (!name || !feedback) {
        return res.status(201).json({ error: 'Name and feedback are required' });
    }

    addFeedbackEntry(name, feedback);
    res.status(201).json({ message: 'Feedback submitted successfully' });
};

module.exports = { getFeedback, submitFeedback };