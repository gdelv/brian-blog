import React, { useEffect, useState } from 'react'
import firebase from '../firebase'
import LatestPost from '../components/LatestPost'
import PopularPosts from '../components/PopularPosts';
import { Flex } from '../components/layout'

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
                <Flex className='w-full lg:w-2/3 lg:mr-2' style={{height: '44rem'}}>
                    <LatestPost post={posts[0]} />
                </Flex>
                <Flex className='flex-col bg-red-500 w-full lg:w-1/3 lg:ml-2' style={{height: '44rem'}}>
                    <PopularPosts posts={popularArr} />
                </Flex>
            </>
        )
    }
    else {
        return (
            <p>Loading posts...</p>
        )
    }
}

    return (
        <div className='flex flex-col lg:flex-row my-4 mx-4 items-center h-full'>
            {renderPosts()}
        </div>
    )
}
