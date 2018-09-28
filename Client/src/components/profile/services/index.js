import React, { Component, Fragment } from 'react'

class ServicesProfile extends Component {
    render() {
        return (
            <Fragment >
                <section className="colorlib-services" data-section="services">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                <span className="heading-meta">What I do?</span>
                                <h2 className="colorlib-heading">Here are some of my expertise</h2>
                            </div>
                        </div>
                        <div className="row row-pt-md">
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-1">
                                    <span className="icon">
                                        <i className="icon-bulb"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Innovative Ideas</h3>
                                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-2">
                                    <span className="icon">
                                        <i className="icon-data"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Software</h3>
                                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-3">
                                    <span className="icon">
                                        <i className="icon-phone3"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Application</h3>
                                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-4">
                                    <span className="icon">
                                        <i className="icon-layers2"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Graphic Design</h3>
                                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-5">
                                    <span className="icon">
                                        <i className="icon-data"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Software</h3>
                                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 text-center animate-box">
                                <div className="services color-6">
                                    <span className="icon">
                                        <i className="icon-phone3"></i>
                                    </span>
                                    <div className="desc">
                                        <h3>Application</h3>
                                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div id="colorlib-counter" className="colorlib-counters" style="background-image: url(images/cover_bg_1.jpg);" data-stellar-background-ratio="0.5">
                    <div className="overlay"></div>
                    <div className="colorlib-narrow-content">
                        <div className="row">
                        </div>
                        <div className="row">
                            <div className="col-md-3 text-center animate-box">
                                <span className="colorlib-counter js-counter" data-from="0" data-to="309" data-speed="5000" data-refresh-interval="50"></span>
                                <span className="colorlib-counter-label">Cups of coffee</span>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <span className="colorlib-counter js-counter" data-from="0" data-to="356" data-speed="5000" data-refresh-interval="50"></span>
                                <span className="colorlib-counter-label">Projects</span>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <span className="colorlib-counter js-counter" data-from="0" data-to="30" data-speed="5000" data-refresh-interval="50"></span>
                                <span className="colorlib-counter-label">Clients</span>
                            </div>
                            <div className="col-md-3 text-center animate-box">
                                <span className="colorlib-counter js-counter" data-from="0" data-to="10" data-speed="5000" data-refresh-interval="50"></span>
                                <span className="colorlib-counter-label">Partners</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ServicesProfile
