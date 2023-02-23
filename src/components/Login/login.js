import React from 'react';
import './css/login.css';
import './css/demo.css';
import './css/gaia.css';

import './css/fonts/pe-icon-7-stroke.css';


const Login = () => {
    return (
        <div>   



    <div className="section section-header">
        <div className="parallax filter filter-color-red">
            <div className="image"
                style={{backgroundImage: "url('./img/background.jpg')"}}>
            </div>
            <div class="container login-container">
            <div class="row">
                <div class="col-md-6 login-form-1">
                    <h3>Login </h3>
                    
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit" value="Login" />
                        </div>
                        <div class="form-group">
                            <a href="#" class="btnForgetPwd">Forget Password?</a>
                        </div>
                    
                </div>
                <div class="col-md-6 login-form-2">
                    <div class="login-logo">
                     
                    </div>
                    <h3 className="title-register">Register</h3>
                        <div class="form-group">
                            <input type="text" class="form-control" placeholder="Your Email *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control" placeholder="Your Password *" value="" />
                        </div>
                        <div class="form-group">
                            <input type="submit" class="btnSubmit btnsubmit-register" value="Register" />
                        </div>
                        <div class="form-group">
                            <a href="#" class="btnForgetPwd" value="Login">Forget Password?</a>
                        </div>
                   
                </div>
                </div>
                </div>
     
            </div>
        </div>
    </div>
    );
    }

export default Login;

