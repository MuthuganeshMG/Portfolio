import React from 'react';
import Todo_List from '../assets/Todo_List.png';
import Qr_Genrator from '../assets/Qr_Genrator.png';
import Sign_In from '../assets/Sign_In.png';
import './Project.css';

export default function Project() {

    const handleClickQr = () => {
        // Implement download functionality or navigation logic
        window.location.href = 'https://github.com/MuthuganeshMG/QR-Generator';
        console.log('project clicked');
    };
    const handleClickTodo = () => {
        // Implement download functionality or navigation logic
        window.location.href = 'https://github.com/MuthuganeshMG/Todo List';
        console.log('project clicked');
    };
    const handleClickSignIn = () => {
        // Implement download functionality or navigation logic
        window.location.href = 'https://github.com/MuthuganeshMG/Sign-In-Page';
        console.log('project clicked');
    };

    return (
        <section className='project-container' id='Project'>
            <h2 className='project-head'>
                Projects
            </h2>
            <div className="project-section">
                <div className="project-item" onClick={handleClickQr}>
                    <img src={Qr_Genrator} alt="QR Generator" />
                    <div className="overlay">
                        <p >
                            In this project is QR GENRATOR <br />
                            <bold> Description :</bold> with validation and downloading
                        </p>
                    </div>
                </div>
                <div className="project-item" onClick={handleClickTodo}>
                    <img src={Todo_List} alt="Todo List" />
                    <div className="overlay">
                        <p >
                            Todo List project <br />
                            <bold> Description :</bold>with validation
                        </p>
                    </div>
                </div>
                <div className="project-item" onClick={handleClickSignIn}>
                    <img src={Sign_In} alt="Sign In" />
                    <div className="overlay">
                        <p >
                             Sign In Page <br />
                             <bold> Description </bold> without validation
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
