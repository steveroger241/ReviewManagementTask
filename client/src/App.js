import React, { useEffect, useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import './App.css';
import axios from 'axios';

const App = () => {
    const [feedbackEntries, setFeedbackEntries] = useState([]);

    const fetchFeedback = async () => {
        const response = await axios.get('http://localhost:8000/api/feedback');
        setFeedbackEntries(response.data);
    };

    useEffect(() => {
        fetchFeedback();
    }, []);

    return (
        <div className="App">
            <h1 className='main-heading'>Feedback Management System</h1>
            <FeedbackForm functionCall={fetchFeedback} />
            <FeedbackList dataProp={feedbackEntries} />
        </div>
    );
};

export default App;
