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
    color: red;
    text-aligne: center; 
`
const H2 = styled.h2``

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  text-align: center;
`

const Printtt = ({a})=>{
    return (<p>{a}</p>)
}

const Offer = () => (
  <div>
    <Wrapper>
        <H1>What we Offer</H1>
        <H2>TAILORED LOGISTIC SERVICES</H2>
        {/* <OfferContent/> */}
        {/* <OfferContent data={data.n}/> */}
        {data.map((node)=><OfferContent data={node.node.title}/>)}
        {data.map((node)=>console.log(node.node))}
    </Wrapper>
  </div>
)

export default Offer
