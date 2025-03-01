import kmc1 from '../assets/kmc1.png';
import './TopSection.css';

export default function TopSection() {

    const handleDownloadCV = () => {
        window.location.href = 'https://mail.google.com/mail/u/0/#label/My+CV/KtbxLzFrLTKkFgcQPhMbfTZQpJvBKBNQkL';
        console.log('Download CV clicked');
    };

    const handleMyWork = () => {
        window.location.href = 'https://github.com/MuthuganeshMG?tab=repositories';

        console.log('My Work clicked');
    };

    return (
        <div className='container-section' id='home'>
            <div className="image">
                <img src={kmc1} alt="img" />
            </div>
            <div className="text">
                <div className="text-section">
                    <h1 id='mg'>MUTHUGANESH M</h1>
                    <p className='domain'>
                        MERN Stack developer
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
    );
}



