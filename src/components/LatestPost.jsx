import React from 'react'
import { AuthorCard, CardHeader, Flex, Subtitle, Title } from './layout';

export default function LatestPost(props) {
    console.log(props);
    return (
        <Flex className='flex-col w-full'>
            <Title title='Newest Post' size={2} className=''/>
            <Flex className='rounded-lg items-end justify-start bg-cover bg-center mx-auto my-0' style={{backgroundImage: `url('https://assets2.biggerpockets.com/uploads/wordpress_blog_post/image/14303/homepage_featured_lender.jpg')`, height: '40rem'}}>
                <Flex className='bg-white w-9/12 flex-col'>
                    <CardHeader 
                        category='Mobile Homes' 
                        date='Sept 03, 2020'
                    />
                    <Title 
                        title='12 Ways to Find New & Used Mobile Homes for Sale' className='font-bold m-2' 
                        size={2}
                    />
                    <AuthorCard 
                        authorImg='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Gph501rvwMVoeSGyfOEuFgHaEK%26pid%3DApi&f=1'
                        authorName='Obama'
                    />
                    <Subtitle
                        title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, ipsum? Maiores corporis est debitis repellat, voluptates, non nihil modi ad harum cupiditate, ipsa quam adipisci. Mollitia alias tempore praesentium sit.'
                        />
                </Flex>
            </Flex>
        </Flex>
    )
}
