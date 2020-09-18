import React from 'react'
import { Flex } from './Flex'

export const AuthorCard = ({ authorImg, authorName }) => {
    return (
        <Flex className='flex-start m-2'>
            <img 
                style={{borderRadius:'50%', height:'50px', width:'50px'}} 
                src={authorImg} 
                alt="avatar"
            />
            <p 
                className='m-5 text-gray-600 underline'>
                    {`By ${authorName}`}
            </p>
        </Flex>
    )
}
