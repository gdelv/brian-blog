import React, { useEffect, useState } from 'react'
import firebase from '../firebase'
// import LatestPost from '../components/LatestPost'
// import PopularPosts from '../components/PopularPosts';
// import { Flex } from '../components/layout'

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
                {/* <Flex className='w-full lg:w-2/3 lg:mr-2' style={{height: '44rem'}}>
                    <LatestPost post={posts[0]} />
                </Flex>
                <Flex className='flex-col bg-red-500 w-full lg:w-1/3 lg:ml-2' style={{height: '44rem'}}>
                    <PopularPosts posts={popularArr} />
                </Flex> */}
<div class="tile is-ancestor">
    <div class="tile is-parent">
    <article class="tile is-child box">
       Put any content you want 
       this one
    </article>
  </div>
  <div class="tile is-vertical is-4">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child box">
           Put any content you want
        </article>
        <article class="tile is-child box">
           Put any content you want 
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child box">
         Put any content you want 
      </article>
    </div>
  </div>
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
