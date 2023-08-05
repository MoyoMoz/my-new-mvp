import React from 'react';
import '../styles/StudyPage.css';

function StudyPage() {
    return (
        <div className="study-page">
            <h1>Study Page</h1>
            {/* Add your study materials here */}
            <button className="study-button">Lesson 1</button>
            <button className="study-button">Lesson 2</button>
            <button className="study-button">Lesson 3</button>
        </div>
    );
}

export default StudyPage;
