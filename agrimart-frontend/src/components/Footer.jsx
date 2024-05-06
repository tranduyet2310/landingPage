import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>

            <div className="footer-main">
                <div className="row">

                    <div className="col-three md-1-3 tab-full footer-info">

                        <div className="footer-logo"></div>

                        <p>Hệ sinh thái nông nghiệp ứng dụng công nghệ. Mang nông sản xanh, sạch với giá hợp lý đến mọi người</p>

                        <ul className="footer-social-list">
                            <li>
                                <a href="#"><i className="fa fa-facebook-square"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-behance"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                            </li>
                        </ul>


                    </div> 

                    <div className="col-three md-1-3 tab-1-2 mob-full footer-contact">

                        <h4>Liên hệ</h4>

                        <p>
                            141 đường Chiến Thắng<br/>
                            xã Tân Triều, huyện Thanh Trì <br/>
                            thành phố Hà Nội, Việt Nam<br/>
                        </p>

                        <p>
                            agrimart@gmail.com <br/>
                            Phone: (+84) 0999 999 999 <br/>
                            Fax: (+84) 123 4567
                        </p>

                    </div> 

                    <div className="col-two md-1-3 tab-1-2 mob-full footer-site-links">

                        <h4>Site Links</h4>

                        <ul className="list-links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>

                    </div>

                    <div className="col-four md-1-2 tab-full footer-subscribe">

                        <h4>Nhận thông báo</h4>

                        <p>Nhận thông báo về các chương trình khuyến mãi đặc biệt và bản cập nhật mới nhất của ứng dụng sớm nhất.</p>

                        <div className="subscribe-form">

                            <form id="mc-form" className="group" noValidate>

                                <input type="email" defaultValue="" name="EMAIL" className="email" id="mc-email" placeholder="Địa chỉ email" required=""/>

                                <input type="submit" name="subscribe" defaultValue="Send"/>

                                <label htmlFor="mc-email" className="subscribe-message"></label>

                            </form>

                        </div>

                    </div>

                </div> 
            </div> 


            <div className="footer-bottom">

                <div className="row">

                    <div className="col-twelve">
                        <div className="copyright">
                            <span>© Bản quyền thuộc về AgriMart 2024.</span>
                            <span>Thiết kế bởi <a href="http://www.styleshout.com/">styleshout</a></span>
                        </div>

                        <div id="go-top" style={{ display: "block" }}>
                            <a className="smoothscroll" title="Back to Top" href="#top"><i className="icon-arrow-up"></i></a>
                        </div>
                    </div>

                </div> 

            </div>

        </footer>
    </div>
  )
}

export default Footer