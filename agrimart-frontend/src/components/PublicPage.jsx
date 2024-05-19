import React from 'react'
import Testimonials from './Testimonials'
import Header from './Header'
import HomeLandingPage from "./HomeLandingPage";
import About from './About'
import Pricing from './Pricing'
import Download from './Download'
import Footer from './Footer'
import Preloader from './PreLoader'
import { Helmet } from 'react-helmet'

const PublicPage = () => {
  return (
    <div>
      <Helmet>
        <link rel="stylesheet" href="public/css/base.css" />
        <link rel="stylesheet" href="public/css/vendor.css" />
        <link rel="stylesheet" href="public/css/main.css" />
        <script src="public/js/modernizr.js" />
        <script src="public/js/pace.min.js" />
      </Helmet>

      <Header />
      <HomeLandingPage />
      <About />
      <Pricing />
      <Testimonials />
      <Download />
      <Footer />
      <Preloader />
    </div>
  );
}

export default PublicPage