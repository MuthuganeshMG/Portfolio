import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import { useState } from 'react';


export default function Header() {

    const [action, setAction] = useState(false);

function handleClick(){
    setAction(true);
}

    return (
        <div className="header">
            <div className="head-left">
                <h1>Develop<span>er</span></h1>
            </div>
            <div className="head-right">
            {
                        action == "About Me" ? <hr/> :
                <Link to='about' smooth={true} duration={500}>
                    <h4 className='head' onClick={handleClick}
                        // className={action === " About Me " ? "head-gray" : "head"}
                        // onClick={() => { setAction('About Me') }}
                    > About Me </h4>
                    {/* { action && <hr/> } */}
                  
                </Link>
                    }
                <p> | </p>
                <Link to='skill' smooth={true} duration={500}>
                    <h4 className='head'
                        // className={action === " SkillS " ? "head-gray" : "head"}
                        // onClick={() => { setAction('SkillS') }}
                    >
                        SkillS
                    </h4>
                    {/* { action && <hr/> } */}

                </Link>
                <p>|</p>
                <Link to='Pro' smooth={true} duration={500}>
                    <h4 className='head'
                        // className={action === " Project " ? "head-gray" : "head"}
                        // onClick={() => { setAction('Project') }}
                    >
                        Project
                    </h4>
                    {/* { action && <hr/> } */}

                </Link>
                <p>|</p>
                <Link to='top' smooth={true} duration={500}>
                    <h4 className='head'
                        // className={action === " Home " ? "head-gray" : "head"}
                        // onClick={() => { setAction('Home') }}
                    >
                        Home
                    </h4>
                    {/* { action && <hr/> } */}

                </Link>
            </div>
        </div>
    )
}
