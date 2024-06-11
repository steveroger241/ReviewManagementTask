import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import './App.css'

const App = () => {
    return (
        <div className="App">
            <h1 className='main-heading'>Feedback Management System</h1>
            <FeedbackForm />
            <FeedbackList />
        </div>
    );
};

export default App;