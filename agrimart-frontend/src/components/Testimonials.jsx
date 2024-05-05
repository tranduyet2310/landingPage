import React, { useState } from 'react'

const Testimonials = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleClassName = () => {
        setIsActive(!isActive);
    }


  return (
    <div>
        <section id="testimonials">

            <div className="row">
                <div className="col-twelve">
                    <h1 className="intro-header aos-init aos-animate" data-aos="fade-up">What They Say About Our App.</h1>
                </div>   		
            </div>   	

            <div className="row owl-wrap">

                <div id="testimonial-slider" data-aos="fade-up" className="aos-init aos-animate">

                    <div className="slides owl-carousel owl-loaded owl-drag">
                        
                        <div className="owl-stage-outer owl-height" style={isActive ? {height: "515px"} : {height: "467px"}}>
                            <div className="owl-stage" 
                                style={isActive ? 
                                        {transform: 'translate3d(-1800px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '5400px'} : 
                                        {transform: 'translate3d(-2700px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '5400px'}}>
                                <div className="owl-item cloned" style={{width: "900px"}}>
                                    <div>
                                        <p> Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.</p> 
                                        <div className="testimonial-author">
                                            <img src="./public/images/avatars/user-02.jpg" alt="Author image"/>
                                            <div className="author-info">
                                                Steve Jobs
                                                <span className="position">CEO, Apple.</span>
                                            </div>
                                        </div>                 
                                    </div>
                                </div>
                                
                                <div className="owl-item cloned" style={{width: "900px"}}>
                                    <div>
                                        <p>
                                            This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.    
                                        </p>

                                        <div className="testimonial-author">
                                            <img src="./public/images/avatars/user-03.jpg" alt="Author image"/>
                                            <div className="author-info">
                                                John Doe
                                                <span>CEO, ABC Corp.</span>
                                            </div>
                                        </div>                                         
                                    </div>
                                </div>
                                
                                <div className={isActive ? "owl-item" : "owl-item active"} style={{width: "900px"}}>
                                    <div>
                                        <p>
                                            Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.
                                        </p> 

                                        <div className="testimonial-author">
                                            <img src="./public/images/avatars/user-02.jpg" alt="Author image"/>
                                            <div className="author-info">
                                                Steve Jobs
                                                <span className="position">CEO, Apple.</span>
                                            </div>
                                        </div>                 
                                    </div>
                                </div>
                                
                                <div className={isActive ? "owl-item active" : "owl-item"} style={{width: "900px"}}>
                                    <div>
                                        <p> 
                                            This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.    
                                        </p>

                                        <div className="testimonial-author">
                                            <img src="./public/images/avatars/user-03.jpg" alt="Author image"/>
                                            <div className="author-info">
                                                John Doe
                                                <span>CEO, ABC Corp.</span>
                                            </div>
                                        </div>                                         
                                    </div>
                                </div>
                                
                                <div className="owl-item cloned" style={{width: "900px"}}>
                                    <div>
                                        <p>
                                            Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.
                                        </p> 

                                        <div className="testimonial-author">
                                            <img src=".public/images/avatars/user-02.jpg" alt="Author image"/>
                                            <div className="author-info">
                                                Steve Jobs
                                                <span className="position">CEO, Apple.</span>
                                            </div>
                                        </div>                 
                                    </div>
                                </div>
                                
                                <div className="owl-item cloned" style={{width: "900px"}}>
                                
                                    <div>
                                        <p>
                                            This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.    
                                        </p>

                                        <div className="testimonial-author">
                                            <img src="./public/images/avatars/user-03.jpg" alt="Author image"/>
                                            <div className="author-info">
                                                John Doe
                                                <span>CEO, ABC Corp.</span>
                                            </div>
                                        </div>                                         
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="owl-nav disabled">
                            <div className="owl-prev">prev</div>
                            <div className="owl-next">next</div>
                        </div>
                    
                        <div className="owl-dots">
                            <div className={isActive ? "owl-dot active" : "owl-dot"} onClick={toggleClassName}>
                                <span></span>
                            </div>
                            
                            <div className={isActive ? "owl-dot" : "owl-dot active"} onClick={toggleClassName}>
                                <span></span>
                            </div>
                        </div>
                    </div>

                </div>    
                    
            </div>

        </section>
    </div>
  )
}

export default Testimonials