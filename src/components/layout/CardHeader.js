import React from 'react'
import { Flex, Subtitle } from '../layout'

export const CardHeader = ({category, date}) => {
    return (
        <Flex>
            <Subtitle 
                title={category} 
                className='bg-blue-800 rounded text-white p-1 m-5'
            />
            <Subtitle 
                title={date} 
                className='m-5 text-gray-600'
            />
        </Flex>
    )
}
