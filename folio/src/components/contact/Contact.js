import React from 'react'
import './contact.css'


export default function Contact() {

        return (

            <form>
              <header>
            <h1 className='talk'>Let's talk.</h1>
                      <p className='contact'>Get in touch via the form below, or by emailing <a href={"mailto: test@test.com"} target={'_blank'} className='email'>test@test.com</a>.</p>
           </header>
                <section className={'form'}>
                <label className={'label'}>
                Name: </label>
                <input type="text" name="name" placeholder={'Enter your name'} className={'infield'}/>

                <label className={'label'}>
                    Email Address:
                     </label>
                    <input type={'email'} name={'email'} placeholder={'Enter your email address'} className={'infield'}/>

                <label className={'label'}>
                    Message: </label>
                    <textarea placeholder={'Enter your message'} className={'infield'} id={'textarea'}/>

                <input type='submit' value={'Submit'} className='submit'/>
</section>
            </form>

        )

}