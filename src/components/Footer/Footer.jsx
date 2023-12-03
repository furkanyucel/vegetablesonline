import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <main className="container">
        <section>
          <article className="info">
            <h4>Address</h4>
            <figure>
              <img src="/images/map-icon.png" alt="Map Icon" />
              <a href="#">No.123 Chalingt Gates,</a>
            </figure>

            <figure>
              <img src="/images/call-icon.png" alt="Tel Icon" />
              <a href="tel:+019876543210">( +01 9876543210 )</a>
            </figure>

            <figure>
              <img src="/images/mail-icon.png" alt="Mail Icon" />
              <a href="mail:furkanyucelux@gmail.com">Locations</a>
            </figure>
          </article>
          <article className="social"></article>
          <article className="newsletter"></article>
        </section>

        <section>
          <article className="social">
            <h4>Social Link</h4>

            <figure>
              <img src="/images/fb-icon.png" alt="Facebook Icon" />
              <a href="http://facebook.com">Facebook</a>
            </figure>
            <figure>
              <img src="/images/twitter-icon.png" alt="Twitter Icon" />
              <a href="http://twitter.com">Twitter</a>
            </figure>
            <figure>
              <img src="/images/instagram-icon.png" alt="Instagram Icon" />
              <a href="http://instagram.com">Instagram</a>
            </figure>
            <figure>
              <img src="/images/linkedin-icon.png" alt="Linkedin Icon" />
              <a href="http:linkedin.com">Linkedin</a>
            </figure>

          </article>
        </section>

        <section>
          <article className="newsletter">
          <h4>Newsletter</h4>
            <input type="text" placeholder="Enter Your Email" />
            <button>Subscribe</button>
          </article>
        </section>
      </main>
      <div className="reserved">
        <p>Copyright 2023 All Right Reserved Free html Templates</p>
      </div>
    </footer>
  )
}

export default Footer