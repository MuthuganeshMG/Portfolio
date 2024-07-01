import React, { useState } from 'react';
import kmc1 from '../assets/kmc1.png';
import './TopSection.css';

export default function TopSection() {

    const handleDownloadCV = () => {
        // Implement download functionality or navigation logic
        window.location.href = 'https://mail.google.com/mail/u/0/#inbox/KtbxLwhGPhbjvFmRWlQxHjqbbNMHLMPpbq?projector=1&messagePartId=0.1';
        console.log('Download CV clicked');
    };

    const handleMyWork = () => {
        // Implement navigation or display work logic
        window.location.href = 'https://github.com/MuthuganeshMG?tab=repositories';

        console.log('My Work clicked');
    };

    return (
        <div className='container-section' id='home'>
            <div className="img">
                <img src={kmc1} alt="img" />
            </div>
            <div className="text-section">
                <div className="text">
                    <h1>Muthuganesh M</h1>
                    <p>
                        <bold>MERN Stack developer</bold>
                    </p>
                </div>
                <div className="button-section">
                    <button
                        className='download-btn'
                        onClick={handleDownloadCV}
                    >
                        Download CV
                    </button>
                    <button
                        className='work-btn'
                        onClick={handleMyWork}
                    >
                        My Work
                    </button>
                </div>
            </div>
        </div>
    )
}



