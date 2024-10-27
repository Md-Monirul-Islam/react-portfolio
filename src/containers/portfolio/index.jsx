import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import './styles.scss';
import ImageOne from '../images/one.png';
import ImageTwo from '../images/two.png';
import ImagThree from '../images/three.png';
import Images from '../images/images.png';

const Portfolio = () => {

    const [filteredValue, setFilteredValue] = useState(1);

    const [hoverValue,setHoverValue] = useState(null);

    const portfolioData = [
        {
            id : 2,
            name : 'Job Portal',
            image : ImageOne,
            link : '',
        },
        {
            id : 3,
            name : 'Ecommerce',
            image : ImageTwo,
            link : '',
        },
        {
            id : 4,
            name : 'Company Portal',
            image : ImagThree,
            link : '',
        },
        {
            id : 3,
            name : 'Ecommerce',
            image : Images,
            link : '',
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

    function handleFilter(currentId){
        setFilteredValue(currentId);
    };

    console.log(filteredValue)

    const filteredItems = filteredValue ===1 ? portfolioData : portfolioData.filter(item=>item.id === filteredValue);
    console.log(filteredItems)

    function handleHover(index){
        setHoverValue(index);
    };
    console.log(hoverValue)

    return (
        <section id="portfolio" className="portfolio">
            <PageHeaderContent
                headerText = 'My Portfolio'
                icon = {<BsInfoCircleFill size={40} />}
            />
            <div className="portfolio__content">
                <ul className="portfolio__content__filter">
                    {
                        filterData.map(item=>(
                            <li key={item.filterId} onClick={()=>handleFilter(item.filterId)} className={item.filterId === filteredValue ? 'active' : ''}>
                                {
                                    item.label
                                }
                            </li>
                        ))
                    }
                </ul>
                <div className="portfolio__content__cards">
                    {
                        filteredItems.map((item,index)=>(
                            <div className="portfolio_content__cards__item" key={item.id}
                                onMouseEnter={()=>handleHover(index)}
                                onMouseLeave={()=>handleHover(null)}
                            >   {/* `cardItem${item.name.trim()}` */}
                                <div className="portfolio_content__cards__item__image-wrapper">
                                    <a>
                                        <img src={item.image} alt="Not fount" />
                                    </a>
                                </div>
                                <div className="overlay">
                                    {
                                        index === hoverValue && (
                                            <div>
                                                <p>{item.name}</p>
                                                <button>Visit</button>
                                            </div>
                                        )
                                    }
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