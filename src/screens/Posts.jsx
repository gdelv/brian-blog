import React, { useEffect, useState } from 'react'
import firebase from '../firebase'
import './Posts.css'
import LatestPost from '../components/LatestPost'
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
            <>
            <div class="columns is-desktop">
                {/* <div className="tile is-ancestor"> */}
                    <div className="column is-8-desktop">
                        <div class="tile is-parent ">
                                <LatestPost post={posts[0]} />
                        </div>
                </div>
                <div className="column">
                    <div class="tile is-parent is-vertical  ">
                {popularArr.map(post => {
                    return (
                        <article class="tile is-child box">
                            {post.author}
                        </article>
                    )
                })}
                    </div>
                </div>
                {/* </div> */}
            </div>
            
            </>
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
