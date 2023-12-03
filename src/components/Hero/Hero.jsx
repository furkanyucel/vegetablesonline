import Button from "../Button/Button"
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero container">
      <main className="heroSlider">
        <section className="heroImg">
          <figure>
            <img src="/images/img-1.png" alt="Hero Image" />
          </figure>
        </section>
        <section className="heroInfo">
          <h1>Vegetables <span>Shop</span></h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
          <div className="heroButtons">
            <Button>Buy Now</Button>
            <Button>Read More</Button>
          </div>
        </section>
        <figure className="arrows">
          <img src="/images/left-icon.png" alt="Left Arrow" />
          <img src="/images/right-icon.png" alt="Right Icon" />
        </figure>
      </main>
    </div>
  )
}

export default Hero