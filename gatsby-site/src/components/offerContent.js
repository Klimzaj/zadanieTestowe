import React from 'react'
import styled from 'styled-components'

const Wrapper2 = styled.section`
  padding: 4em;
  background: white;
  text-align: center;
`

const OfferContent = ({data}) => (
  <div>
    <Wrapper2>
        <h3>{data}</h3>
    </Wrapper2>
  </div>
)

export default OfferContent

