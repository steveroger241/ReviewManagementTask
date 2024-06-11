const feedbackEntries = [];

const getFeedbackEntries = () => {
    return feedbackEntries;
};

const addFeedbackEntry = (name, feedback) => {
    feedbackEntries.push({ name, feedback });
};

module.exports = { getFeedbackEntries, addFeedbackEntry };