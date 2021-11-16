import React from 'react'
import './blog.css'

export default class Blog extends React.Component {
    render() {
        return (
            <article id={'blogCont'}>
                <img alt='blog header'
                     src='https://images.squarespace-cdn.com/content/v1/57fff29dc534a5a6fdf029dd/1477764637838-XVEGO7Y5MV11GVG02IK1/image-asset.jpeg'/>
                <section className='articleCard'>
                    <h1>
                        Header
                    </h1>
                    <p>Date</p>
                    <img alt='card1image'
                         src={'https://images.newrepublic.com/54425910ac41fdb1bce1e246493b5fb0ba69a443.jpeg'}/>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.</p>
                    <button>READ MORE</button>
                </section>
                <ul id='recent'>
                    <li>First in list</li>
                    <li>Second in list</li>
                    <li>Third in list</li>
                    <li>Last in list</li>

                </ul>
                <ul id='categories'>
                    <li>First category</li>
                    <li>Second category</li>
                    <li>Third category</li>
                    <li>Last category</li>
                </ul>
            </article>
        )
    }
}