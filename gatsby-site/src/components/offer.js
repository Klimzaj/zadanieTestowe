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
    padding-left: 280px;
    padding-right: 280px;  
    background: white;
    // background: blue;
    height: 700px;
`

const WrapperContent = styled.section`
    display: grid;
    grid: auto / auto auto;
    justify-items: center;
  
`
const TitleDiv = styled.section`
    text-align: center;
    line-height: 12px;
    

`

const MyBorder = styled.section`
  background-color: yellow;
  width: 34px;
  height: 10px;
  margin-bottom: 35px;
`

const Offer = ({offers}) => (
  <div>
    <Wrapper>
        <TitleDiv>
        <H1>What we Offer</H1>
        <H2>TAILORED LOGISTIC SERVICES</H2>
        <center>
        <MyBorder></MyBorder>
        </center>
        </TitleDiv>
        {/* <OfferContent/> */}
        {/* <OfferContent data={data.n}/> */}
        <WrapperContent>
        {offers.map((node)=><OfferContent data={node.node}/>)}
        </WrapperContent>
    </Wrapper>
  </div>
)

export default Offer
