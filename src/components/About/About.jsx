import Button from "../Button/Button"
import "./About.css"

const About = () => {
  return (
    <div className="container">
      <section className="about">
        <article>
          <img src="/images/img-2.png" alt="Parrot Icon" />
          <h2>About Our Shop</h2>
          <figure>
            <img src="/images/img-3.png" alt="About Image" />
          </figure>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>
          <Button className="aboutBtn">Read More</Button>
        </article>
      </section>
    </div>
  )
}

export default About