import React from 'react';
import { Secondary } from '../colors';
import Container from './Container';
import Image from './Image';
import Title from './Title';

const InfoCard = (props) => {
    const { headerSize, titleSize, authorSize } = props;
    const { title, datePosted, category, author, authorImg } = props.post;
    return (
        <Container width='100%' height='150px' display='flex' direction='column' justify='space-around' padding='.5em'>
                <Container display='flex' direction='row' justify='space-between' width='100%'>
                    <Title title={category} backColor={Secondary} size={headerSize} align='center' />
                    <Title title={new Date(datePosted).toDateString()} size={headerSize} align='center' />
                </Container>
                <Title title={title} size={titleSize} align='left' />
                <Container display='flex' direction='row' justify='space-between'>
                    <Container>
                        <Image src={authorImg} height='30px' width='30px' alt='avatar' radius='50%'/> 
                    </Container>    
                    <Title title={`By ${author}`} size={authorSize} />
                </Container>        
        </Container>
    )
}


export default InfoCard
