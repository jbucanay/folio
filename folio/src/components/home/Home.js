import React from 'react'
import {Link} from 'react-router-dom'

export default function Home(){
    return (
       <section>
           <header>
               <h1>Hi, I'm gilbert</h1>
           </header>
           <article>
               <h2>Software Developer. Content Manager</h2>
               <p>Multidisciplinary designer who hacks at, makes and occasionally breaks things.
Product Design Director on the team behind <a href={"https://www.utah.edu/"} target={"_blank"}> U of U. </a>
Less moody in real life. ✌️
<Link to={'/about'}>Learn more</Link>ink   </p>
           </article>
       </section>
    )
}