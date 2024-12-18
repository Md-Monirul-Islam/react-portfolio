import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss';
import ImageOne from '../images/one.png';
import ImageTwo from '../images/two.png';
import ImagThree from '../images/three.png';
import Images from '../images/images.png';
import brbImage from '../images/brb.png';
import JUSTMedicalImage from '../images/JUST Medical Center.png';
import BiologicalResearchCenter from '../images/biologicalResearchCenter.png';

const Portfolio = () => {
    const [filteredValue, setFilteredValue] = useState(1);
    const [hoverValue, setHoverValue] = useState(null);

    const portfolioData = [
        { id: 2, name: 'Job Portal', image: ImageOne, link: 'https://jobs.just.edu.bd/' },
        { id: 2, name: 'Multi Seller Ecommerce & POS', image: ImageTwo, link: 'https://kopotakkhoelectronics.com/' },
        { id: 2, name: 'Company Portal', image: ImagThree, link: 'https://rcnbroadband.com/' },
        { id: 3, name: 'Ecommerce', image: Images, link: '' },
        { id: 2, name: 'Lab Portfolio', image: brbImage, link: 'https://brb-bd.org/' },
        { id: 3, name: 'JUST Medical Center', image: JUSTMedicalImage, link: '' },
        { id: 3, name: 'Biological Research Center', image: BiologicalResearchCenter, link: 'https://web-production-2e916.up.railway.app/' },
    ];

    const filterData = [
        { filterId: 1, label: 'All' },
        { filterId: 2, label: 'Live Project' },
        { filterId: 3, label: 'Running Project' },
    ];

    function handleFilter(currentId) {
        setFilteredValue(currentId);
    }

    const filteredItems = filteredValue === 1
        ? portfolioData
        : portfolioData.filter(item => item.id === filteredValue);

    function handleHover(index) {
        setHoverValue(index);
    }

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText="My Portfolio"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {filterData.map(item => (
                        <li
                            key={item.filterId}
                            onClick={() => handleFilter(item.filterId)}
                            className={item.filterId === filteredValue ? 'active' : ''}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
                <div className="portfolio__content__cards">
                    {filteredItems.map((item, index) => (
                        <div
                            className="portfolio__content__cards__item"
                            key={index}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <div className="portfolio__content__cards__item__image-wrapper">
                                <a href={item.link}>
                                    <img src={item.image} alt={item.name} />
                                </a>
                            </div>
                            <div className="overlay">
                                {index === hoverValue && (
                                    <div>
                                        <p>{item.name}</p>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            <button>Visit</button>
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
