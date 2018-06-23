import React from 'react'
import Link from 'gatsby-link'
import Offer from '../components/offer';

const OfferPage = ({data}) => {
  console.log(data.allContentfulWhatWeOfferContent.edges)
  
  return (
  <div>
    <Offer offers = {data.allContentfulWhatWeOfferContent.edges}/>
  </div>
)}

export default OfferPage

export const pageQuery = graphql`
query offerQuery
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