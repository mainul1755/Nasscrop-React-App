 import React from 'react'
 import './App.css'
 
 const App = () => {
   return (
      <main>
        <header>
      <div className="logo">Nasscorp</div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="buttons">
        <div>
          <img src="icon/Search Icon.png" alt="Search Icon" />
        </div>
        <div>
          <img src="icon/btn.png" alt="Button Icon" />
        </div>
      </div>
    </header>

    <section className="hero">
        <div className="hero-content">
          <h1>Experts are here to solve your business problem.</h1>
          <p>
            We know how large objects will act, but things on a small scale just do not act that way.
          </p>
          <button className="btn-primary">Get Quote Now</button>
          <button className="btn-outline">Learn More</button>
        </div>
      </section>

      <section className="stats">
        <div className="stat-item">
          <img src="icon/1.png" alt="" />
          <div className="stat">
            <h3>1.5K</h3>
            <p>Happy Customers</p>
          </div>
        </div>
        <div className="stat-item">
          <img src="icon/2.png" alt="" />
          <div className="stat">
            <h3>3K</h3>
            <p>Cases Done</p>
          </div>
        </div>
        <div className="stat-item">
          <img src="icon/3.png" alt="" />
          <div className="stat">
            <h3>45</h3>
            <p>Award Winning</p>
          </div>
        </div>
        <div className="stat-item">
          <img src="icon/4.png" alt="" />
          <div className="stat">
            <h3>12+</h3>
            <p>Countries Worldwide</p>
          </div>
        </div>
      </section>

      <section className="card-container">
        <div className="card">
          <img src="icon/card 1.png" alt="" />
          <h3>Business Growing</h3>
          <p>the quick fox jumps over the lazy dog</p>
          <a href="#" className="btn">
            More <img src="icon/icn arrow.png" alt="" />
          </a>
        </div>

        <div className="card">
          <img src="icon/2.png" alt="" />
          <h3>Digital Marketing</h3>
          <p>the quick fox jumps over the lazy dog</p>
          <a href="#" className="btn">
            More <img src="icon/icn arrow.png" alt="" />
          </a>
        </div>

        <div className="card">
          <img src="icon/card 3.png" alt="" />
          <h3>National top 50 firms</h3>
          <p>the quick fox jumps over the lazy dog</p>
          <a href="#" className="btn">
            More <img src="icon/icn arrow.png" alt="" />
          </a>
        </div>

        <div className="card active">
          <img src="icon/card 4.png" alt="" />
          <h3>Digital Marketing</h3>
          <p>the quick fox jumps over the lazy dog</p>
          <a href="#" className="btn btn-dark">More</a>
        </div>
      </section>

      <section className="service-section">
        <div className="text-center">
          <h2>
            We are providing best <br /> <span>business service.</span>
          </h2>
          <p>
            Problems trying to resolve the conflict between the two major realms <br /> of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="service-content">
           
          <div className="service-video">
            <img src="image/cover 1.jpg" alt="Meeting Room" />
            <div className="play-btn">
              <img src="icon/play btn.png" alt="" />
            </div>
          </div>

           
          <div className="service-text">
            <h3>
              Most trusted in <br /> our field
            </h3>
            <p>
              Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.
            </p>

            <div className="feature">
              <img src="icon/Vector 1.png" alt="" />
              <div>
                <h4>the quick fox jumps over the lazy dog</h4>
                <p>Things on a very small scale ...</p>
              </div>
            </div>

            <div className="feature">
              <img src="icon/vector 2.png" alt="" />
              <div>
                <h4>the quick fox jumps over the lazy dog</h4>
                <p>Things on a very small scale ...</p>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className="testimonials">
        <div className="container">
          <h2 className="title">What Clients Say</h2>
          <p className="subtitle">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>

          <div className="testimonial-cards">
            <div className="card_2">
              <div className="profile">
                <img src="image/cover (1).png" alt="client" />
              </div>
              <h3>Regina Miles</h3>
              <p className="role">Designer</p>
              <div className="stars">
                <img src="icon/stars.png" alt="" />
              </div>
              <p className="text">
                This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.
              </p>
            </div>

            <div className="card_2">
              <div className="profile">
                <img src="image/cover (5).png" alt="client" />
              </div>
              <h3>Regina Miles</h3>
              <p className="role">Designer</p>
              <div className="stars">
                <img src="icon/stars.png" alt="" />
              </div>
              <p className="text">
                This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.
              </p>
            </div>

            <div className="card_2">
              <div className="profile">
                <img src="image/cover (2).png" alt="client" />
              </div>
              <h3>Regina Miles</h3>
              <p className="role">Designer</p>
              <div className="stars">
                <img src="icon/stars.png" alt="" />
              </div>
              <p className="text">
                This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <h2 className="title">Meet Our Team</h2>
          <p id="subtitle">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>

          <div className="team-cards">
            <div className="team-card">
              <img src="image/cover (2).png" alt="team member" />
              <p className="position">CO Founder</p>
              <h3 className="name">Avie Beaton</h3>
              <p className="description">the quick fox jumps over the lazy dog</p>
            </div>

            <div className="team-card">
              <img src="image/cover (3).png" alt="team member" />
              <p className="position">Consultant</p>
              <h3 className="name">Ben Jonson</h3>
              <p className="description">the quick fox jumps over the lazy dog</p>
            </div>

            <div className="team-card">
              <img src="image/cover (4).png" alt="team member" />
              <p className="position">Consultant</p>
              <h3 className="name">Rodney Stratton</h3>
              <p className="description">the quick fox jumps over the lazy dog</p>
            </div>

            <div className="team-card">
              <img src="image/cover (5).png" alt="team member" />
              <p className="position">Consultant</p>
              <h3 className="name">Ben Jonson</h3>
              <p className="description">the quick fox jumps over the lazy dog</p>
            </div>
          </div>
        </div>
      </section>

    <section className="quote-section">
        <div className="container">
          <div className="content">
            <div className="text_1">
              <h2>
                We Have Branches All <br /> Over The World
              </h2>
              <p>
                The gradual accumulation of information about atomic and small-scale behaviour during the first quarter of the 20th century, 
                which gave some indications about how small things do behave, produced an increasing confusion which was Heisenberg, and Born.
              </p>
              <img src="image/pngwing 1.png" alt="world map" className="map" />
            </div>
          </div>
        </div>
      </section>

       
      <section className="form-section">
        <div className="content_1">
          <div className="form_img">
            <img src="image/media.png" alt="" />
          </div>
          <div className="form-box">
            <h3>Get A Free Quote Here</h3>
            <form>
              <label htmlFor="name">Name*</label>
              <input type="text" id="name" placeholder="Full Name" required />

              <label htmlFor="email">Email*</label>
              <input type="email" id="email" placeholder="example@gmail.com" required />

              <label htmlFor="department">Department*</label>
              <select id="department" required>
                <option value="">Please Select</option>
                <option value="sales">Sales</option>
                <option value="support">Support</option>
                <option value="marketing">Marketing</option>
              </select>

              <label htmlFor="time">Time*</label>
              <select id="time" required>
                <option value="">4:00 Available</option>
                <option value="5pm">5:00 Available</option>
                <option value="6pm">6:00 Available</option>
              </select>

              <button type="submit" className="btn_1">Book Appointment</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p>the quick fox jumps over the lazy dog</p>
          <div className="social-icons">
            <a href="#"><img src="icon/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="icon/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="icon/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="icon/youtube.png" alt="YouTube" /></a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Company info</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Carrier</a></li>
            <li><a href="#">We are hiring</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Features</h3>
          <ul>
            <li><a href="#">Business Marketing</a></li>
            <li><a href="#">User Analytic</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Unlimited Support</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">IOS & Android</a></li>
            <li><a href="#">Watch a Demo</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Made With Love By Figmaland All Right Reserved</p>
      </div>
    </footer>


      </main>
   )
 }
 
 export default App
 