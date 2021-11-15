import React from 'react'
import {Link} from 'react-router-dom'
import './home.css'
import {Facebook, Instagram, Twitter, LinkedIn} from "@material-ui/icons";

export default function Home(){
    return (
        <main className='main'>
            <article className='intro'>
                    <h2 className={'title'}>Hi, I'm Gilbert</h2>
                   <p className='bio'>
                       I’m a cloud and DevOps leader, researcher, and educator. I teach a highly popular cloud computing graduate class at my local university, teach three classes at Pluralsight on enterprise cloud strategy, and write occasionally on my blog.
                   </p>
{/*<a href={"https://www.utah.edu/"} target={"_blank"}*/}
{/*                                                                     className='more'> U of U</a>*/}
                </article>
            <img alt='Gilbert'
                 src={'https://media-exp1.licdn.com/dms/image/C5603AQHPV2uU1cccgw/profile-displayphoto-shrink_800_800/0/1594174635747?e=1642636800&v=beta&t=ViASX9dgU-N3VYmdBlbq4TUMWkvTau5EjEzCFp8WtRY'}
                 className='me'/>
            <section id='homeCont'>

            </section>

        </main>
    )
}