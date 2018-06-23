import React from 'react'
import Link from 'gatsby-link'
import Offer from '../components/offer';

const IndexPage = (props) => {
  console.log(props)
  
  return (
  <div>
    <Offer />
  </div>
)}

export default IndexPage

export const pageQuery = graphql`
query PageQuery
{
  allContentfulWhatWeOfferContent {
    edges {
      node {
        title
        content {
          content
        }
      }
    }
  }  
}`