import React  from 'react';
import './css/contact.css';
const Contact = () => {
    return (
        <div>   
            <div className="section section-header">
                <div className="parallax filter filter-color-red">
                    <div className="image"
                        style={{backgroundImage: "url('./img/background.jpg')"}}>
                    </div>
                    <div className="container contact-container ">
                        <div className="row">
                            <h1 className="color-contact">Contact</h1>
                           
   
                            <form className='form-label-left'>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="name">
                                        Name
                                    </label>
                                    <input className="form-control" type="text" id="name" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="email">
                                        Email
                                    </label>
                                    <input className="form-control" type="email" id="email" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="message">
                                        Message
                                    </label>
                                    <textarea className="form-control" id="message" required />
                                </div>
                                <button className="btn btn-danger btn-send-contact" type="submit"> Submit</button>
                            </form>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

