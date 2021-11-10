import React from 'react'
import {Link} from 'react-router-dom'
export default function About(){
    return (
        <section>
        <header>
            <h1>I build value by design.</h1>
        </header>
            <p>
                I’m Nad Chishtie, but you can just call me Nad.
            </p>
            <p>
                Originally hailing from the UK 🇬🇧 for the last decade or so I’ve been honing my skills in design, production and management roles building products for the web, mobile, games and, more recently, VR & AR.
            </p>
            <p>
                I strive to create elegant solutions that surprise and delight users, while keeping complex technical dependencies in mind for implementation, scalability and developer sanity.
            </p>
            <p>
                I’ve worked with small, agile teams on skunkworks projects and larger development teams with product lifecycles spanning multiple years.
            </p>
            <p>
                Depending on the team, resources and deliverables I’ve worn many hats over the years - holding titles like Product Designer, UI Designer, UX Designer, Front-end Developer, Growth Lead, Producer, Product Manager & Product Owner.
            </p>
            <p>
                I also occasionally give talks on design and product development.
            </p>
            <p>

Have an interesting project? <Link to={'/contact'}>Let's talk</Link>.
            </p>
        </section>
    )
}