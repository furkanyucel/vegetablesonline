import "./Contact.css"

const Contact = () => {
  return (
    <div className="container">
    <section className="contact">
      <article>
        <img src="/images/img-2.png" alt="Parrot Icon" />
        <h2>Contact Us</h2>
      </article>
      <article>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone Number" />
          <textarea name="" id="" cols="30" rows="6" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5249.98325970342!2d2.294481!3d48.85837!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1701352790120!5m2!1sen!2sus"></iframe>
        </div>
      </article>
    </section>
  </div>
  )
}

export default Contact