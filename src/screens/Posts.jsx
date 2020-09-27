import React, { useEffect, useState } from 'react'
import firebase from '../firebase'
import './Posts.css'
import LatestPost from '../components/LatestPost'
import { Subtitle, Title } from '../components/layout'
// import PopularPosts from '../components/PopularPosts';

export default function Posts() {
const [posts, setPosts] = useState([])

useEffect(() => {
    const fetchData = async () => {
        const db = firebase.firestore()
        const data = await db.collection('posts').get()
        setPosts(data.docs.map(doc => doc.data()))
    }
    fetchData()
}, [])

let popularArr = [];
const renderPosts = () => {
    for (let i = 1; i < 4; i++) {
        const element = posts[i];
        popularArr.push(element)
        
    }
    if (posts.length) {
        return (
            <div class="tile is-ancestor px-3 py-3">
                <div class="tile is-vertical">
                    <div class="tile">
                    <div class="tile is-parent is-vertical is-7">
                        <LatestPost/>
                    </div>
                    <div class="tile is-parent is-vertical">
                        <Title title='Popular Posts' size={2} />
                        {/* START OF MAP COMPONENT */}
                        <article class="tile is-child box notification is-primary">
                            <div className="columns is-mobile">
                                <div className="column is-4 has-text-centered">   
                                    <figure class="image is-128x128">
                                        <img src="https://bulma.io/images/placeholders/128x128.png" alt='random' />
                                    </figure>
                                </div>
                                <div className="column">
                                    <div className='is-flex' style={{justifyContent: 'space-between'}}>
                                        <Subtitle title='Real Estate Investing Basics' style={{fontSize: '.8rem', background: 'blue', padding: '.25em'}}/>
                                        <Subtitle title='Sep 23, 2020' style={{fontSize: '.8rem'}}/>
                                    </div>
                                    <div>
                                        <Title title='BRRRR Math: A Numeric Breakdown of Buy, Rehab, Rent, Refinance, Repeat' size='6' />
                                    </div>
                                    <div className='is-flex' style={{alignItems: 'center', justifyContent:'flex-start', padding: '.5em 0'}}>
                                        <figure class="image is-48x48">
                                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" className='is-rounded'/>
                                        </figure>
                                        <Subtitle title='Author Name' className='pl-2'/>
                                    </div>
                                </div>
                            </div>
                        </article>
                        {/* END OF MAP COMPONENT */}
                        <article class="tile is-child box notification is-warning">
                            <p class="title">...tiles</p>
                            <p class="subtitle">Bottom tile</p>
                        </article>
                        <article class="tile is-child box notification is-danger">
                            <p class="title">...tiles</p>
                            <p class="subtitle">Bottom tile</p>
                        </article>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div class="fa-3x" style={{width:'100%',height:'40vh', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
                <i class="fas fa-spinner fa-spin"></i>
                <i class="fas fa-circle-notch fa-spin"></i>
                <i class="fas fa-sync fa-spin"></i>
                <i class="fas fa-cog fa-spin"></i>
                <i class="fas fa-spinner fa-pulse"></i>
                <i class="fas fa-stroopwafel fa-spin"></i>
            </div>
        )
    }
}

    return (
        <div className='mt-6'>
            {renderPosts()}
        </div>
    )
}