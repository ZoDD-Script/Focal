import React from 'react'
import { cat1 } from '../assets/img'

export default ({ portfolioLinks }) => {
    return (
        <section className="bg-light page-section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Categories</h2>
              <h3 className="section-subheading text-muted">Dive into our curated selection for every room and style.</h3>
            </div>
          </div>
          <div className="row">
            {
                portfolioLinks && portfolioLinks.map(({ title, caption, image }, index) => 
                    <div className="col-md-4 col-sm-6 portfolio-item" key={title}>
                        <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                            <div className="portfolio-hover">
                                <div className="portfolio-hover-content">
                                    <i className="fa fa-plus fa-3x"></i>
                                </div>
                            </div>
                            <img className="img-fluid" src={ image } alt="portfolio_img" />
                        </a>
                        <div className="portfolio-caption">
                            <h4>{ title }</h4>
                            {/* <p className="text-muted">{ caption }</p> */}
                        </div>
                    </div>
                )
            }
          </div>
        </div>
      </section>
    )
}