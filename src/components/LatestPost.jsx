import React, { useState } from 'react'
import { Title } from '../components/layout'

export default function LatestPost(props) {
    const [translate, setTranslate] = useState('-140')

    console.log(props);
    return (
        <>
            <article class="b-promotion tile is-child box">
            <Title title='Newest Post' size={2} className=''/>
            <a href="/blog/estimate-arv">
                <img alt="red haired caucasian woman comparing apples and oranges." title="The Ultimate Guide to Quickly Estimating a Property’s ARV (After Repair Value)" class="b-img-fluid rounded b-promotion__img" src="https://assets2.biggerpockets.com/uploads/wordpress_blog_post/image/7678/homepage_featured_comparing-apples-to-oranges.jpg"/>
            </a>
            <div class="b-content__info" style={{bottom: `${translate}px`}} onMouseLeave={() => setTranslate('-140')} onMouseEnter={() => setTranslate('0')}>
                <p>
                    <span class="b-badge"><a href="/blog/category/real-estate-deal-analysis-advice">Real Estate Deal Analysis &amp; Advice</a></span>
                    <time class="b-date" datetime="2020-09-24 14:00:26 -0700" itemprop="datePublished">Sep 24, 2020</time>
                </p>
                <div class="b-promotion__blog-hero">
                    <h3 itemprop="name headline"><a class="b-blog-link" href="/blog/estimate-arv">The Ultimate Guide to Quickly Estimating a Property’s ARV (After Repair Value)</a></h3>
                    <div class="b-author" itemprop="author" itemscope="" itemtype="http://schema.org/Person">
                        <div class="b-author__img">
                            <img class="rounded-circle" src="https://assets0.biggerpockets.com/uploads/wordpress_author/avatar/10/tiny_1565904223-avatar-clemsoninvestor.jpg" alt='random'/>
                        </div>
                        <div class="b-author__name" itemprop="name">
                            <a href="/blog/contributors/chadcarson">By Chad Carson</a>
                        </div>
                    </div>
                    <p class="b-content__short">What’s the #1 skill you need to have to make money off of real estate? I would argue it’s learning how to accurately value a property. This guide will explain, step by step, how to do a quick and dirty estimate of value for single family or other small residential property.
                    </p>
                </div>
            </div>
        </article>
        </>

    )
}
