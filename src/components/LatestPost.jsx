import React from 'react'
import { useHistory } from 'react-router-dom';
import { Title, Subtitle } from '../components/layout'

export default function LatestPost(props) {
    const history = useHistory();

    console.log(props);
    return (
        <>
            <Title title='Newest Post' size={5} className=''/>
            <article className="b-promotion tile is-child box is-light">
                {/* LINK TO UPDATE */}
            <div onClick={() => history.push(`/blog/${props.post.id}`)}>
                <img alt="red haired caucasian woman comparing apples and oranges." title="The Ultimate Guide to Quickly Estimating a Property’s ARV (After Repair Value)" className="b-img-fluid rounded b-promotion__img" style={{minWidth: '100%'}} src="https://assets2.biggerpockets.com/uploads/wordpress_blog_post/image/7678/homepage_featured_comparing-apples-to-oranges.jpg"/>
            </div>
            <div className="b-content__info">
            <div className='is-flex' style={{justifyContent: 'space-between'}}>
                <Subtitle title={props.post.category} style={{fontSize: '.8rem', padding: '.25em'}}/>
                <Subtitle title={new Date(props.post.datePosted).toDateString()} style={{fontSize: '.8rem'}}/>
            </div>
                <div className="b-promotion__blog-hero">
                    <h3 itemprop="name headline" style={{fontSize:'1.1em'}} onClick={() => history.push(`/blog/${props.post.id}`)}>{props.post.title}</h3>
                    <div className='is-flex' style={{alignItems: 'center', justifyContent:'flex-start', paddingTop: '.5em'}}>
                        <figure class="image is-48x48">
                            <img src={props.post.authorImg} alt="Placeholder" className='is-rounded'/>
                        </figure>
                        <Subtitle title={props.post.author} className='pl-2'/>
                    </div>
                    <p className="b-content__short">
                        {props.post.body}
                    </p>
                </div>
            </div>
        </article>
        </>

    )
}
