import React from 'react'
import './contact.css'


export default function Contact() {

        return (



                <div className="row">
                        <h1 className='talk'>Let's talk.</h1>

                <p className='contact'>Get in touch via the form below, or by emailing <a href={"mailto: test@test.com"} target={'_blank'} className='email'>test@test.com</a>.</p>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="Enter your name" id="first_name" type="text" className="validate" />
                                    <label htmlFor="first_name">Name: </label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" />
                                    <label htmlFor="last_name">Last Name</label>
                            </div>

                        </div>

                    </form>
                </div>

        )

}