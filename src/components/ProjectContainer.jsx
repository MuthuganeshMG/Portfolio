import React from 'react';
import Project from './Project';

export default function Head() {

    
    const projects =
        [
            {
                name: "Sign In",
                description: "In this project create a front end of structure in Sign in page",
                techstack: ["HTML5", "CSS3", "JavaScript", "React JS"],
                image: "images/Sign_In.png"
            },
            {
                name: "QR-Genrator",
                description: "In this project validation and downloading to QR-code",
                techstack: ["HTML5", "CSS3", "JavaScript", "React JS"],
                image: "images/Qr_Genrator.png"
            },
            {
                name: "My Todos",
                description: "In this project validation and save the condent in Todos",
                techstack: ["HTML5", "CSS3", "JavaScript", "React JS"],
                image: "images/Todo_List.png"
            },
            {
                name: "Weather App",
                description: "In this project create a WEATHER App in current weather stage ",
                techstack: ["HTML5", "CSS3", "JavaScript", "React JS"],
                image: "images/weather.png"
            }

        ]
    return (
        <div>
            <Project project={projects} />
        </div>
    )
}
