import React from 'react';
import './Project.css';

export default function Container(props) {

    const handleClickProject = () => {
        window.location.href = 'https://github.com/MuthuganeshMG';
        console.log('project clicked');
    };
    // const handleClickTodo = () => {
    //     // Implement download functionality or navigation logic
    //     window.location.href = 'https://github.com/MuthuganeshMG/Todo List';
    //     console.log('project clicked');
    // };
    // const handleClickSignIn = () => {
    //     // Implement download functionality or navigation logic
    //     window.location.href = 'https://github.com/MuthuganeshMG/Sign-In-Page';
    //     console.log('project clicked');
    // };
    const { project } = props;
    return (
        <div className='project-container' id='Project'>
            <h2 className='project-head'>
                Projects
            </h2>
            <div className="project-section">
                {
                    project.map((projects, index) => (
                        <div key={index} className='project-item'>
                            <img
                                src={projects.image}
                                alt="img"
                                className='project-image'
                            />
                            <div className="content"
                                onClick={handleClickProject}
                            >
                                <h3 > {projects.name}</h3>
                                <h4 className='title'>
                                    Description
                                </h4>
                                <p>
                                    {projects.description}
                                </p>
                                <h4 className='title'>Techstack</h4>
                                <ul className='skill-content'>
                                    {
                                        projects.techstack.map((tech, index) => (
                                            <li className='list' key={index}>{tech}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
