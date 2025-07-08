
const Index = () => {
  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/lovable-uploads/3ec2ad48-f4f7-4516-ab31-8ec8e022827f.png" alt="AY Chindo Foundation" className="logo" />
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#activities">Activities</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button className="donate-btn-nav">Donate Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Transforming Lives, Building Hope</h1>
          <p>Supporting children, widows, people with disabilities, and promoting girl-child education across communities.</p>
          <div className="hero-buttons">
            <button className="btn-primary">Donate Now</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop" alt="Community Impact" />
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-header">
            <h2>About AY Chindo Foundation</h2>
            <p>Dedicated to creating lasting positive change in communities</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>Our Mission</h3>
              <p>The AY Chindo Foundation is committed to uplifting the most vulnerable members of our society. We focus on providing comprehensive support to children in need, empowering widows, ensuring accessibility for people with disabilities, and championing girl-child education.</p>
              
              <h3>Our Focus Areas</h3>
              <div className="focus-areas">
                <div className="focus-item">
                  <div className="focus-icon">👶</div>
                  <h4>Child Welfare</h4>
                  <p>Providing healthcare, education, and nutritional support to children in underserved communities.</p>
                </div>
                <div className="focus-item">
                  <div className="focus-icon">👩</div>
                  <h4>Widow Empowerment</h4>
                  <p>Supporting widows through skills training, microfinance, and emotional support programs.</p>
                </div>
                <div className="focus-item">
                  <div className="focus-icon">♿</div>
                  <h4>Disability Support</h4>
                  <p>Ensuring equal opportunities and accessibility for people with disabilities.</p>
                </div>
                <div className="focus-item">
                  <div className="focus-icon">📚</div>
                  <h4>Girl-Child Education</h4>
                  <p>Breaking barriers and promoting education for girls in rural and urban communities.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="activities" id="activities">
        <div className="container">
          <div className="section-header">
            <h2>Recent Activities</h2>
            <p>Our latest initiatives making a difference in communities</p>
          </div>
          <div className="activities-grid">
            <div className="activity-card">
              <img src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=250&fit=crop" alt="School Feeding Program" />
              <div className="card-content">
                <span className="date">December 15, 2024</span>
                <h3>School Feeding Program Launch</h3>
                <p>Launched a comprehensive school feeding program providing nutritious meals to over 500 children in rural schools.</p>
              </div>
            </div>
            <div className="activity-card">
              <img src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=250&fit=crop" alt="Widow Empowerment Workshop" />
              <div className="card-content">
                <span className="date">November 28, 2024</span>
                <h3>Widow Empowerment Workshop</h3>
                <p>Conducted skills training workshop for 150 widows, focusing on sustainable income generation and financial literacy.</p>
              </div>
            </div>
            <div className="activity-card">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop" alt="Accessibility Infrastructure" />
              <div className="card-content">
                <span className="date">November 10, 2024</span>
                <h3>Accessibility Infrastructure Project</h3>
                <p>Improved accessibility infrastructure in 3 schools, installing ramps and accessible facilities for students with disabilities.</p>
              </div>
            </div>
            <div className="activity-card">
              <img src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=250&fit=crop" alt="Girls Education Scholarship" />
              <div className="card-content">
                <span className="date">October 22, 2024</span>
                <h3>Girls Education Scholarship</h3>
                <p>Awarded scholarships to 75 girls from low-income families to pursue their secondary and tertiary education.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="chairman-message">
        <div className="container">
          <div className="message-content">
            <div className="chairman-photo">
              <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=300&h=300&fit=crop&crop=face" alt="Chairman AY Chindo" />
            </div>
            <div className="message-text">
              <h2>Message from the Chairman</h2>
              <blockquote>
                "Every child deserves a chance to dream, every widow deserves dignity and support, every person with disabilities deserves equal opportunities, and every girl deserves an education. At AY Chindo Foundation, we are not just changing lives - we are building a more inclusive and compassionate society for all."
              </blockquote>
              <cite>— AY Chindo, Chairman & Founder</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="impact-metrics">
        <div className="container">
          <div className="section-header">
            <h2>Our Impact</h2>
            <p>Measuring the difference we make together</p>
          </div>
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-number">2,500+</div>
              <div className="metric-label">Children Supported</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">800+</div>
              <div className="metric-label">Widows Empowered</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">450+</div>
              <div className="metric-label">People with Disabilities Assisted</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">1,200+</div>
              <div className="metric-label">Girls Educated</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">25</div>
              <div className="metric-label">Communities Served</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">15</div>
              <div className="metric-label">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>Voices of Hope</h2>
            <p>Stories from our beneficiaries and partners</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p>"Thanks to AY Chindo Foundation, my daughter is now in university. They didn't just give us hope - they gave us a future."</p>
              <cite>— Mary Okafor, Beneficiary Mother</cite>
            </div>
            <div className="testimonial-card">
              <p>"The skills training program changed my life completely. I now run my own business and can support my family with dignity."</p>
              <cite>— Grace Adebayo, Widow Empowerment Program</cite>
            </div>
            <div className="testimonial-card">
              <p>"The accessibility improvements in our school have made education truly inclusive. Every child now has equal opportunities to learn."</p>
              <cite>— James Okwu, School Principal</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <img src="/lovable-uploads/3ec2ad48-f4f7-4516-ab31-8ec8e022827f.png" alt="AY Chindo Foundation" />
              </div>
              <p>Transforming lives and building hope in communities across Nigeria and beyond.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#activities">Our Activities</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact Info</h3>
              <div className="contact-info">
                <p>📧 info@aychindofoundation.org</p>
                <p>📞 +234 (0) 803 XXX XXXX</p>
                <p>📍 Abuja, Nigeria</p>
              </div>
            </div>
            <div className="footer-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#" aria-label="Facebook">Facebook</a>
                <a href="#" aria-label="Twitter">Twitter</a>
                <a href="#" aria-label="Instagram">Instagram</a>
                <a href="#" aria-label="LinkedIn">LinkedIn</a>
              </div>
              <button className="btn-primary footer-donate">Donate Now</button>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 AY Chindo Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
