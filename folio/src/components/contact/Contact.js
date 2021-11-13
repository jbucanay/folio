import React from 'react'
import './contact.css'


export default function Contact() {

        return (

            <form>
              <header>
            <h1 className='talk'>Let's talk.</h1>
                      <p className='contact'>Get in touch via the form below, or by emailing <a href={"mailto: test@test.com"} target={'_blank'} className='email'>test@test.com</a>.</p>
           </header>
                <label>
                Name:
                <input type="text" name="name" />
                </label>
            <input type="submit" value="Submit" />
            </form>

        )

}