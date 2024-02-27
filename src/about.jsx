import React, { useState } from 'react';
import star from './asset/img/Star 1.png';
import balls from './asset/img/balls.png';
import aboutPicture from './asset/img/about-picture.png'
import '../src/scss/content/about.scss';



export const About = () => {
    const [visible, setVisible] = useState(true);
    const toggle = () => setVisible(!visible)
    return (
        <>
            <div className='about-container'>
                <div className='about-content'>
                    <div className='about-images'>
                        <img src={balls} alt="" className='balls-image' />
                        <div className='image-star'>
                            <img src={star} alt="" />
                        </div>
                    </div>

                    <div className='about-description'>
                        <div>
                            <h2>Who I am ?</h2>
                            <p className='about-parragraph'>
                                Hi, my name is " Cesar Ogando " and I am a Junior Frontend developer. I have experience working in <span>HTML , CSS/Sass/Tailwind , Javascript</span> I also have a good command of tools like<span>Figma</span>  and <span>Adobe Photoshop</span> I am learning new technologies like <span> React.js</span> I am a person who seeks to contribute his productivity wherever he goes while maintaining resilience and above all, adding passion to each project that I join and always giving 101% of myself in everything I do.
                            </p>
                            <div className='about-content-btn'>
                                <button className='about-btn' onClick={toggle}>{visible ? 'More Infor' : 'Less Infor'}</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={visible ? 'active' : 'more-about '} >
                <div className='more-about-container'>
                    <h2>More About Me</h2>
                    <div className='more-about-content'>

                        <img src={aboutPicture} alt="about" />

                        <div className='more-information' >
                            <div className='more-information-content'>
                                <p><span>Name: </span>Cesar Ogando</p>
                                <p><span>Age:</span> 24 years old</p>
                                <p><span>Language:</span> English / Spanish</p>
                                <p><span>Nationality: </span> Dominican Republic</p>
                            </div>
                            <h3>My Blog</h3>
                            <div className='more-about-block'>
                                <h4>" Goals as a software developer "</h4>

                                <h5>I am a junior developer, I have been studying software engineering for around 2 years and I am a self-taught person.</h5>
                                <ul>
                                    <li>I am looking for a company where I can grow and that has a mutual benefit for both me and the company that hires me</li>
                                    <li>I am a person who is more interested in knowledge and experience than in the economic side since I can convert my knowledge into money.</li>
                                    <li>I have new challenges and technologies to learn, some of them are: NodeJS and Typescript since I am really interested in the backend side.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}