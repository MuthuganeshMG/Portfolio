import React from 'react';
import './Skill.css';
import skillset from '../assets/skillset.jpg';

export default function Skill() {
    return (
        <section className='skill-container' id='skill'>
            <h2>SkillS</h2>
            <div className="skill-img">
                <img src={skillset} alt="Skillset" />
            </div>
            <div className="right">
                <h3 className='right-head'>Back-End</h3>
                <div className="skillset-right" >
                    <h5>Node Js</h5>
                    <h5>Express JS</h5>
                    <h5>Mongo DB</h5>
                </div>
            </div>
            <div className="left">
                <h3 className='left-head'>Front-End</h3>
                <div className="skillset-left" >
                    <h5>React</h5>
                    <h5>JavaScript</h5>
                    <h5>Css3</h5>
                    <h5>Html5</h5>
                </div>
            </div>
        </section>
    );
}
