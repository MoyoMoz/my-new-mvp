import React from 'react';
import '../styles/HomePage.css';

function HomePage() {
    return (
        <div className="home-page">
            <h1>Welcome to the Home Page</h1>
            {/* Add your buttons here */}
            <button className="home-button">Study</button>
            <button className="home-button">Practice</button>
            <button className="home-button">Build</button>
        </div>
    );
}

export default HomePage;
