import React from "react";
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <section className="sign-in">
            <div className="container-form">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src="assets/img/signin-image.jpg" alt="sign up"/></figure>
                        <Link to="/signup" className="signup-image-link"><u>Create an account</u></Link>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title">Sign up</h2>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" className="form-input" name="your_name" id="your_name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" className="form-input" name="your_pass" id="your_pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label htmlFor="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" name="signin" id="signin" className="form-input form-submit" value="Log in"/>
                            </div>
                        </form>
                        <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><Link to="#"><i className="display-flex-center zmdi zmdi-facebook"></i></Link></li>
                                <li><Link to="#"><i className="display-flex-center zmdi zmdi-twitter"></i></Link></li>
                                <li><Link to="#"><i className="display-flex-center zmdi zmdi-google"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
}

export default Login