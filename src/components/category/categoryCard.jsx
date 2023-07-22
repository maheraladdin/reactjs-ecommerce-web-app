import Card from 'react-bootstrap/Card';

export default function CategoryCard({category}) {

    return (
        <Card className="border-0 text-white rounded-pill">
            <Card.Img role="button" src={category.image} alt="Card image" className="rounded-pill" />
            <Card.Title role="button" className="text-dark text-center mt-2">{category.name}</Card.Title>
        </Card>
    );
}