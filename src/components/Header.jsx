import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-scroll';

export default function Header() {
    const [active, setActive] = useState('Home'); // Default active link

    const handleClick = (link) => {
        setActive(link);
    };

    return (
        <div className="header">
            <div className="head-left">
                <h1>
                    <span>MERN </span> 
                    Stack Developer
                </h1>
            </div>
            <div className="head-right">
                <Link to='about' smooth={true} duration={500}>
                    <h4 className={active === 'About Me' ? "head-gray" : "head"} onClick={() => handleClick('About Me')}>
                        About Me
                    </h4>
                </Link>
                <p> | </p>
                <Link to='skill' smooth={true} duration={500}>
                    <h4 className={active === 'SkillS' ? "head-gray" : "head"} onClick={() => handleClick('SkillS')}>
                        SkillS
                    </h4>
                </Link>
                <p> | </p>
                <Link to='Project' smooth={true} duration={500}>
                    <h4 className={active === 'Project' ? "head-gray" : "head"} onClick={() => handleClick('Project')}>
                        Project
                    </h4>
                </Link>
                <p> | </p>
                <Link to='home' smooth={true} duration={500}>
                    <h4 className={active === 'Home' ? "head-gray" : "head"} onClick={() => handleClick('Home')}>
                        Home
                    </h4>
                </Link>
            </div>
        </div>
    )
}
