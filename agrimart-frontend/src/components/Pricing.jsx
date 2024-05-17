import React from 'react'

const Pricing = () => {
  return (
    <div>

        <section id="pricing">
            <div className="public-row pricing-content">

                <div className="col-four pricing-intro">
                    <h1 className="intro-header" data-aos="fade-up">Bán hàng với AgriMart</h1>

                    <p data-aos="fade-up">
                        AgriMart cung cấp miễn phí toàn bộ các phần mềm quản lí kho hàng, quản lí sản phẩm, quản lý đơn hàng v.v.. cho các Nhà cung cấp khi tham gia bán hàng trên sàn. <br/>
                        Miễn phí toàn bộ các loại phí cho các Nhà cung cấp khi tham gia bán hàng trên sàn. Bao gồm cả phí marketing.
                    </p>
                </div>

                <div className="col-eight pricing-table">
                    <div className="public-row">

                        <div className="col-six plan-wrap">
                            <div className="plan-block" data-aos="fade-up">

                                <div className="plan-top-part">
                                    <h3 className="plan-block-title">Hỗ trợ công nghệ</h3>
                        
                                    <p className="plan-block-per">Hoàn toàn miễn phí</p>
                                </div>

                                <div className="plan-bottom-part">  

                                    <ul className="plan-block-features">
                                        <li>Đội ngũ nhân viên hỗ trợ <span>24/7</span></li>
                                        <li>Tài liệu hướng dẫn bài bản từ cơ bản tới nâng cao</li>
                                        <li>Cung cấp tiện ích bán hàng chuyên nghiệp</li>
                                        <li>Quảng bá sản phẩm-truyền thông số</li>
                                        <li>Hỗ trợ vận chuyển, lưu trữ chuyên dụng</li>
                                    </ul>
                                </div>

                            </div>
                        </div> 

                        <div className="col-six plan-wrap">
                            <div className="plan-block primary" data-aos="fade-up">

                                <div className="plan-top-part">
                                    <h3 className="plan-block-title">Chuyển đổi số</h3>
                                    <p className="plan-block-per">Đơn giản, tiện lợi</p>
                                </div>

                                <div className="plan-bottom-part">
                                    <ul className="plan-block-features">
                                        <li>Mở rộng kênh bán hàng</li>
                                        <li>Kết nối thanh toán hiện đại, thanh khoản linh hoạt</li>
                                        <li>Chiết khấu cho mọi nhà cung cấp</li>
                                        <li>Tặng <span>100%</span> phí khởi tạo gian hàng</li>
                                        <li>Cơ sở dữ liệu cập nhật, an toàn, truy xuất thông tin</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div> 

            </div>
        </section>
    </div>
  )
}

export default Pricing