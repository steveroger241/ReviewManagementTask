import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'

const FeedbackList = () => {
    const [feedbackEntries, setFeedbackEntries] = useState([]);

    const callme = async () => {
        const response = await axios.get(
            'http://localhost:8000/api/feedback'
        );
        setFeedbackEntries(response.data);
    }

    useEffect(()=>{
        callme();
    }, []);

    return (
        <div className='review-wrapper'>
            <h1 className='feedback-entries-heading'>Feedbacks</h1>
            <button onClick={callme} className='refresh-button'>Refresh</button>
            <ul className='ul'>
                {feedbackEntries.map((entry, index) => (
                    <li key={index} className='li'>
                        <strong>{entry.name}</strong> <br />
                        {entry.feedback}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedbackList;