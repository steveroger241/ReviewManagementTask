import '../App.css'

const FeedbackList = (props) => {
    return (
        <div className='review-wrapper'>
            <h1 className='feedback-entries-heading'>Feedbacks</h1>
            <ul className='ul'>
                {props.dataProp.map((entry, index) => (
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