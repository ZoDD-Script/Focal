import React from 'react'

const Services = () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">Elevate your experience with our exceptional service.</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Commercial Installation</h4>
            <p className="text-muted">Elevate your business environment with our commercial installation service. From retail spaces to corporate offices, our team ensures that your lighting not only enhances the aesthetics but also optimizes energy efficiency and productivity.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Home Installation</h4>
            <p className="text-muted">Transform your living spaces into areas of beauty and relaxation with Focale's home installation service. Our specialists work with you to create lighting that complements your home's design, enhancing both functionality and mood.</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary"></i>
              <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 className="service-heading">Consultation</h4>
            <p className="text-muted">Not sure where to start? Our lighting consultation service provides personalized advice to match your unique needs. From selecting the right fixtures to planning the layout, we guide you through every step to achieve the perfect lighting solution for your space.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services