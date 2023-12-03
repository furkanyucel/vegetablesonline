import Card from "../Card/Card"
import "./Vegetables.css"
import {productData} from "./ProductData.js";
import Button from "../Button/Button";

const Vegetables = () => {
  return (
    <div className="container">
      <section className="vegetables">
        <article>
          <img src="/images/img-2.png" alt="Parrot Icon" />
          <h2>Our Vegetables</h2>
          <p>Reader will be distracted by the readable content of a</p>
        </article>
        <article>
          {productData.map((urunler) => {
            return(
              <Card 
              key = {urunler.id}
              urunler = {urunler}
              />
            )
          })}
        <div className="vegetablesBtn">
        <Button>Read More</Button>
        </div>
        </article>
      </section>
    </div>
  )
}

export default Vegetables