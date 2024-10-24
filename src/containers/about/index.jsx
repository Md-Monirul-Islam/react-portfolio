import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss';

const About = () => {
    const personalDetails = [
        {
            label: 'Name',
            value: 'Md.Monirul Islam',
        },
        {
            label: 'Address',
            value: 'Paban Sadar, Pabna',
        },
        {
            label: 'Email',
            value: 'md.monirulmunna.cse@gmail.com',
        },
        {
            label: 'Contact No',
            value: '01784905235',
        },
    ];

    const jobSummary = "Seeking an exciting and challenging role as a Full Stack Engineer, where I can apply my expertise in both backend and frontend development to design, build, and optimize cutting-edge web applications. With a passion for crafting efficient, scalable systems and delivering seamless user experiences, I am eager to contribute to a forward-thinking, innovative organization that values creativity, collaboration, and continuous improvement. I am committed to leveraging my strong technical skills, problem-solving abilities, and deep understanding of modern technologies to drive impactful solutions and help the team achieve its strategic goals.";

    return (
        <section id="about" className="about">
            <PageHeaderContent
                headerText='About Me'
                icon={<BsInfoCircleFill size={40} />}
            />

            <div className="about__content">
                <div className="about__content__personal-wrapper">
                    <Animate
                        play
                        duration={1.5}
                        start={{ transform: 'translateX(-900px)' }}
                        end={{ transform: 'translateY(0px)' }}
                    >
                        <h3>Full Stack Developer</h3>
                        <p>{jobSummary}</p>
                    </Animate>

                    <Animate
                        play
                        duration={1.5}
                        start={{ transform: 'translateX(500px)' }}
                        end={{ transform: 'translateY(0px)' }}
                    >
                        <h3 className="personalInformationHeaderText">Personal Details</h3>
                        <ul>
                            {personalDetails.map((item, index) => (
                                <li key={index}>
                                    <span className="title">{item.label}</span>
                                    <span className="value">{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </Animate>
                </div>

                <div className="about__content__services-wrapper">
                    <div className="about__content__services-wrapper__inner-content">
                        <div><FaDev size={60} color="var(--yellow-theme-main-color)" /></div>
                        <div><DiAndroid size={60} color="var(--yellow-theme-main-color)" /></div>
                        <div><FaDatabase size={60} color="var(--yellow-theme-main-color)" /></div>
                        <div><DiApple size={60} color="var(--yellow-theme-main-color)" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
