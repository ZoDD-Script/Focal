import React from 'react'
import { bestsellers1, bestsellers2, bestsellers3, bestsellers4 } from '../assets/img'

const About = () => {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Best Seller</h2>
            <h3 className="section-subheading text-muted">Discover our selection of timeless classics that have stood the test of time.</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src={bestsellers1} alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    {/* <h4>2009-2011</h4> */}
                    <h4 className="subheading">Oval Ring LED</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Looking for a unique lighting fixture that will elevate your home or office space? Look no further than this favorite of constructors everywhere. With its minimalistic finish that complements both small and large spaces, it creates natural light without any glare or flickering. The mercury-free light is perfect for use in your living room, bedroom, bathroom, kitchen, office, coffee house, bar, and more.</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src={bestsellers2} alt=""/>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    {/* <h4>March 2011</h4> */}
                    <h4 className="subheading">PB85R Panel Light</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">The design of this lighting fixture prioritizes your comfort. Its soft-touch switches enable you to switch your lights on and off effortlessly, creating a stress-free experience. The contemporary style is stunning and adds an element of sophistication to any space. With the option to mount the 2-way switch in two different positions, it delivers added convenience and functionality. It works well in both new construction and refurbishment projects and complements both dark and bright decor.</p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src={bestsellers3} alt=""/>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    {/* <h4>December 2012</h4> */}
                    <h4 className="subheading">Focale B41 Double Gang Grey</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">Bring a touch of sophistication to your home with this LED Drop light that is designed to complement both classical and modern decor styles. The light source is made from quality dust-proof materials and features warm and cool light options, providing a bright and beautiful glow that will brighten up any room. This easy-to-install fixture also features a pendant control for height management, making it a convenient choice for any space. Whether you're looking to brighten up your hallways, stairs, or other spaces, this LED pendant light is a great choice</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src={bestsellers4} alt=""/>
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    {/* <h4>July 2014</h4> */}
                    <h4 className="subheading">Kulgony Pendant Light</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">The choice for developers looking for unique lighting fixtures to level-up clients' home/office space. Built to serve, built to last, and perfect for both small/large spaces. It's easy to install and requires little to zero maintenance. environment-friendly, zero-glare materials help create natural light in your home or office space. No flickering, mercury-free light. Perfect for use in your living room, bedroom, bathroom, kitchen, office, coffee house, bar, etc.</p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>Be Part
                    <br/>Of Our
                    <br/>Story!</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About