import React from 'react';
import './Footer.css';
import { VscLocation } from "react-icons/vsc";
import { GiSmartphone } from "react-icons/gi";
import { IoMailOutline } from "react-icons/io5";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";


export default function Footer() {
    return (
        <div className='footer-container'>
            <div className="contact">
                <h5>
                    <VscLocation /> Kovilpalayam,
                    Coimbatore
                </h5>
                <p>
                    <GiSmartphone /><b> +91 7373230059</b>
                </p>
                <a
                    href='https://mail.google.com/mail/u/0/#inbox'>
                    <IoMailOutline /> muthuganesh@gmail.com
                </a>
            </div>
            <div className="aboutme">
                <h4>
                    About Me
                </h4>
                <div className="about" >
                    I am MUTHUGANESH, a recent graduate with a degree in B.E
                    Mechanical Engineering from King College of Technology.
                    My academic journey has allowed me to develop
                    a strong foundation in software design and development principles.
                    I am excited about the possibility of beginning my career as a Software Engineer
                    and contributing to your innovative software projects.
                    <p className='icons'>
                        <a
                            href="https://www.linkedin.com/in/muthuganesh3597"
                            className='linkedin'>
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/MuthuganeshMG"
                            className='github'>
                            <IoLogoGithub />
                        </a>
                        <a
                            href="https://www.facebook.com/hanesh.hanesh.94?mibextid=ZbWKwL"
                            className='fb'>
                            <RiFacebookBoxLine />
                        </a>
                        <a
                            href="https://www.instagram.com/mg._.official._.king/"
                            className='insta'>
                            <FaInstagramSquare />
                        </a>
                    </p>
                </div>
            </div>
            <p className='copyrights'>&copy; 2025 copyrights</p>
        </div>
    );
}
