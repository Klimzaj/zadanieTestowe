import React from 'react'
import styled from 'styled-components'

const WrapperContent = styled.div`
    margin: 14px;
`

const WrapperUp = styled.div`
    background: #dededd;
    width: 360px;
    height: 217px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  
`
const WrapperDown = styled.section`
    background: white;
    width: 360px;
    height: 183px;
    padding-top: 20px;
    padding-left: 35px;
    padding-right: 35px;
    
`
const ContentTitle = styled.h1`
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 0px;
    font-size: 15px;

`
const Img = styled.img`
    margin: 0px;
`

const P = styled.p`
    font-size: 15px;
    text-align: justify;
    line-height: 16px;
`
const HeroContent = ({data}) => {
    return(
  <WrapperContent>
    <WrapperUp>
        <Img src={data.readMoreImg.file.url} width={data.readMoreImg.file.details.image.width} height={data.readMoreImg.file.details.image.height} />
    </WrapperUp>
    <WrapperDown>
        <Img src={data.img.file.url} width={data.img.file.details.image.width} height={data.img.file.details.image.height} />
        <ContentTitle>{data.title}</ContentTitle>
        <P>{data.content.content}</P>
    </WrapperDown>
  </WrapperContent>
)
}
export default HeroContent
