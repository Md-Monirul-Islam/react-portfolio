import React from "react";
import { useNavigate } from 'react-router-dom';
import { Animate } from "react-simple-animate";
import './styles.scss';


const Home = () => {

    const navigate = useNavigate();
    console.log(navigate)

    const handleNavigateToContactMePage = () => {
        navigate('/contact/')
    };
    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hi, I'm Md. Monirul Islam
                    <br />
                    Full Stack Developer
                </h1>

                <Animate
                    play
                    duration={1.5}
                    start={{
                        transform : 'translateY(550px)'
                    }}
                    end={{
                        transform : 'translateY(0px)'
                    }}
                >
                    <div className="home__contact-me">
                        <button onClick={handleNavigateToContactMePage}>Hire Me</button>
                    </div>
                </Animate>
            </div>
            
        </section>
    )
}
export default Home;