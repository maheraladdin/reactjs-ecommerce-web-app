import {useId, useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Sales1 from "../../assets/images/sales1.jpg";
import Sales2 from "../../assets/images/sales2.jpg";
import Sales3 from "../../assets/images/sales3.jpg";
import Sales4 from "../../assets/images/sales4.jpg";

function Slider({advertisements,width,height,className}) {
    const [index, setIndex] = useState(0);
    const id = useId();

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    if(!advertisements) advertisements = [
        {
            title: "First slide label",
            description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            image: Sales1,
        },
        {
            title: "Second slide label",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: Sales2,
        },
        {
            title: "Third slide label",
            description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: Sales3,
        },
        {
            title: "Fourth slide label",
            description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: Sales4,
        },
    ];

    const sliderTime = 2000;

    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className={`slider ${className}`}
            width={width}
            height={height}
        >
            {
                advertisements.map((advertisement) => (
                    <Carousel.Item
                        key={`${id}-${advertisement.title}`}
                        interval={sliderTime}
                        width={width}
                        height={height}
                    >
                        <img
                            className="d-block slider-image"
                            src={advertisement.image}
                            alt={advertisement.title}
                        />
                        {advertisement.title && advertisement.description ?
                        <Carousel.Caption>
                            {advertisement.title ? <h3>{advertisement.title}</h3> : null}
                            {advertisement.description ? <p>{advertisement.description}</p> : null}
                        </Carousel.Caption> : null}
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}

export default Slider;