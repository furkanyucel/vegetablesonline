import Button from "../Button/Button"
import "./Choose.css"

const Choose = () => {
  return (
    <div className="container-fluid">
      <section className="choose">
        <article>
          <img src="/images/img-2.png" alt="Parrot Icon" />
          <h2>Why Choose Us</h2>
          <figure>
            <img src="/images/img-14.png" alt="About Image" />
          </figure>
          <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
          <div className="chooseBtn">
          <Button>Read More</Button>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Choose