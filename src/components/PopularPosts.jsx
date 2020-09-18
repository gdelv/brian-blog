import React from 'react'
import { Title } from './layout/Title';
import PopularPost from './PopularPost';

export default function PopularPosts(props) {
    const renderPopularPosts = () => {
        // console.log(props.posts);
        const posts = props.posts
        return posts.map((post) => {
            console.log(post);
            return (
                <>
                    <div className="" style={{margin:'0em auto'}}>
                        <PopularPost post={post}/>
                    </div>
                </>
            )
        })
    }
    return (
        <>
            <Title title='Popular' size={2} className='mb-5'/>
            {renderPopularPosts()}
        </>
    )
}
