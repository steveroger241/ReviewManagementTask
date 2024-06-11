import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'

const FeedbackForm = () => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const done = await axios.post(
            'http://localhost:8000/api/feedback',
            { name, feedback }
        );
        if (done.data.error) {
            alert(done.data.error);
        }
        setName('');
        setFeedback('');
    };

    return (
        <form onSubmit={handleSubmit} className='form-wrapper'>
            <h1 className='feedback-form-heading'>Feedback Form</h1>
            <div className='name-wrapper'>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='name' />
            </div>
            <div className='feedback-wrapper'>
                <label>Feedback:</label>
                <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} className='feedback'></textarea>
            </div>
            <button type="submit" className='submit-button'>Submit</button>
        </form>
    );
};

export default FeedbackForm;