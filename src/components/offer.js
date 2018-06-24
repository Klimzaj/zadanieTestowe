import React from 'react'
import styled from 'styled-components'
import OfferContent from './offerContent.js'


const H1 = styled.h1`
    font-size: 25px;
    margin-bottom: 5px;
`
const H2 = styled.p`
  font-size: 10px;
  margin-bottom: 5px;
  font-style: italic;
`

const Wrapper = styled.section`
    padding-top: 80px;
    padding-left: 370px;
    padding-right: 370px;  
    background: white;
    height: 637px;
`

const WrapperContent = styled.div`
    display: grid;
    grid: auto / auto auto;
    justify-items: center;
    margin-left: 190px;
    margin-right: 190px;
  
`
const TitleDiv = styled.section`
    text-align: center;
    line-height: 12px;
    

`

const Offer = ({offers,infos}) => (
  <div>
    <Wrapper>
        <TitleDiv>
            <H1>{infos.title}</H1>
            <H2>{infos.secondaryTitle}</H2>
            <img src={infos.img.file.url} width={infos.img.file.details.image.width} height={infos.img.file.details.image.height}/>
        </TitleDiv>
        <WrapperContent>
            {offers.map((node)=><OfferContent data={node.node}/>)}
        </WrapperContent>
    </Wrapper>
  </div>
)

export default Offer
