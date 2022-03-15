import React from 'react';
import { Link } from 'react-router-dom'


const ShopDetail = () => {
    return (
    <div>
        <section className="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="breadcrumb__text">
                            <h2>Vegetable’s Package</h2>
                            <div className="breadcrumb__option">
                                <Link to="./index.html">Home</Link>
                                <Link to="./index.html">Vegetables</Link>
                                <span>Vegetable’s Package</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="product-details spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__pic">
                            <div className="product__details__pic__item">
                                <img className="product__details__pic__item--large"
                                    src="img/product/details/product-details-1.jpg" alt=""/>
                            </div>
                            <div className="product__details__pic__slider owl-carousel">
                                <img data-imgbigurl="img/product/details/product-details-2.jpg"
                                    src="img/product/details/thumb-1.jpg" alt=""/>
                                <img data-imgbigurl="img/product/details/product-details-3.jpg"
                                    src="img/product/details/thumb-2.jpg" alt=""/>
                                <img data-imgbigurl="img/product/details/product-details-5.jpg"
                                    src="img/product/details/thumb-3.jpg" alt=""/>
                                <img data-imgbigurl="img/product/details/product-details-4.jpg"
                                    src="img/product/details/thumb-4.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__text">
                            <h3>Vetgetable’s Package</h3>
                            <div className="product__details__rating">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-half-o"></i>
                                <span>(18 reviews)</span>
                            </div>
                            <div className="product__details__price">$50.00</div>
                            <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                                vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                                quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                            <div className="product__details__quantity">
                                <div className="quantity">
                                    <div className="pro-qty">
                                        <input type="text" value="1"/>
                                    </div>
                                </div>
                            </div>
                            <Link to="/" className="primary-btn">ADD TO CARD</Link>
                            <Link to="/" className="heart-icon"><span className="icon_heart_alt"></span></Link>
                            <ul>
                                <li><b>Availability</b> <span>In Stock</span></li>
                                <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                                <li><b>Weight</b> <span>0.5 kg</span></li>
                                <li><b>Share on</b>
                                    <div className="share">
                                        <Link to="/"><i className="fa fa-facebook"></i></Link>
                                        <Link to="/"><i className="fa fa-twitter"></i></Link>
                                        <Link to="/"><i className="fa fa-instagram"></i></Link>
                                        <Link to="/"><i className="fa fa-pinterest"></i></Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="product__details__tab">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <Link className="nav-link active" data-toggle="tab" to="#tabs-1" role="tab"
                                        aria-selected="true">Description</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-toggle="tab" to="#tabs-2" role="tab"
                                        aria-selected="false">Information</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" data-toggle="tab" to="#tabs-3" role="tab"
                                        aria-selected="false">Reviews <span>(1)</span></Link>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Infomation</h6>
                                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus
                                            suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam
                                            vehicula elementum sed sit amet dui. Donec rutrum congue leo eget malesuada.
                                            Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur arcu erat,
                                            accumsan id imperdiet et, porttitor at sem. Praesent sapien massa, convallis a
                                            pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula
                                            elementum sed sit amet dui. Vestibulum ante ipsum primis in faucibus orci luctus
                                            et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam
                                            vel, ullamcorper sit amet ligula. Proin eget tortor risus.</p>
                                            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                            ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                            elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                            porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                            nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed
                                            porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum
                                            sed sit amet dui. Proin eget tortor risus.</p>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-2" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Infomation</h6>
                                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                            Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                            sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                            eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                            sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                            diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                            Proin eget tortor risus.</p>
                                        <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Lorem
                                            ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit aliquet
                                            elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum
                                            porta. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus
                                            nibh. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                                    </div>
                                </div>
                                <div className="tab-pane" id="tabs-3" role="tabpanel">
                                    <div className="product__details__tab__desc">
                                        <h6>Products Infomation</h6>
                                        <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                                            Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus.
                                            Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam
                                            sit amet quam vehicula elementum sed sit amet dui. Donec rutrum congue leo
                                            eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Praesent
                                            sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac
                                            diam sit amet quam vehicula elementum sed sit amet dui. Vestibulum ante
                                            ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                            Proin eget tortor risus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="related-product">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title related__product__title">
                            <h2>Related Product</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/product/product-1.jpg">
                                <ul className="product__item__pic__hover">
                                    <li><Link to="/"><i className="fa fa-heart"></i></Link></li>
                                    <li><Link to="/"><i className="fa fa-retweet"></i></Link></li>
                                    <li><Link to="/"><i className="fa fa-shopping-cart"></i></Link></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><Link to="/">Crab Pool Security</Link></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/product/product-2.jpg">
                                <ul className="product__item__pic__hover">
                                    <li><Link to="/"><i className="fa fa-heart"></i></Link></li>
                                    <li><Link to="/"><i className="fa fa-retweet"></i></Link></li>
                                    <li><Link to="/"><i className="fa fa-shopping-cart"></i></Link></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><Link to="/">Crab Pool Security</Link></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/product/product-3.jpg">
                                <ul className="product__item__pic__hover">
                                    <li><Link to="/"><i className="fa fa-heart"></i></Link></li>
                                    <li><Link to="/"><i className="fa fa-retweet"></i></Link></li>
                                    <li><Link to="/"><i className="fa fa-shopping-cart"></i></Link></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><Link to="/">Crab Pool Security</Link></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="product__item">
                            <div className="product__item__pic set-bg" data-setbg="img/product/product-7.jpg">
                                <ul className="product__item__pic__hover">
                                    <li><Link to="/"><i className="fa fa-heart"></i></Link></li>
                                    <li><Link to="/"><i className="fa fa-retweet"></i></Link></li>
                                    <li><Link to="/"><i className="fa fa-shopping-cart"></i></Link></li>
                                </ul>
                            </div>
                            <div className="product__item__text">
                                <h6><Link to="/">Crab Pool Security</Link></h6>
                                <h5>$30.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default ShopDetail