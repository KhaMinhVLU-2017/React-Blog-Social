import React, { Component } from 'react'
import './assert/css/animate.css'
import './assert/css/icomoon.css'
import './assert/css/flexslider.css'
import './assert/fonts/flaticon/font/flaticon.css'
import './assert/css/owl.carousel.min.css'
import './assert/css/owl.theme.default.min.css'
import './assert/css/style.css'
import './assert/js/modernizr-2.6.2.min.js'
import './assert/js/jquery.easing.1.3.js'
import './assert/js/jquery.waypoints.min.js'
import './assert/js/jquery.flexslider-min.js'
import './assert/js/owl.carousel.min.js'
import './assert/js/jquery.countTo.js'
import './assert/js/main.js'
/**
 * Component
 */

import HomeProfile from './home'
import AboutProfile from './about'
import ServicesProfile from './services'
import SkillProfile from './skills'
import EducationProfile from './education'
import ExperienceProfile from './experience'
import WorkProfile from './work'
import BlogProfile from './blog'
import ContactProfile from './contact'

class ProfileUser extends Component {
    render() {
        return (
            <div id="colorlib-page">
                <div className="container-wrap">
                    <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></a>
                    <aside id="colorlib-aside" role="complementary" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
                            <h1 id="colorlib-logo"><a href="index.html">Jackson Ford</a></h1>
                            <span className="position"><a href="#">UI/UX/Designer</a> in Philippines</span>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#" data-nav-section="home">Home</a></li>
                                    <li><a href="#" data-nav-section="about">About</a></li>
                                    <li><a href="#" data-nav-section="services">Services</a></li>
                                    <li><a href="#" data-nav-section="skills">Skills</a></li>
                                    <li><a href="#" data-nav-section="education">Education</a></li>
                                    <li><a href="#" data-nav-section="experience">Experience</a></li>
                                    <li><a href="#" data-nav-section="work">Work</a></li>
                                    <li><a href="#" data-nav-section="blog">Blog</a></li>
                                    <li><a href="#" data-nav-section="contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                        <div className="colorlib-footer">
                            <p><small>© {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright © All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}  <span>Demo Images: <a href="https://unsplash.com/" target="_blank">Unsplash.com</a></span></small></p>
                            <ul>
                                <li><a href="#"><i className="icon-facebook2" /></a></li>
                                <li><a href="#"><i className="icon-twitter2" /></a></li>
                                <li><a href="#"><i className="icon-instagram" /></a></li>
                                <li><a href="#"><i className="icon-linkedin2" /></a></li>
                            </ul>
                        </div>
                    </aside>
                </div>
                <div id="colorlib-main">
                    <HomeProfile />
                    <AboutProfile />
                    <ServicesProfile />
                    <SkillProfile />
                    <EducationProfile />
                    <ExperienceProfile />
                    <WorkProfile />
                    <BlogProfile />
                    <ContactProfile />
                </div>
            </div>
        )
    }
}

export default ProfileUser
