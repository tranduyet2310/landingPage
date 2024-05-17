import React, { useState } from 'react'

const Testimonials = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleClassName = () => {
        setIsActive(!isActive);
    }


  return (
    <div>
        <section id="testimonials">

            <div className="public-row">
                <div className="col-twelve">
                    <h1 className="intro-header aos-init aos-animate" data-aos="fade-up">Khách hàng nói gì về chúng tôi.</h1>
                </div>   		
            </div>   	

            <div className="public-row owl-wrap">

                <div id="testimonial-slider" data-aos="fade-up" className="aos-init aos-animate">

                    <div className="slides owl-carousel owl-loaded owl-drag">
                        
                        <div className="owl-stage-outer owl-height" style={isActive ? {height: "515px"} : {height: "580px"}}>
                            <div className="owl-stage" 
                                style={isActive ? 
                                        {transform: 'translate3d(-1800px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '5400px'} : 
                                        {transform: 'translate3d(-2700px, 0px, 0px)', transition: 'all 0.25s ease 0s', width: '5400px'}}>
                                <div className="owl-item cloned" style={{width: "900px"}}>
                                    <div>
                                        <p>
                                            Ứng dụng dễ sử dụng, đơn giản và dễ thao tác. Giao hàng nhanh và sản phẩm đúng với chất lượng như mô tả. Đặc biệt rất tiện lợi trong việc có thể đặt trước số lượng sản phẩm cần, trước khi tới thời điểm thu hoạch với nhà cung cấp, vừa đảm sản phẩm tươi lại có giá rẻ hơn.
                                        </p> 
                                        <div className="testimonial-author">
                                            <img src="./public/images/avatars/user_05.jpg" alt="Author"/>
                                            <div className="author-info">
                                                Nguyễn Thị Trúc Nhi{
                                                    <span className="position">Người dùng.</span>
                                                }
                                            </div>
                                        </div>                 
                                    </div>
                                </div>
                                
                                <div className="owl-item cloned" style={{width: "900px"}}>
                                    <div>
                                        <p>
                                            Bán hàng trên AgriMart giúp tôi dễ tiếp cận với khách hàng hơn. Thay vì chỉ bán cho các thương lái hoặc mang ra các chợ truyền thống, thì việc sử dụng ứng dụng để giới thiệu và quảng bá sản phẩm có thể thực hiện trước khi đến thời điểm thu hoạch. Khi đến lúc thu hoạch thì xác định được đầu ra ngay mà không phải loay hoay tìm kiếm các kênh để bán. Vừa giúp giảm chi phí bảo quản, lại đảm bảo chất lượng sản phẩm khi đến tay khách hàng.    
                                        </p>

                                        <div className="testimonial-author">
                                            <img src="./public/images/avatars/user_04.jpg" alt="Author"/>
                                            <div className="author-info">
                                                Trần Thế Duyệt{
                                                    <span>Nhà cung cấp</span>
                                                }
                                            </div>
                                        </div>                                         
                                    </div>
                                </div>
                                
                                <div className={isActive ? "owl-item" : "owl-item active"} style={{width: "900px"}}>
                                    <div>
                                        <p>
                                            Ứng dụng dễ sử dụng, đơn giản và dễ thao tác. Giao hàng nhanh và sản phẩm đúng với chất lượng như mô tả. Đặc biệt rất tiện lợi trong việc có thể đặt trước số lượng sản phẩm cần, trước khi tới thời điểm thu hoạch với nhà cung cấp, vừa đảm sản phẩm tươi lại có giá rẻ hơn.
                                        </p> 

                                        <div className="testimonial-author">
                                            <img src="./public/images/avatars/user_05.jpg" alt="Author"/>
                                            <div className="author-info">
                                               Nguyễn Thị Trúc Nhi{
                                                    <span className="position">Người dùng.</span>
                                                }
                                            </div>
                                        </div>                 
                                    </div>
                                </div>
                                
                                <div className={isActive ? "owl-item active" : "owl-item"} style={{width: "900px"}}>
                                    <div>
                                        <p> 
                                            Bán hàng trên AgriMart giúp tôi dễ tiếp cận với khách hàng hơn. Thay vì chỉ bán cho các thương lái hoặc mang ra các chợ truyền thống, thì việc sử dụng ứng dụng để giới thiệu và quảng bá sản phẩm có thể thực hiện trước khi đến thời điểm thu hoạch. Khi đến lúc thu hoạch thì xác định được đầu ra ngay mà không phải loay hoay tìm kiếm các kênh để bán. Vừa giúp giảm chi phí bảo quản, lại đảm bảo chất lượng sản phẩm khi đến tay khách hàng.    
                                        </p>

                                        <div className="testimonial-author">
                                            <img src="./public/images/avatars/user_04.jpg" alt="Author"/>
                                            <div className="author-info">
                                                Trần Thế Duyệt{
                                                    <span>Nhà cung cấp</span>
                                                }
                                            </div>
                                        </div>                                         
                                    </div>
                                </div>
                                
                                <div className="owl-item cloned" style={{width: "900px"}}>
                                    <div>
                                        <p>
                                            Ứng dụng dễ sử dụng, đơn giản và dễ thao tác. Giao hàng nhanh và sản phẩm đúng với chất lượng như mô tả. Đặc biệt rất tiện lợi trong việc có thể đặt trước số lượng sản phẩm cần, trước khi tới thời điểm thu hoạch với nhà cung cấp, vừa đảm sản phẩm tươi lại có giá rẻ hơn.
                                        </p> 

                                        <div className="testimonial-author">
                                            <img src=".public/images/avatars/user_05.jpg" alt="Author"/>
                                            <div className="author-info">
                                               Nguyễn Thị Trúc Nhi{
                                                    <span className="position">Người dùng.</span>
                                                }
                                            </div>
                                        </div>                 
                                    </div>
                                </div>
                                
                                <div className="owl-item cloned" style={{width: "900px"}}>
                                
                                    <div>
                                        <p>
                                            Bán hàng trên AgriMart giúp tôi dễ tiếp cận với khách hàng hơn. Thay vì chỉ bán cho các thương lái hoặc mang ra các chợ truyền thống, thì việc sử dụng ứng dụng để giới thiệu và quảng bá sản phẩm có thể thực hiện trước khi đến thời điểm thu hoạch. Khi đến lúc thu hoạch thì xác định được đầu ra ngay mà không phải loay hoay tìm kiếm các kênh để bán. Vừa giúp giảm chi phí bảo quản, lại đảm bảo chất lượng sản phẩm khi đến tay khách hàng.    
                                        </p>

                                        <div className="testimonial-author">
                                            <img src="./public/images/avatars/user_04.jpg" alt="Author"/>
                                            <div className="author-info">
                                                Trần Thế Duyệt{
                                                    <span>Nhà cung cấp</span>
                                                }
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