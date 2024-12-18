import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { MdWork } from "react-icons/md";
import { data } from "./utils";
import './styles.scss';


const Resume = () => {
    return (
        <section id="resume" className="resume">
            <PageHeaderContent
                headerText = 'My Resume'
                icon = {<BsInfoCircleFill size={40} />}
            />
            <div className="timeline">
                <div className="timeline__experience">
                    <h3 className="timeline__experience__header-text">Experience</h3>
                    <VerticalTimeline 
                        layout="1-column"
                        lineColor="var(--yellow-theme-main-color)"
                    >
                        {
                            data.expericence.map((item,index)=>(
                                <VerticalTimelineElement
                                    key={index}
                                    className="timeline__experience__verticle-timeline-element"
                                    contentStyle={{
                                        background: 'none',
                                        color: 'var(--yellow-theme-sub-text-color)',
                                        border: '1.5px solid var(--yellow-theme-main-color)'
                                    }}
                                    // date="March 2024 - Present"
                                    icon={<MdWork />}
                                    iconStyle={{
                                        background: '#181818',
                                        color: 'var(--yellow-theme-main-color)'
                                    }}
                                >
                                    <div className="verticle-timeline-element-title-wrapper">
                                        <h3>
                                            {item.title}
                                        </h3>
                                        <h4>
                                            --{item.company}
                                        </h4>                                       
                                    </div>
                                    <p className="verticle-timeline-element-title-wrapper-description">{item.description}</p>
                                    <p className="verticle-timeline-element-title-wrapper-date">{item.date}</p>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>
                <div className="timeline__education">
                    <h3 className="timeline__education__header-text">Education</h3>
                        <VerticalTimeline 
                            layout="1-column"
                            lineColor="var(--yellow-theme-main-color)"
                        >
                        {
                                data.education.map((item,index)=>(
                                    <VerticalTimelineElement
                                        key={index}
                                        className="timeline__experience__verticle-timeline-element"
                                        contentStyle={{
                                        background: 'none',
                                        color: 'var(--yellow-theme-sub-text-color)',
                                        border: '1.5px solid var(--yellow-theme-main-color )'
                                    }}
                                    icon={<MdWork />}
                                    iconStyle={{
                                        background: '#181818',
                                        color: 'var(--yellow-theme-main-color)'
                                    }}
                                    >
                                        <div className="verticle-timeline-element-title-wrapper">
                                            <h3>
                                                {item.title}
                                            </h3>
                                            <h4>
                                                --{item.company}
                                            </h4>                                           
                                        </div>
                                        <p className="verticle-timeline-element-title-wrapper-date">{item.date}</p>
                                    </VerticalTimelineElement>
                                ))
                            }
                        </VerticalTimeline>
                </div>
            </div>
        </section>
    )
}
export default Resume;