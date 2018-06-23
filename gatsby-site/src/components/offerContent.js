import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 10px;
  padding-top: 44px;
  background: #fcfcfc;
  width: 360px;
  height: 183px;
  margin: 10px;
  display: flex;
  justify-content: center;
`
const Par = styled.p`
    font-size: 10px;
    text-align: justify;
    line-height: 12px;
`
const Div = styled.div`
    padding-left: 20px;
`
const ContentTitle = styled.p`
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 0px;
    font-size: 15px;

`


const OfferContent = ({data}) => (

    <Wrapper>
        <img src={data.img.file.url} width={data.img.file.details.image.width} height={data.img.file.details.image.height}/>
        <Div>
            <ContentTitle>{data.title}</ContentTitle>
            <Par>{data.content.content}</Par>
        </Div>
    </Wrapper>
)

export default OfferContent

