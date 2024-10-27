import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";

const Contact = () => {
    return (
        <section id="cantact" className="contact">
            <PageHeaderContent
                headerText = 'My Contact'
                icon = {<BsInfoCircleFill size={40} />}
            />

            <div className="contact__content">
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(-200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >
                   <h3 className="contact__content__header-text">Let's Talk</h3> 
                </Animate>
            </div>
        </section>
    )
}
export default Contact;