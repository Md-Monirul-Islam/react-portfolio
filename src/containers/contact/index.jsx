import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import './styles.scss'

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
                <Animate
                    play
                    duration={1}
                    delay={0}
                    start={{
                        transform: "translateX(200px)"
                    }}
                    end={{
                        transform: "translateX(0px)"
                    }}
                >
                    <div className="contact__content__form">
                        <div className="contact__content__form__controlswrapper">
                            <div>
                                <input name="name" className="inputName" type="text" required />
                                <label htmlFor="name" className="nameLabel">Name</label>
                            </div>
                            <div>
                                <input name="email" className="inputEmail" type="email" required />
                                <label htmlFor="email" className="emailLabel">Email</label>
                            </div>
                            <div>
                                <textarea rows={5} name="description" className="inputDescription" type="text" required />
                                <label htmlFor="description" className="DescriptionLabel">Description</label>
                            </div>
                        </div>
                        <button>Submit</button>
                    </div>
                </Animate>
            </div>
        </section>
    )
}
export default Contact;