import React from 'react'
import Title from '../components/Title'
import PopularPost from './PopularPost';

export default function PopularPosts(props) {
    const renderPopularPosts = () => {
        const posts = props.posts
        return posts.map((post) => {
            console.log(post);
            return (
                <>
                    <PopularPost post={post}/>
                </>
            )
        })
    }
    return (
        <>
            <Title title='Popular' size='2rem' align='start' margin='1em 0 0 0'/>
            {renderPopularPosts()}
        </>
    )
}
