import React from 'react';
import './skill.css';
import skillset from '../assets/skillset.jpg';

export default function Skill() {
    return (
        <section className='skill-container' id='skill'>
            <div className="skill-header">
                <h2 className='skill-head'>SkillS</h2>
            </div>
            <div className="skill-image">
                <img src={skillset} alt="Skillset" className='skill-img' />
            </div>
            <div className="skill-section">
                <div className="right-container">
                    <div className="right">
                        <h3 className='right-head'>
                            Back-End
                        </h3>
                        <div className="right-skillset" >
                            <h5>Mongo DB</h5>
                            <h5>Express JS</h5>
                            <h5>Node Js</h5>
                        </div>
                    </div>
                </div>
                <div className="left-container">
                    <div className="left">
                        <h3 className='left-head'>
                            Front-End
                        </h3>
                        <div className="left-skillset" >
                            <h5>React</h5>
                            <h5>JavaScript</h5>
                            <h5>Css3</h5>
                            <h5>Html5</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
