import React from 'react'
import Link from 'gatsby-link'
import Offer from '../components/offer';

const OfferPage = ({data}) => {
  // console.log(data.allContentfulWhatWeOferInfo.edges[0].node)
  
  return (
  <div>
    <Offer offers = {data.allContentfulWhatWeOfferContent.edges} infos={data.allContentfulWhatWeOferInfo.edges[0].node}/>
  </div>
)}

export default OfferPage

// img {
//   resolutions {
//     width
//     height
//     src
//   }
// }
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
        img {
          file {
            url
            details {
              image {
                width
                height
              }
            }
          }
        }
      }
    }
  }  
  allContentfulWhatWeOferInfo {
    edges {
      node {
        title
        secondaryTitle
        img {
          file {
            url
            details {
              image {
                width
                height
              }
            }
          }
        }
      }
    }
  }
}`