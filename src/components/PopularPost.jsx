import React from 'react'
import { useHistory } from 'react-router-dom';
import Container from './Container';
import Image from './Image';
import InfoCard from './InfoCard';



export default function PopularPost(props) {
    const history = useHistory();
    console.log(props);
    const { post } =  props;
    return (
        <Container width='100%' height='150px' display='flex' direction='row' margin='1.5em 0 0 0'>
            <Container width='100%' flex={1}>
                <Image src='https://assets1.biggerpockets.com/uploads/wordpress_blog_post/image/14286/lead_eviction-moratorium-tenant-financial-difficulty.jpg' alt="popular-post" height='150px' width='100%' onClick={() => history.push(`/blog/${post.id}`)}/>
            </Container>
            <Container width='100%' display='flex' direction='column' flex={2}>
                <InfoCard headerSize='.9rem' titleSize='1.4rem' authorSize='1rem' post={post} />
            </Container>
        </Container>
    )
}