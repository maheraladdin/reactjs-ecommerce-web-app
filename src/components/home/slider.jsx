import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider({advertisements,width,height,className}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    if(!advertisements) advertisements = [
        {
            id: 1,
            title: "First slide label",
            description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            image: "https://via.placeholder.com/800x400?text=First+slide",
        },
        {
            id: 2,
            title: "Second slide label",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "https://via.placeholder.com/800x400?text=Second+slide",
        },
        {
            id: 3,
            title: "Third slide label",
            description: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
            image: "https://via.placeholder.com/800x400?text=Third+slide",
        },
    ];

    const sliderTime = 2000;

    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className={`slider ${className}`}
            style={{
                width,
                height
            }}
        >
            {
                advertisements.map((advertisement) => (
                    <Carousel.Item
                        key={advertisement.id}
                        interval={sliderTime}
                        style={{
                            width,
                            height
                        }}
                    >
                        <img
                            className="d-block slider-image"
                            src={advertisement.image}
                            alt={advertisement.title}
                            loading={"lazy"}
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