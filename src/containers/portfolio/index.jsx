import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss';
import ImageOne from '../images/one.png';
import ImageTwo from '../images/two.png';
import ImagThree from '../images/three.png';

const Portfolio = () => {

    const portfolioData = [
        {
            id : 2,
            name : 'Job Portal',
            image : ImageOne,
        },
        {
            id : 3,
            name : 'Ecommerce',
            image : ImageTwo,
        },
        {
            id : 4,
            name : 'Company Portal',
            image : ImagThree,
        },
    ]

    const filterData = [
        {
            filterId : 1,
            label : 'All',
        },
        {
            filterId : 2,
            label : 'Development',
        },
        {
            filterId : 3,
            label : 'Design',
        },
    ]
    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText = 'My Portfolio'
                icon = {<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio_content">
                <ul className="portfolio_content__filter">
                    {
                        filterData.map(item=>(
                            <li key={item.filterId}>
                                {
                                    item.label
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio_content__cards">
                    {
                        portfolioData.map((item)=>(
                            <div className="portfolio_content__cards__item" key={item.id}>
                                <div className="portfolio_content__cards__item__image-wrapper">
                                    <a>
                                        <img src={item.image} alt="Not fount" />
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Portfolio;