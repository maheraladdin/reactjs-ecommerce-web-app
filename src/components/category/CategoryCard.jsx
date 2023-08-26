import Card from 'react-bootstrap/Card';
import useClickCategoryCard from "../../Hooks/categories/useClickCategoryCard";

export default function CategoryCard({category}) {
    const {handleOnClickCategoryCard} = useClickCategoryCard(category);
    return (
        <Card onClick={handleOnClickCategoryCard} className="border-0 text-white rounded-pill user-select-none">
            <Card.Img role="button" src={category.image} alt="Card image" className="rounded-pill" />
            <Card.Title role="button" className="text-dark text-center mt-2">
                {category.name || "Category Name"}
            </Card.Title>
        </Card>
    );
}