import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom';
import firebase from '../firebase';
import LatestPost from '../components/LatestPost';
import Container from '../components/Container'
import PopularPosts from '../components/PopularPosts'
// import PopularPosts from '../components/PopularPosts';

export default function Posts() {
const [posts, setPosts] = useState([])
const [width, setWidth] = useState(window.innerWidth);
// const history = useHistory()
useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    }
}, [])
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
        popularArr.push(element);
        // console.log(popularArr);
    }
    if (posts.length) {
        return (
            <Container width='80%' margin='0 auto' display='flex' direction={ width < 1000 ? 'column' : 'row' }>
                {/* change to column on low 1000px */}
                    <Container padding='1em' height='750px' width={width < 1000 ? '100%' : '60%'}>
                        <LatestPost post={posts[0]} />
                    </Container>
                    <Container padding='1em' height='750px' width={width < 1000 ? '100%' : '40%'} display='flex' direction='column' justify='flex-start'>
                        <PopularPosts posts={popularArr} />
                    </Container>
            </Container>
        )
    }
    else {
        return (
            <div class="fa-3x" style={{width:'100%',height:'40vh', display:'flex', justifyContent: 'center', alignItems: 'center', fontSize: '4rem'}}>
                <i class="fas fa-sync fa-spin"></i>
            </div>
        )
    }
}

    return (
        <>
            {renderPosts()}
        </>
    )
}


// <div class="tile is-ancestor px-3 py-3">
//                 <div class="tile is-vertical">
//                     <div class="tile">
//                     <div class="tile is-parent is-vertical is-7">
//                         <LatestPost post={posts[0]}/>
//                     </div>
//                     <div class="tile is-parent is-vertical">
//                         <Title title='Popular Posts' size={5} />
//                         {/* START OF MAP COMPONENT */}
//                             {popularArr.map(post => {
//                                 return (
//                                     <article class="tile is-child box notification is-light">
//                                     <div className="columns is-mobile">
//                                         <div className="column is-4 has-text-centered" onClick={() => history.push(`/blog/${post.id}`)}> 
//                                           {/* WRAP LINK HERE */}
//                                             <figure class="image is-128x128">
//                                                 <img src="https://bulma.io/images/placeholders/128x128.png" alt='random' />
//                                             </figure>
//                                         </div>
//                                         <div className="column">
//                                             <div className='is-flex' style={{justifyContent: 'space-between'}}>
//                                                 <Subtitle title={post.category} style={{fontSize: '.8rem', background: 'blue', padding: '.25em'}}/>
//                                                 <Subtitle title={new Date(post.datePosted).toDateString()} style={{fontSize: '.8rem'}}/>
//                                             </div>
//                                             <div>
//                                                 <Title title={post.title} size='6' />
//                                             </div>
//                                             <div className='is-flex' style={{alignItems: 'center', justifyContent:'flex-start', paddingTop: '.5em'}}>
//                                                 <figure class="image is-48x48">
//                                                     <img src={post.authorImg} alt="Placeholder" className='is-rounded'/>
//                                                 </figure>
//                                                 <Subtitle title={post.author} className='pl-2'/>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </article>
//                                 )
//                             })}
//                         {/* END OF MAP COMPONENT */}
//                     </div>
//                     </div>
//                 </div>
//             </div>