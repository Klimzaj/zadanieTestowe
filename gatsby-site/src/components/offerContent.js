import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 10px;
  background: white;
  width: 500px;
  height: auto;
  margin: 10px;
  display: flex;
  
//   text-align: right;
`
const Par = styled.p`
    font-size: 10px;
    text-align: justify;
`
const Div = styled.div`
    padding: 10px;
`

const OfferContent = ({data}) => (

    <Wrapper>
        <img src={"http://placehold.it/150/150"}/>
        <Div>
            <h3>{data.title}</h3>
            <Par>{data.content.content}</Par>
        </Div>
    </Wrapper>

)

export default OfferContent

