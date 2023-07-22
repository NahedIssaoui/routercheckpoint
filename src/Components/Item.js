
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';

function Item({product}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img height={"340px"} variant="top" src={product.posterURL}/>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <StarRatingComponent 
              name="rate1" 
              starCount={5}
              value={product.Rating}
            />
      </Card.Body>
    </Card>
  );
}

export default Item;