import Button from "../Button/Button";
import "./Card.css"

const Card = ({urunler}) => {

  const {id, name, image, price, product, amount, info} = urunler;

  return (
    <div className="card">
    <figure>
      <img src={image} alt={product} />
    </figure>
    <p className="price">{price}₺</p>
    <p className="product">{product}</p>
    <p className="amount">{amount}</p>
    <p className="info">{info}</p>
    {/* <a href="">Buy Now</a> */}
    <Button>Buy Now</Button>
  </div>
  )
}

export default Card