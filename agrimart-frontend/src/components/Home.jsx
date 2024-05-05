import React from 'react'

const Home = () => {
  return (
    <div>
        <section id="home">

            <div className="overlay"></div>
            <div className="home-content">        

                <div className="row contents">                     
                    <div className="home-content-left">

                        <h3 data-aos="fade-up">Welcome to Dazzle</h3>

                        <h1 data-aos="fade-up">
                            Creative Landing <br/>
                            Page to Showcase <br/>
                            Your Amazing App.
                        </h1>

                        <div className="buttons" data-aos="fade-up">
                            <a href="#download" className="smoothscroll button stroke">
                                <span className="icon-circle-down" aria-hidden="true"></span>
                                Download App
                            </a>
                            <a href="http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=39b54a" data-lity className="button stroke">
                                <span className="icon-play" aria-hidden="true"></span>
                                Watch Video
                            </a>
                        </div>                                         

                    </div>

                    <div className="home-image-right">
                        <img src="./public/images/iphone-app-470.png" 
                             srcSet="./public/images/iphone-app-470.png 1x, ./public/images/iphone-app-940.png 2x"  
                             data-aos="fade-up"/>
                    </div>
                </div>

            </div>

            <ul className="home-social-list">
                <li>
                    <a href="#"><i className="fa fa-facebook-square"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                </li>
                <li>
                    <a href="#"><i className="fa fa-youtube-play"></i></a>
                </li>
            </ul>

            <div className="home-scrolldown">
                <a href="#about" className="scroll-icon smoothscroll">
                    <span>Scroll Down</span>
                    <i className="icon-arrow-right" aria-hidden="true"></i>
                </a>
            </div>

        </section> 
        
    </div>
  )
}

export default Home