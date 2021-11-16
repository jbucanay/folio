import React from 'react'
import './blog.css'

export default class Blog extends React.Component {
    render() {
        return (
            <section>
                <img alt='blog header'
                     src='https://images.unsplash.com/photo-1589271755419-b813a577ad42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2109&q=80'
                     className={'therock'}/>
                <article id={'blogCont'}>
                    <section className='articleCard'>
                        <h1>
                            Header
                        </h1>
                        <p className={'story'}>Date</p>
                        <img alt='card1image'
                             src={'https://images.newrepublic.com/54425910ac41fdb1bce1e246493b5fb0ba69a443.jpeg'}
                             className={'cardImage'}/>
                        <p className='story'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley
                            of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                            passages,
                            and more recently with desktop publishing software like Aldus PageMaker including versions
                            of
                            Lorem Ipsum.</p>
                        <button>READ MORE</button>
                    </section>
                    <section className='filter'>
                        <ul id='recent'>
                            <h3>Recent Posts</h3>
                            <li>First in list</li>
                            <li>Second in list</li>
                            <li>Third in list</li>
                            <li>Last in list</li>
                        </ul>
                        <ul id='categories'>
                            <h3>Categories</h3>
                            <li>First category</li>
                            <li>Second category</li>
                            <li>Third category</li>
                            <li>Last category</li>
                        </ul>
                    </section>
                </article>
            </section>
        )
    }
}