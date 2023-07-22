import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider({advertisements}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    advertisements = [
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

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="slider">
            {
                advertisements.map((advertisement) => (
                    <Carousel.Item key={advertisement.id}>
                        <img
                            className="d-block slider-image"
                            src={advertisement.image}
                            alt={advertisement.title}
                        />
                        <Carousel.Caption>
                            <h3>{advertisement.title}</h3>
                            <p>{advertisement.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}

export default Slider;