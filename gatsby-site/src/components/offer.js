import React from 'react'
import styled from 'styled-components'
import OfferContent from './offerContent.js'


const data = [
    {
      "node": {
        "title": "Contract logistics",
        "content": {
          "content": "Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack!"
        }
      }
    },
    {
      "node": {
        "title": "Overland, Ocean and Air Freight",
        "content": {
          "content": "To an English person, it will seem like simplified English, as a skleptical Cambridge friend of mine told me what Occi-dental is.The European languages are members of the same family."
        }
      }
    },
    {
      "node": {
        "title": "Warehousing and Storage",
        "content": {
          "content": "The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens for a quick jump. Joaquin Phoenix was gazed by MTV for luck. A wizard's job is to ve chumps quickly in fog. Watch \"Jeopardy!\", Alex Trebek's fun TV quiz game."
        }
      }
    },
    {
      "node": {
        "title": "Consulting Services",
        "content": {
          "content": "The Big Oxmox advised her not to do so, because there were thousands of bad Commas, will Question Marks and devious Semikoli, but the the Little Blind Text didn't listen. She packed her seven versalia."
        }
      }
    }
  ]
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

const Offer = () => (
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
        {data.map((node)=><OfferContent data={node.node}/>)}
        </WrapperContent>
    </Wrapper>
  </div>
)

export default Offer
