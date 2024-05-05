import React from 'react'

const Header = () => {
  return (
    <div>
        <header id="header" className="row">

            <div className="header-logo">
                <a href="index.html">AgriMart</a>
            </div>

            <nav id="header-nav-wrap">
                <ul className="header-main-nav">
                    <li className="current"><a className="smoothscroll" href="index.html#home" title="home">Home</a></li>
                    <li><a className="smoothscroll" href="index.html#about" title="about">About</a></li>
                    <li><a className="smoothscroll" href="index.html#pricing" title="pricing">Pricing</a></li>
                    <li><a className="smoothscroll" href="index.html#testimonials" title="testimonials">Testimonials</a></li>
                    <li><a className="smoothscroll" href="#download" title="download">Download</a></li>
                </ul>

                <a href="index.html" title="sign-up" className="button button-primary cta">Sign Up</a>
            </nav>

            <a className="header-menu-toggle" href="index.html"><span>Menu</span></a>

        </header> 
    </div>
  )
}

export default Header