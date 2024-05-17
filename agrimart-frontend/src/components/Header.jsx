import React from 'react'

const Header = () => {
  return (
    <div>
        <header id="header" className="public-row">

            <div className="header-logo">
                <a href="/">AgriMart</a>
            </div>

            <nav id="header-nav-wrap">
                <ul className="header-main-nav">
                    <li className="current"><a className="smoothscroll" href="/#home" title="home">Trang chủ</a></li>
                    <li><a className="smoothscroll" href="/#about" title="about">Về chúng tôi</a></li>
                    <li><a className="smoothscroll" href="/#pricing" title="pricing">Bán hàng với AgriMart</a></li>
                    <li><a className="smoothscroll" href="/#testimonials" title="testimonials">Đánh giá</a></li>
                    <li><a className="smoothscroll" href="/#download" title="download">Tải xuống</a></li>
                </ul>

                <a href="/" title="sign-up" className="button button-primary cta">Đăng ký</a>
            </nav>

            <a className="header-menu-toggle" href="/"><span>Menu</span></a>

        </header> 
    </div>
  )
}

export default Header