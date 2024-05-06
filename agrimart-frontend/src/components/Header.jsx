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
                    <li className="current"><a className="smoothscroll" href="index.html#home" title="home">Trang chủ</a></li>
                    <li><a className="smoothscroll" href="index.html#about" title="about">Về chúng tôi</a></li>
                    <li><a className="smoothscroll" href="index.html#pricing" title="pricing">Bán hàng với AgriMart</a></li>
                    <li><a className="smoothscroll" href="index.html#testimonials" title="testimonials">Đánh giá</a></li>
                    <li><a className="smoothscroll" href="#download" title="download">Tải xuống</a></li>
                </ul>

                <a href="index.html" title="sign-up" className="button button-primary cta">Đăng ký</a>
            </nav>

            <a className="header-menu-toggle" href="index.html"><span>Menu</span></a>

        </header> 
    </div>
  )
}

export default Header