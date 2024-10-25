import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { data } from "./utils";


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
                                >
                                    <div className="verticle-timeline-element-title-wrapper">
                                        <h3 className="verticle-timeline-element-title">
                                            {item.title}
                                        </h3>
                                    </div>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>
                <div className="timeline__education">
                    <h3 className="timeline__education__header-text">Education</h3>
                </div>
            </div>
        </section>
    )
}
export default Resume;